import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

const ShippingDetails = () => {
    const { subtotal } = useSelector((state) => state.cartState);

    return (
        <>
            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div class="mb-2 flex justify-between">
                    <p class="text-gray-700">Subtotal</p>
                    <p class="text-gray-700">${subtotal}</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-gray-700">Shipping</p>
                    <p class="text-gray-700">$4</p>
                </div>
                <hr class="my-4" />
                <div class="flex justify-between">
                    <p class="text-lg font-bold">Total</p>
                    <div class="">
                        <p class="mb-1 text-lg font-bold">${subtotal}</p>
                        <p class="text-sm text-gray-700">including VAT</p>
                    </div>
                </div>
                <NavLink to="/shipping">
                    <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                </NavLink>
            </div>
        </>
    )
}

export default ShippingDetails
