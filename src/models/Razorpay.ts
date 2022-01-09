export interface IOptions {
  description: string;
  image?: string;
  currency: string;
  key: string;
  amount: string;
  name: string;
  order_id: string;
  prefill: IPrefill;
  theme?: ITheme;
}

export interface IPrefill {
  email?: string;
  contact?: string | null;
  name?: string;
}

export interface ITheme {
  color: string;
}

// Generated by https://quicktype.io

export interface IError {
  code: number;
  description: string;
  details: IPrefill;
}

// Generated by https://quicktype.io

export interface ISuccess {
  razorpay_signature: string;
  razorpay_order_id: string;
  razorpay_payment_id: string;
  checkout_logo: string;
  custom_branding: boolean;
  org_logo: string;
  org_name: string;
}
