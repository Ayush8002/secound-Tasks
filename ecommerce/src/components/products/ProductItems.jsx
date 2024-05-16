import React from 'react'
import { BsCurrencyDollar  } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { setCartData } from '../../redux/features/cartReducer';

const ProductItems = ({ data }) => {
    const dispatch = useDispatch()

    const addProduct = () => {
        dispatch(setCartData({ id: `${data?.id}`, name: `${data?.name}`, price: data?.price }))
    }

    return (
        <>
            <div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
                <a class="relative flex h-60 overflow-hidden">
                    <img class="absolute top-0 right-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80" alt="product image" />
                    <div class="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
                        <div class="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
                        <div class="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                        <div class="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                    </div>
                    <div class="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                        <button class="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </a>
                <div class="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 class="text-sm tracking-tight text-slate-900">{data.name.slice(0, 20)}</h5>
                    </a>
                    <div class="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span class="text-3xl font-bold text-slate-900 flex justify-center items-center"><BsCurrencyDollar  className='text-xl' />{data.price}</span>
                        </p>
                    </div>
                    <button class="flex items-center justify-center bg-gray-900 p-4 text-sm text-white transition hover:bg-gray-700" onClick={() => addProduct()}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>

        </>

    )
}

export default ProductItems

