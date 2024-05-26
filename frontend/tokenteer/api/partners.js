import axios from "axios";

export const getPartners = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/partners/getPartners`);
    return res.data.data;
}

export const updatePartner = async (partnerId, newData) => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/partners/updatePartner/${partnerId}`, newData);
    return res.data.data;
}