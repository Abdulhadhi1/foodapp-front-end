import React from "react";

import { useDispatch, useSelector } from "react-redux";

import StripeCheckout from "react-stripe-checkout";

import { placeOrder } from "../actions/OrderAction";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function  Checkout ({ subTotal }){
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
 function tokenHandler(token) {
   console.log(token);
   dispatch(placeOrder(token, subTotal));
 }
  return (
    <>
      {loading && <Success  success="Your Order placed Successfully" />}
      {error && <Error error="Something Went Wrong" />}
      {success && <Success success="Your Order placed Successfully" />}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51MOxaESFMFE01pzMB8k07SF1fWEVbkCFQan23Et4Cz08YkjCer7OVPxgewl5VO7KpPnkia5BEisMOGsmwgprsj6l00ncN4oYLf"
        currency="INR"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </>
  );
};

