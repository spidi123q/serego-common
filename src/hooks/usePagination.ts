import React, { useState, useEffect, useRef } from "react";
import { IResponse } from "../helpers/axios";
import PaginateResult from "../models/PaginateResult";
import _ from "lodash";
import InfiniteScroll from "react-infinite-scroller";
import { startPage } from "../models/constants";
import cleanDeep from "clean-deep";

interface IProps<T, U> {
  fetchCollections(params: U): IResponse<PaginateResult<T>>;
}

export default function usePagination<T, U>(props: IProps<T, U>) {
  /**
   * Reference to infinite scroller
   */
  const scrollRef = useRef<any>();
  console.info("scrollRef: pageLoaded", scrollRef?.current?.pageLoaded);

  /**
   * used to avoid data miss during state change. Note: should not be used for other purpose
   */
  const resultCollections = useRef<any[]>([]);
  /**
   * Params for data fetching
   */
  const query = useRef<IQuery<U>>();
  /**
   * list of items upto current page
   */
  const [collections, setCollections] = useState<T[]>([]);
  console.info("collections length: ", collections.length);

  /**
   * Defines if end of pagination reached or not
   */
  const [hasMore, setHasMore] = useState<boolean>(true);

  /**
   *
   * @param page Page number
   * @param params Optional query variables
   */
  const fetchCollections = async (page: number) => {
    let fetchQuery: any = { page };

    if (!_.isEmpty(query.current)) {
      fetchQuery = cleanDeep({ ...query.current, page });
    }
    const result = await props.fetchCollections(fetchQuery);

    /**
     * if page is start page then empty list and start as fresh
     */
    resultCollections.current =
      page === startPage
        ? result.payload.docs
        : [...resultCollections.current, ...result.payload.docs];

    setCollections(resultCollections.current);
    if (result.payload.hasNextPage) {
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  };

  /**
   * Reload list from strat
   */
  const reload = async () => {
    if (scrollRef?.current) {
      scrollRef.current.pageLoaded = startPage;
    }
    fetchCollections(startPage);
  };

  /**
   *
   * @param params Set params for fetching, will reload once set
   */
  const setQuery = (params?: IQuery<U> | undefined) => {
    query.current = params;
    reload();
  };

  /**
   * Load initial data
   */
  useEffect(() => {
    reload();
  }, []);
  return {
    collections,
    hasMore,
    scrollRef,
    reload,
    fetchCollections,
    setQuery
  };
}

export type IQuery<U> = Omit<U, "page">;
