import { Currency, PaymentStatus } from "./enum";

export interface IStripePaymentDetails {
  currency: Currency;
  status: PaymentStatus;
  price?: number;
  paymentIntentId?: string;
}
