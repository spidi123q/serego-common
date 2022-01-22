import React, { useState, useEffect } from "react";
import { IResponse } from "../../helpers/axios";
import { ILocationResult } from "../../models/LocationResult";
import { v4 as uuidv4 } from "uuid";
import { PlaceAutocompleteResult } from "@googlemaps/google-maps-services-js/dist/places/autocomplete";
import { isEmpty, isNil, throttle } from "lodash";
import { GeoJSONType } from "../../models/enum";
import { locationResultSchema } from "../../helpers/yupScheme";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import parse from "autosuggest-highlight/parse";
import { useMapsAPI } from "../../hooks/useMapsAPI";

export interface IPlacesAutocompleteProps {
  value?: ILocationResult;
  onSelected(result: ILocationResult): void;
}

export const PlacesAutocomplete: React.FunctionComponent<
  IPlacesAutocompleteProps
> = (props) => {
  const { value } = props;
  const [inputValue, setInputValue] = useState<string>("");
  const [options, setOptions] = useState<PlaceAutocompleteResult[]>([]);
  const [token, setToken] = useState<string>(uuidv4());
  const { searchPlace, getPlace } = useMapsAPI();

  const handleChange = async (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    if (isEmpty(value)) {
      return;
    }
    setInputValue(value);
    await throttle(async () => {
      const result = await searchPlace(value, token);
      setOptions((result.payload && result.payload.predictions) ?? []);
    }, 200)();
  };

  const onSelected = async (option: PlaceAutocompleteResult) => {
    setToken(uuidv4());
    setInputValue(option.description);
    const result = await getPlace(option.place_id);

    if (!result?.payload?.result?.geometry) {
      return;
    }
    const locResult: ILocationResult = {
      address: option.description,
      location: {
        type: GeoJSONType.Point,
        coordinates: [
          result.payload.result.geometry.location.lng,
          result.payload.result.geometry.location.lat,
        ],
      },
    };

    if (await locationResultSchema.isValid(locResult)) {
      props.onSelected(locResult);
    }
  };

  return (
    <Autocomplete
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.description
      }
      filterOptions={(x) => x}
      options={options}
      includeInputInList
      freeSolo
      defaultValue={
        value
          ? ({
              description: value.address,
            } as any)
          : undefined
      }
      //disableOpenOnFocus
      renderInput={(params) => (
        <TextField {...params} label="Add a location" fullWidth />
      )}
      onInputChange={handleChange}
      renderOption={(attrs, option: PlaceAutocompleteResult) => {
        const matches =
          option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match: any) => [
            match.offset,
            match.offset + match.length,
          ])
        );

        return (
          <li onClick={() => onSelected(option)}>
            <Grid container alignItems="center">
              <Grid item>
                <Box
                  component={LocationOnIcon}
                  sx={{ color: "text.secondary", mr: 2 }}
                />
              </Grid>
              <Grid item xs>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
                <Typography variant="body2" color="text.secondary">
                  {option.structured_formatting.secondary_text}
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
};
