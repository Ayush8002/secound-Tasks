import React, { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { clearCart, setCalculatePrice, setOrderData } from '../../redux/features/cartReducer';
import { useDispatch, useSelector } from 'react-redux';



const stripePromise = loadStripe('pk_test_51NLNBrSJsKp0GNjaIuQUadRCV60mhzmtNLgxcYYxPcR7khbcpoEZnd7S7sH8AFoZqi02vbmMXt6GFu2zVamj70fd00hcUHaHm8');


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { cartData } = useSelector((state) => state.cartState)


  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;
    setIsProcessing(true);

    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin },
      redirect: "if_required",
    });

    if (error) {
      setIsProcessing(false);
      return toast.error(error.message || "something went wrong")
    }

    if (paymentIntent.status === "succeeded") {
      dispatch(setOrderData(...cartData))
      dispatch(clearCart())
      navigate('/success')
    }

    setIsProcessing(false);
  };

  return <form onSubmit={handleSubmit}>
    <PaymentElement />
    <button className='my-10 bg-black text-white w-full p-2 rounded-sm' disabled={isProcessing}>
      {isProcessing ? "Processing..." : "Payment"}
    </button>
  </form>
}

const Checkout = () => {
  const dispatch = useDispatch()
  const { cartData } = useSelector((state) => state.cartState)

  const location = useLocation();

  const clientSecret = location.state;

  if (!clientSecret) return <Navigate to={"/shipping"} />;

  const options = {
    // passing the client secret obtained from the server
    clientSecret
  };

  useEffect(() => {
    dispatch(setCalculatePrice())
  }, [cartData])

  return (
    <div className='h-[80vh] flex flex-col justify-center items-center'>
      <h1 className='my-10 font-semibold text-2xl'>Stripe</h1>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}

export default Checkout
