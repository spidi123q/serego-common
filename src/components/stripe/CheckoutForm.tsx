import "./CheckoutForm.scss";
import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  PaymentElementProps,
} from "@stripe/react-stripe-js";
import { SimpleButton } from "../simpleButton/SimpleButton";
import { useSnackbar } from "notistack";
import useLoading from "../../hooks/useLoading";

export interface ICheckoutFormProps {
  returnUrl: string;
}

export const CheckoutForm: React.FunctionComponent<ICheckoutFormProps> = (
  props
) => {
  const { returnUrl } = props;
  const stripe = useStripe();
  const elements = useElements();
  const loading = useLoading();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          enqueueSnackbar("Payment succeeded!", { variant: "success" });
          break;
        case "processing":
          enqueueSnackbar("Your payment is processing.");
          break;
        case "requires_payment_method":
          enqueueSnackbar(
            "Your payment was not successful, please try again.",
            {
              variant: "error",
            }
          );
          break;
        default:
          enqueueSnackbar("Something went wrong.", {
            variant: "error",
          });
          break;
      }
    });
  }, [stripe]);

  useEffect(() => {
    loading.start();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    loading.start();

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: returnUrl,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      enqueueSnackbar(error.message, {
        variant: "error",
      });
    } else {
      enqueueSnackbar("An unexpected error occured.", {
        variant: "error",
      });
    }

    loading.stop();
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <PaymentElement onReady={loading.stop} id="payment-element" />
      <br />
      <SimpleButton
        loading={loading.isLoading || !stripe || !elements}
        id="submit"
        type="submit"
      >
        Pay now
      </SimpleButton>
    </form>
  );
};
