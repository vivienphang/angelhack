import axios from "axios";

export const getProfile = async (userId = 'BUyKmxWLAGK4lY3dNHw0') => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/getProfile/${userId}`);
    return res.data.data;
}

export const getOrganizationProfile = async (organizationId) => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/getOrganizationProfile/${organizationId}`);
    return res.data.data;
}

export const getAllOrganizationProfile = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/getAllOrganizationProfile`);
    return res.data.data;
}

export const updateProfile = async (userId = 'BUyKmxWLAGK4lY3dNHw0', newData) => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/updateProfile/${userId}`, newData);
    return res.data.data;
}

export const updateOrganizationProfile = async (organizationId, newData) => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/updateOrganizationProfile/${organizationId}`, newData);
    return res.data.data;
}

export const getLeaderboard = async (userId = 'BUyKmxWLAGK4lY3dNHw0') => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/getLeaderboard/${userId}`);
    return res.data.data;
}

export const getGlobalLeaderboard = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/getGlobalLeaderboard`);
    return res.data.data;
}