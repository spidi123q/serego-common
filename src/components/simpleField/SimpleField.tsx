import "./SimpleField.scss";
import { Field, FormikProps, ErrorMessage } from "formik";
import React from "react";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import { DropzoneArea, DropzoneAreaProps } from "mui-file-dropzone";
import { first, isBoolean, isNil } from "lodash";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Radio, { RadioProps } from "@mui/material/Radio";
import { useIsSmScreen } from "../../hooks/mediaQuery";
import MobileDatePicker, {
  MobileDatePickerProps,
} from "@mui/lab/MobileDatePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker, { DateTimePickerProps } from "@mui/lab/DateTimePicker";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectProps } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { IKeyValuePair } from "../../models/KeyValuePair";
import { ISimpleInputProps, SimpleInput } from "../simpleInput/SimpleInput";
import {
  ISimpleDropzoneProps,
  SimpleDropzone,
} from "../simpleDropzone/SimpleDropzone";
import classNames from "classnames";
import { IconRadio, IIconRadioProps } from "../IconRadio/IconRadio";

export type ISimpleFieldProps =
  | ITextFieldProps
  | ISelectFieldProps
  | IDateFieldProps
  | IDateTimeFieldProps
  | IRadioFieldProps
  | ISwitchFieldProps
  | IFileFieldProps
  | IIconRadioFieldProps
  | IAutocompleteFieldProps;

export const SimpleField: React.FunctionComponent<ISimpleFieldProps> = (
  props
) => {
  const { type, name, formikProps, children, noMargin, ...rest } = props;
  const isSm = useIsSmScreen();

  const handleChange = (data: any) => {
    formikProps.setFieldValue(name, data);
  };

  const getInput = () => {
    const currentError = formikProps.errors[name];
    const hasError = Boolean(!isNil(currentError) && formikProps.touched[name]);
    if (type === "select") {
      const { options } = props;
      return (
        <FormControl variant="outlined">
          <InputLabel
            htmlFor={`input-for-${name}`}
            id="simple-select-placeholder-label-label"
          >
            {props.label}
          </InputLabel>
          <Field
            {...rest}
            as={Select}
            name={name}
            labelId="simple-select-placeholder-label-label"
            autoWidth
            inputProps={{
              id: `input-for-${name}`,
            }}
            renderValue={
              hasError ? (value: string) => `⚠️  - ${value}` : undefined
            }
          >
            <MenuItem value={""}>
              <em>None</em>
            </MenuItem>
            {options.map((item, index) => (
              <MenuItem key={index} value={item.Key}>
                {item.Value}
              </MenuItem>
            ))}
          </Field>
          <FormHelperText>
            <SimpleTypography>{currentError}</SimpleTypography>
          </FormHelperText>
        </FormControl>
      );
    } else if (type === "date") {
      const DatePicker = isSm ? MobileDatePicker : DesktopDatePicker;
      const currentError = formikProps.errors[name];
      return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            inputFormat="MM/dd/yyyy"
            {...(rest as any)}
            label={name}
            onChange={handleChange}
            value={formikProps.values[name]}
            renderInput={(params) => (
              <SimpleInput
                error={hasError}
                helperText={currentError}
                {...(params as any)}
              />
            )}
          />
        </LocalizationProvider>
      );
    } else if (type === "date-time") {
      return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            inputFormat="MM/dd/yyyy"
            {...(rest as any)}
            label={name}
            onChange={handleChange}
            value={formikProps.values[name]}
            renderInput={(params) => (
              <SimpleInput
                error={hasError}
                helperText={currentError}
                {...(params as any)}
              />
            )}
          />
        </LocalizationProvider>
      );
    } else if (type === "string" || type === "password" || type === "number") {
      return (
        <Field
          variant="outlined"
          {...rest}
          as={SimpleInput}
          name={name}
          type={type}
          error={hasError}
          helperText={currentError}
          multiple
          rows={4}
        />
      );
    } else if (type === "textarea") {
      return (
        <SimpleInput
          multiline
          rows={4}
          {...(rest as any)}
          variant="outlined"
          defaultValue={formikProps.values[name]}
          onChange={(event) => {
            formikProps.setFieldValue(name, event.target.value);
          }}
          error={hasError}
          helperText={currentError}
        />
      );
    } else if (type === "radio") {
      const { options, label } = props;
      return (
        <FormControl component="fieldset" error={hasError}>
          {label && (
            <SimpleTypography color="colorDark">{label}</SimpleTypography>
          )}
          <Field
            className="simple-field__radio-container"
            as={RadioGroup}
            {...rest}
            name={name}
          >
            {options.map((item, index) => (
              <FormControlLabel
                key={index}
                value={item.Value}
                control={<Radio color="primary" />}
                label={<SimpleTypography>{item.Key}</SimpleTypography>}
              />
            ))}
          </Field>
          <FormHelperText>{currentError}</FormHelperText>
        </FormControl>
      );
    } else if (type === "switch") {
      let checked = formikProps.values[name];
      if (!isBoolean(formikProps.values[name])) {
        checked = "true" === formikProps.values[name];
      }
      return (
        <FormControlLabel
          control={
            <Field
              {...rest}
              as={Switch}
              name={name}
              color="primary"
              checked={checked}
            />
          }
          label={props.placeholder ?? ""}
        />
      );
    } else if (type === "file") {
      return (
        <Grid>
          <SimpleDropzone
            {...props}
            onChange={async (files) => {
              const file = first(files);
              handleChange(file);
              formikProps.setFieldTouched(name, true);
            }}
          />
          <ErrorMessage
            name={name}
            render={(msg) => (
              <SimpleTypography color="colorDanger">{msg}</SimpleTypography>
            )}
          />
        </Grid>
      );
    } else if (type === "places-autocomplete") {
      const { children } = props;
      return (
        <Field name={name}>
          {({ meta }: { meta: any }) => (
            <>
              {children}
              {meta.error && (
                <SimpleTypography color="colorDanger">
                  {meta.error}
                </SimpleTypography>
              )}
            </>
          )}
        </Field>
      );
    } else if (type === "icon-radio") {
      return (
        <IconRadio
          {...(rest as any)}
          defaultValue={formikProps.values[name]}
          onChange={handleChange}
          error={hasError}
          helperText={currentError as string}
        />
      );
    } else {
      return <>{children}</>;
    }
  };
  return (
    <div
      className={classNames("simple-field", {
        ["simple-field--noMargin"]: noMargin,
      })}
    >
      {getInput()}
    </div>
  );
};

