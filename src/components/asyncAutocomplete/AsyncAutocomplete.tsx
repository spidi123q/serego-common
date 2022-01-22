import React, { useEffect, useState } from "react";
import cleanDeep from "clean-deep";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import { IResponse } from "../../helpers/axios";
import { IPaginateResult } from "../../models/PaginateResult";
import useLoading from "../../hooks/useLoading";
import { StartPage } from "../../config/constants";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

export interface IAsyncAutocompleteProps<T, U> {
  optionLabel: keyof T;
  label: string;
  fetchCollections(params: U): IResponse<IPaginateResult<T>>;
}

export function AsyncAutocomplete<T, U>(
  props: IAsyncAutocompleteProps<T, U> & AutocompletePropsType<T>
) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<T[]>([]);
  const { fetchCollections, optionLabel, label, ...rest } = props;
  const [value, setValue] = useState<string>();
  const loading = useLoading();

  const getOptions = async (active: boolean) => {
    let fetchQuery: any = cleanDeep({ page: StartPage, [optionLabel]: value });
    loading.start();
    const response = await fetchCollections(fetchQuery);
    loading.stop();
    if (active) {
      setOptions(response.payload.docs);
    }
  };

  useEffect(() => {
    let active = true;

    getOptions(active);

    return () => {
      active = false;
    };
  }, [value]);

  return (
    <Autocomplete<T>
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) =>
        option[optionLabel] === value[optionLabel]
      }
      getOptionLabel={(option) => option[optionLabel] as any}
      options={options}
      loading={loading.isLoading}
      {...(rest as any)}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
          label={label}
          variant="outlined"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading.isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

type AutocompletePropsType<T> = Partial<AutocompleteProps<T, any, any, any>>;
