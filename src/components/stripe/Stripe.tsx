import React, { useEffect, useState } from "react";
import { StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { IResponse } from "../../helpers/axios";
import { IApiDataResponse } from "../../models/ApiDataResponse";
import { CheckoutForm } from "./CheckoutForm";
import useLoading from "../../hooks/useLoading";
import { SkeletonPlaceholder } from "../skeletonPlaceholder/SkeletonPlaceholder";

export interface IStripeProps {
  stripe: any;
  returnUrl: string;
  createPaymentIntent: () => IResponse<IApiDataResponse<string>>;
}

export const Stripe: React.FunctionComponent<IStripeProps> = (props) => {
  const { stripe, createPaymentIntent, returnUrl } = props;
  const [clientSecret, setClientSecret] = useState<string>();
  const loading = useLoading();

  const fetchClientSecret = async () => {
    loading.start();
    const result = await createPaymentIntent();
    setClientSecret(result.payload.data);
    loading.stop();
  };

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetchClientSecret();
  }, []);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  if (loading.isLoading) {
    return <SkeletonPlaceholder />;
  }

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripe}>
          <CheckoutForm returnUrl={returnUrl} />
        </Elements>
      )}
    </>
  );
};
