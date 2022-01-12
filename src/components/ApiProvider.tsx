import React, { useContext } from "react";

export interface IApiProviderProps {
  endpoint: string;
}

const ApiContext = React.createContext<string>("http://localhost:9090");

export const ApiContextProvider: React.FunctionComponent<IApiProviderProps> = ({
  children,
  endpoint,
}) => <ApiContext.Provider value={endpoint}>{children}</ApiContext.Provider>;

export const ApiContextConsumer = ApiContext.Consumer;

export const useApiContext = () => useContext(ApiContext);
