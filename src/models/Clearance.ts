import { IDocumetResponse } from "./DocumetResponse";
import {
  ClearanceStatus,
  Currency,
  PaymentStatus,
  PortType,
  ShipmentStatus,
} from "./enum";
import { IPageQuery } from "./PageQuery";
import { ISchemaModel } from "./SchemaModel";

export interface IClearance extends ISchemaModel {
  portType: PortType;
  entryPort: string;
  deliveryAddress: string;
  status: ClearanceStatus;
  shipmentStatus: ShipmentStatus;
  paymentStatus: PaymentStatus;
  currency: Currency;
  price?: number;
  invoices?: IDocumetResponse[];
  documents?: IDocumetResponse[];
}

export interface IClearanceEdit extends Partial<IClearance> {}

export interface IClearanceQuery extends IClearanceEdit, IPageQuery {
  isOpen?: boolean;
}
