import axios from "axios";

export const getEvents = async (name, date, duration, tokensOffered, maxPeople, categories) => {
    const params = new URLSearchParams();
    if (name) params.set('name', name);
    if (date) params.set('date', date);
    if (duration) params.set('duration', duration);
    if (tokensOffered) params.set('tokensOffered', tokensOffered);
    if (maxPeople) params.set('maxPeople', maxPeople);
    if (categories) params.set('categories', categories);

    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/events/getEvents?${params.toString()}`);
    return res.data.data;
}

export const updateEvent = async (eventId, newData) => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/events/updateEvent/${eventId}`, newData);
    return res.data.data;
}