import axios from "axios";

export const userCart = async (cart, authtoken) => {
    return await axios.post(`http://localhost:8000/api/user/cart`, {cart}, {
        headers: {
            authtoken,
        }
    });
}

export const getUserCart = async (authtoken) => {
    return await axios.get(`http://localhost:8000/api/user/cart`, {
        headers: {
            authtoken,
        }
    });
}

export const emptyUserCart = async (authtoken) => {
    return await axios.put(`http://localhost:8000/api/user/cart`, {}, {
        headers: {
            authtoken,
        }
    });
}

export const saveUserAddress = async (authtoken, address) => {
    return await axios.post(`http://localhost:8000/api/user/address`, {address}, {
        headers: {
            authtoken,
        }
    });
}

export const getUserAddress = async (authtoken) => {
    return await axios.get(`http://localhost:8000/api/user/address`, {
        headers: {
            authtoken,
        }
    });
}

export const applyCoupon = async (authtoken, coupon) => {
    return await axios.post(`http://localhost:8000/api/user/cart/coupon`, {coupon}, {
        headers: {
            authtoken,
        }
    });
}

export const createOrder = async (authtoken, razorpayResponse) => {
    return await axios.post(`http://localhost:8000/api/user/order`, {razorpayResponse}, {
        headers: {
            authtoken,
        }
    });
}

export const getUserOrders = async (authtoken) => {
    return await axios.get(`http://localhost:8000/api/user/orders`, {
        headers: {
            authtoken,
        }
    });
}

export const getWishlist = async (authtoken) => {
    return await axios.get(`http://localhost:8000/api/user/wishlist`, {
        headers: {
            authtoken,
        }
    });
}

export const removeWishlist = async (authtoken, productId) => {
    return await axios.put(`http://localhost:8000/api/user/wishlist/${productId}`, {}, {
        headers: {
            authtoken,
        }
    });
}

export const addToWishlist = async (authtoken, productId) => {
    return await axios.post(`http://localhost:8000/api/user/wishlist`, {productId}, {
        headers: {
            authtoken,
        }
    });
}

export const createCashOrderForUser = async (authtoken, COD, couponTrueOrFalse) => {
    return await axios.post(`http://localhost:8000/api/user/cash-order`, {couponApplied: couponTrueOrFalse, COD}, {
        headers: {
            authtoken,
        }
    });
}

export const updateUsername = async (authtoken, name) => {
    return await axios.post(`http://localhost:8000/api/user/update-userDetails`, {name}, {
        headers: {
            authtoken,
        }
    });
}