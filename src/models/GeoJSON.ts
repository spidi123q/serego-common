import { GeoJSONType } from "./enum";

export interface IGeoJSON {
  type: GeoJSONType;
  /**
   * Specifying coordinates such longitude first and then latitude
   */
  coordinates: number[] | Array<number[]>;
}
