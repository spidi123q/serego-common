import { isBoolean, isNumber, isString } from "lodash";
import {
  getRemoteConfig,
  getValue,
  fetchAndActivate,
} from "firebase/remote-config";

export const initRemoteConfig = async (
  initValues: Record<string, string | number | boolean>
) => {
  const remoteConfig = getRemoteConfig();
  remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
  remoteConfig.defaultConfig = { ...initValues };
  const fetchedRemotely = await fetchAndActivate(getRemoteConfig());

  if (fetchedRemotely) {
    console.log("Configs were retrieved from the backend and activated.");
  } else {
    console.log(
      "No configs were fetched from the backend, and the local configs were already activated"
    );
  }
};

export function getSystemConfigValue<T>(
  initValues: Record<string, string | number | boolean>,
  key: keyof T
) {
  const value = getValue(getRemoteConfig(), key as string);
  if (isString(initValues[key])) {
    return value.asString();
  } else if (isNumber(initValues[key])) {
    return value.asNumber();
  } else if (isBoolean(initValues[key])) {
    return value.asBoolean();
  } else {
    return value.getSource();
  }
}
