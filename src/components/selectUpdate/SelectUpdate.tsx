import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import classNames from "classnames";
import React, { useState } from "react";
import { IKeyValuePair } from "../..";
import { SimpleButton } from "../simpleButton/SimpleButton";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import "./SelectUpdate.scss";

export interface ISelectUpdateProps {
  label?: string;
  defaultValue?: string;
  options: IKeyValuePair[];
  onUpdate: (value: string) => void;
  loading?: boolean;
}

export const SelectUpdate: React.FunctionComponent<ISelectUpdateProps> = (
  props
) => {
  const { label, options, loading, defaultValue } = props;
  const [value, setValue] = useState<string>(defaultValue ?? "");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  const onUpdate = () => {
    props.onUpdate(value);
  };
  const selectUpdateClasses = classNames("select-update", {});

  return (
    <div className={selectUpdateClasses}>
      <FormControl className="select-update__select" variant="standard">
        {label && (
          <SimpleTypography color="colorDark" variant="caption">
            {label}
          </SimpleTypography>
        )}
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
      </FormControl>
      <div className="select-update__action">
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
