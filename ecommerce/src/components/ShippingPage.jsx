import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveShippingInfo, setCalculatePrice } from '../redux/features/cartReducer'
import { useCreatePaymentMutation } from '../redux/APIs/paymentapi'

const Shipping = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { cartData, subtotal } = useSelector((state) => state.cartState)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [createPayment] = useCreatePaymentMutation()

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(saveShippingInfo({ name, email }))

    const body = {
      amount: Number(subtotal)
    }
    const res = await createPayment({ body })
    if (res.data) {
      navigate("/checkoutPage", { state: res.data.clientSecret })
    }
  }

  useEffect(() => {
    dispatch(setCalculatePrice())
  }, [cartData])


  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
      <h3 className='m-10 text-xl font-semibold'>Shipping Info</h3>
      <form onSubmit={submitHandler}>
        <div class="flex flex-col gap-6 w-72">
          <div class="relative h-11 w-full min-w-[200px]">
            <input placeholder="Name" type='text' required name="address"
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
            <label
              class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Name
            </label>
          </div>
          <div class="relative h-11 w-full min-w-[200px]">
            <input placeholder="Email" type='email' required name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
            <label
              class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email
            </label>
          </div>
          <h3 className='mt-10 font-semibold'>Cart Items</h3>
          <div className='flex flex-col gap-4'>
            {cartData?.map((cur) => {
              return <div key={cur.id} className='flex gap-3 w-full'>
                <p>{cur.name}</p><span>Rs.{cur.price}</span>
              </div>
            })}
          </div>
          <div>
            <p className='text-2xl font-semibold'>Rs.{subtotal}</p>
          </div>
        </div>
        <button type='submit' className='bg-black text-white px-4 py-2 w-full'>go checkoutPage </button>
      </form>
    </div>
  )
}

export default Shipping
