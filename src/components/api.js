import axios from 'axios';
const API_URL = 'https://accredian-backend-task-e4ma.onrender.com';
const client = axios.create({
    baseURL : "https://accredian-backend-task-e4ma.onrender.com/referral"
})
export const submitReferral = async (formData) => {
    try {
        console.log("Sending Data:", formData);  // Log request
        const response = await client.post("", formData);
        console.log("Server Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error Details:", error.toJSON ? error.toJSON() : error);
        return { error: "Request failed" };
    }
};

