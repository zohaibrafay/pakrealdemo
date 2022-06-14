import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51L7gwdIY1aWHioOI3uvdKHkWCHGj9zTtJj3NizrTwLB5l3qlj0MB2ec7vEN1HA0L0kP3i0XMti6woiTHFJ3ntWsJ00DmDJkfNP";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