interface ISimpleFieldBase {
  name: string;
  formikProps: FormikProps<any>;
  noMargin?: boolean;
}

interface ITextFieldProps
  extends ISimpleFieldBase,
    Omit<ISimpleInputProps, "name" | "variant"> {
  type: "string" | "number" | "textarea" | "password";
}

interface ISelectFieldProps
  extends ISimpleFieldBase,
    Omit<SelectProps, "name"> {
  type: "select";
  options: IKeyValuePair[];
}

interface IDateFieldProps extends ISimpleFieldBase, MobileDatePickerProps {
  type: "date";
}

interface IDateTimeFieldProps extends ISimpleFieldBase, DateTimePickerProps {
  type: "date-time";
}

interface IRadioFieldProps extends ISimpleFieldBase, Omit<RadioProps, "name"> {
  type: "radio";
  label?: string;
  options: IKeyValuePair[];
}

interface ISwitchFieldProps
  extends ISimpleFieldBase,
    Omit<SwitchProps, "name"> {
  type: "switch";
}

interface IFileFieldProps extends ISimpleFieldBase, ISimpleDropzoneProps {
  type: "file";
}

interface IAutocompleteFieldProps extends ISimpleFieldBase {
  type: "places-autocomplete" | "async-autocomplete";
}

interface IIconRadioFieldProps
  extends ISimpleFieldBase,
    Omit<IIconRadioProps, "onChange"> {
  type: "icon-radio";
}
