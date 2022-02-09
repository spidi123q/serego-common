import React, { useEffect, useState } from "react";
import { IResponse } from "../../helpers/axios";
import useLoading from "../../hooks/useLoading";
import { IApiDataResponse } from "../../models/ApiDataResponse";
import { ISummaryCardProps, SummaryCard } from "./SummaryCard";

export interface ICountSummaryCardProps
  extends Omit<ISummaryCardProps, "title"> {
  fetchCount: () => IResponse<IApiDataResponse<number>>;
}

export const CountSummaryCard: React.FunctionComponent<ICountSummaryCardProps> =
  (props) => {
    const { fetchCount, ...rest } = props;
    const loading = useLoading();
    const [count, setCount] = useState<number>(0);

    const fetch = async () => {
      loading.start();
      const result = await fetchCount();
      setCount(result.payload.data);
      loading.stop();
    };

    useEffect(() => {
      fetch();
    }, []);

    return <SummaryCard {...rest} title={count} loading={loading.isLoading} />;
  };
