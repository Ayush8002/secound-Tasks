import React from 'react'
import { productData } from '../sampleData'
import ProductItems from './products/ProductItems'


const Home = () => {
    return (
        <>
            <div className='grid sm:grid-cols-3 grid-cols-5 gap-10 px-24'>
                {productData?.map((cur) => {
                    return <div key={cur.id}>
                        <ProductItems data={cur} />
                    </div>
                })}
            </div>
        </>
    )
}

export default Home
