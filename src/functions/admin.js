import axios from "axios";

export const getOrders = async (authtoken) => {
    return await axios.get(`http://localhost:8000/api/admin/orders`, {
        headers: {
            authtoken,
        }
    });
}

export const changeStatus = async (authtoken, orderId, orderStatus) => {
    return await axios.put(`http://localhost:8000/api/admin/order-status`, {orderId, orderStatus}, {
        headers: {
            authtoken,
        }
    });
}