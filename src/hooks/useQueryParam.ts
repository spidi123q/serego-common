import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function useQueryParam() {
  const { search } = useLocation();
  console.log("🚀 ~ file: useQueryParam.ts ~ line 6 ~ search", search);

  return useMemo(() => new URLSearchParams(search), [search]);
}
