import { v4 as uuidv4 } from "uuid";
import { IGeoJSON } from "../models/GeoJSON";

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {OperatingSystem}
 */
export function getOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return OperatingSystem.WindowsPhone;
  }

  if (/android/i.test(userAgent)) {
    return OperatingSystem.Andorid;
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return OperatingSystem.iOS;
  }
}

export enum OperatingSystem {
  Andorid = "Android",
  iOS = "iOS",
  WindowsPhone = "Windows Phone",
}

/**
 * Generate device identifier. Note: Id will change once storage is cleared
 */
export const getDeviceId = (): string => {
  const label: string = "deviceId";
  let id = localStorage.getItem(label);
  if (!id) {
    id = uuidv4();
    localStorage.setItem(label, id);
  }
  return id;
};

export const getMapsUrl = (location: IGeoJSON) =>
  `https://www.google.com/maps/search/?api=1&query=${location.coordinates[1]},${location.coordinates[0]}`;
