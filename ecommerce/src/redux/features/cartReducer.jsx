import { createSlice } from "@reduxjs/toolkit"

const getLocalCartData = () => {
    let localCart = localStorage.getItem("productCart");
    if (localCart == " " || localCart == null) {
        return [];
    } else {
        return JSON.parse(localCart);
    }
};

const getShippingInfo = () => {
    let localCart = localStorage.getItem("shippingInfo");
    if (localCart == " " || localCart == null) {
        return {};
    } else {
        return JSON.parse(localCart);
    }
};

const getOrderData = () => {
    let localCart = localStorage.getItem("orderData");
    if (localCart == " " || localCart == null) {
        return [];
    } else {
        return JSON.parse(localCart);
    }
};

const initialState = {
    subtotal: 0,
    orderData: getOrderData(),
    cartData: getLocalCartData(),
    shippingInfo: getShippingInfo(),
}

export const cartSlice = createSlice({
    name: "cartState",
    initialState,
    reducers: {
        setCartData: (state, action) => {
            state.cartData.push(action.payload)
            localStorage.setItem("productCart", JSON.stringify(state.cartData));
        },
        setCalculatePrice: (state, action) => {
            const subtotal = state.cartData?.reduce((total, item) => {
                return total + item.price
            }, 0);
            state.subtotal = subtotal;
        },
        removeCart: (state, action) => {
            state.cartData.splice(action.payload, 1);
            localStorage.setItem("productCart", JSON.stringify(state.cartData));
            // 2nd way to remove cart item
            // ==============================
            // let userIndexNum = state.indexOf(removeId)
            // state.splice(userIndexNum, 1)
        },
        saveShippingInfo: (state, action) => {
            const data = action.payload;
            localStorage.setItem("shippingInfo", JSON.stringify(data));
            state.shippingInfo = action.payload;
        },
        clearCart: (state) => {
            localStorage.setItem("productCart", JSON.stringify([]));
            while (state.cartData.length > 0) {
                state.cartData.pop();
            } // Fastest
        },
        setOrderData: (state, action) => {
            state.orderData.push(action.payload)
            localStorage.setItem("orderData", JSON.stringify(state.orderData));
        }
    }
})

export const { setCartData, setCalculatePrice, removeCart, saveShippingInfo, clearCart, setOrderData } = cartSlice.actions