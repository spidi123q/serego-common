import * as yup from "yup";
import { GeoJSONType } from "../models/enum";
import { parsePhoneNumberFromString as parseMobile } from "libphonenumber-js/mobile";
import { ILocationResult } from "../models/LocationResult";
import { IGeoJSON } from "../models/GeoJSON";

export type IYupRecord<T> = Partial<Record<keyof T, any>>;

export const locationSchema = yup.object().shape<IYupRecord<IGeoJSON>>({
  type: yup.string().matches(new RegExp(GeoJSONType.Point)).required(),
  coordinates: yup.array().of(yup.number()),
});

export const locationResultSchema = yup
  .object()
  .shape<IYupRecord<ILocationResult>>({
    location: locationSchema.required(),
    address: yup.string().required(),
  });

export const getFileSchema = (label: string) =>
  yup.mixed().required().label(label);

export const gePhoneNumberValidation = () =>
  yup
    .string()
    .required("Please enter phone number")
    .test("phone", "Invalid phone number", function (value: any, context: any) {
      try {
        const isValid: boolean = parseMobile(value ?? "")?.isValid() ?? false;
        return isValid;
      } catch (err) {
        return false;
      }
    });
