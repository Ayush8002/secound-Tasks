import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { NavLink } from 'react-router-dom'
import { setCalculatePrice } from '../../redux/features/cartReducer'
import Shipping from './ShippingDetails'

const Cart = () => {
    const dispatch = useDispatch();
    const { cartData } = useSelector((state) => state.cartState)

    useEffect(() => {
        dispatch(setCalculatePrice())
    }, [cartData])

    return (
        <div>
            {
                cartData?.length > 0 ? (
                    <div class="h-screen bg-gray-100 pt-20">
                        <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                            {/* cart items list  */}
                            {/* ============================================= */}
                            <div className='flex flex-col'>
                                {cartData?.map((cur, index) => {
                                    return <CartItem data={cur} index={index} />
                                })}
                            </div>
                            <Shipping />
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col gap-2 w-screen h-[80vh] justify-center items-center'>
                        <p className='text-2xl'>
                            No CartData</p>
                        <NavLink to="/">
                            <button className='px-4 py-2 bg-black text-white'>Go Home</button>
                        </NavLink>
                    </div>
                )
            }

        </div>
    )
}

export default Cart
