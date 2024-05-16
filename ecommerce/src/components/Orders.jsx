import React from 'react'
import { useSelector } from 'react-redux'

const Orders = () => {
  const { orderData } = useSelector((state) => state.cartState);

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-10'>
        {orderData.length > 0 ? orderData?.map((cur) => {
          return <div className='flex gap-10 shadow-md w-96 p-10'>
            <p>{cur.name}</p>
            <p>Rs{cur.price}</p>
          </div>
        }):(<div>No Orders</div>)
        }
      </div>
    </>
  )
}

export default Orders
