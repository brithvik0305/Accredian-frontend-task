import axios from 'axios';
const API_URL = 'http://localhost:5000';

export const submitReferral = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/referral`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log("Server Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Axios Error:", error);

        if (error.response) {
            console.error("Server Response:", error.response.data);
            return { error: error.response.data.message || "Something went wrong" };
        } else if (error.request) {
            console.error("No Response from Server:", error.request);
            return { error: "No response from server. Check API URL and server status." };
        } else {
            console.error("Axios Setup Error:", error.message);
            return { error: "Unexpected error occurred" };
        }
    }
};
