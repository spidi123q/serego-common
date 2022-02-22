import { IRequest } from "../../helpers/axios";
import { RequestTypes } from "../../models/enum";
import { IClearanceEdit } from "../../models/Clearance";

export function CreateClearanceStripePaymentIntent(id: number): IRequest {
  return {
    url: `/api/v1/Clearance/${id}/Stripe/PaymentIntent`,
    method: RequestTypes.Post,
  };
}
