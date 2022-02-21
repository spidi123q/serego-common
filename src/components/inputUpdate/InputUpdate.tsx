import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import classNames from "classnames";
import React, { useState } from "react";
import { IKeyValuePair } from "../../models/KeyValuePair";
import { SimpleButton } from "../simpleButton/SimpleButton";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import Input from "@mui/material/Input";

import "./InputUpdate.scss";
import InputAdornment from "@mui/material/InputAdornment";

export type IInputUpdateProps = ISelectUpdateProps | ITextUpdateProps;

export const InputUpdate: React.FunctionComponent<IInputUpdateProps> = (
  props
) => {
  const { label, loading, defaultValue, type, width } = props;
  const [value, setValue] = useState<string>(defaultValue ?? "");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const onUpdate = () => {
    props.onUpdate(value);
  };
  const selectUpdateClasses = classNames("input-update", {
    [`input-update__width--${width}`]: width,
  });

  const getField = (): JSX.Element | null => {
    switch (type) {
      case "select": {
        const { options } = props;
        return (
          <Select
            value={value}
            onChange={handleChange}
            fullWidth
            disableUnderline
          >
            {options.map((item, index) => (
              <MenuItem key={index} value={item.Key}>
                {item.Value}
              </MenuItem>
            ))}
          </Select>
        );
      }

      case "number":
      case "password":
      case "string":
      case "textarea": {
        const { startAdornment } = props;
        return (
          <TextField
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  {startAdornment}
                </InputAdornment>
              ),
            }}
            value={value}
            type={type}
            onChange={handleChange}
          />
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className={selectUpdateClasses}>
      <FormControl className="input-update__select" variant="standard">
        {label && (
          <SimpleTypography color="colorDark" variant="caption">
            {label}
          </SimpleTypography>
        )}
        {getField()}
      </FormControl>
      <div className="input-update__action">
        <SimpleButton
          color="secondary"
          variant="text"
          onClick={onUpdate}
          loading={loading}
        >
          Update
        </SimpleButton>
      </div>
    </div>
  );
};

export interface IBaseInputUpdateProps {
  label?: string;
  defaultValue?: string;
  onUpdate: (value: string) => void;
  loading?: boolean;
  width?: "md";
}

interface ISelectUpdateProps extends IBaseInputUpdateProps {
  type: "select";
  options: IKeyValuePair[];
}

interface ITextUpdateProps extends IBaseInputUpdateProps {
  type: "string" | "number" | "textarea" | "password";
  startAdornment?: string | JSX.Element;
}
