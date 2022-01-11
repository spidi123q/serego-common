import _, { first } from "lodash";
import { v4 as uuidv4 } from "uuid";
import { IKeyValuePair } from "..";

export const removeWhiteSpace = (text: string): string =>
  text.replace(/\s/g, "");

export const toKeyValuePair = (obj: any): IKeyValuePair[] =>
  Object.entries(obj).map<IKeyValuePair>((item) => ({
    Key: item[1] as any,
    Value: item[1] as any,
  }));

export const toKeyValuePairFromArr = (values?: string[]): IKeyValuePair[] =>
  values
    ? values.map((value) => ({
        Key: value,
        Value: value,
      }))
    : [];

export const getFileName = (name?: string): string =>
  first(name?.split(".")) ?? uuidv4();
