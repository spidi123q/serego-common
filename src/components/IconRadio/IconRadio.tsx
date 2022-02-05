import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import classNames from "classnames";
import React from "react";
import { IKeyValuePair } from "../../models/KeyValuePair";
import { SimpleButton } from "../simpleButton/SimpleButton";
import { getIcon, IconNames } from "../simpleIcon/helper";
import { SimpleIcon } from "../simpleIcon/SimpleIcon";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import "./IconRadio.scss";

export interface IIconRadioProps {
  label?: string;
  defaultValue?: string;
  options: IIconRadioItem[];
  width?: "sm";
  onChange?: (value: string) => void;
  error?: boolean;
  helperText?: React.ReactNode;
}

export const IconRadio: React.FunctionComponent<IIconRadioProps> = (props) => {
  const { label, defaultValue, options, width, onChange, error, helperText } =
    props;

  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (selectedValue: string) => {
    setValue(selectedValue);
    onChange && onChange(selectedValue);
  };

  return (
    <FormControl className="icon-radio" component="fieldset" error={error}>
      {label && <SimpleTypography>{label}</SimpleTypography>}
      <br />
      <RadioGroup
        row
        value={value}
        onChange={(event) =>
          handleChange((event.target as HTMLInputElement).value)
        }
      >
        {options.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item.Value}
            control={<Radio color="primary" />}
            label={
              <SimpleButton
                className={classNames("icon-radio__button", {
                  ["icon-radio__button--active"]: item.Value === value,
                  ["icon-radio__button--inactive"]: item.Value !== value,
                  [`icon-radio__button--${width}`]: width,
                })}
                variant="text"
                onClick={() => handleChange(item.Value.toString())}
                startIcon={<SimpleIcon size="lg" name={item.iconName} />}
              >
                <SimpleTypography family="regular" variant="body1">
                  {item.Key}
                </SimpleTypography>
              </SimpleButton>
            }
          />
        ))}
      </RadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export interface IIconRadioItem extends IKeyValuePair {
  iconName: IconNames;
}
