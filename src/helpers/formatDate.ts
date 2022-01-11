import { isNil, isString } from "lodash";
import { format, parseISO } from "date-fns";

export const formatWithTime = (date?: string | Date | null): string => {
  if (isNil(date)) {
    return "";
  }
  return format(isString(date) ? parseISO(date) : date, "ddd, MMM Do YYYY");
};
