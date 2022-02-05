import { PortType } from "./enum";
import { IPageQuery } from "./PageQuery";
import { ISchemaModel } from "./SchemaModel";

export interface IClearance extends ISchemaModel {
  portType: PortType;
  entryPort: string;
  deliveryAddress: string;
}

export interface IClearanceEdit extends Partial<IClearance> {}

export interface IClearanceQuery extends IClearanceEdit, IPageQuery {
  page: number;
}
