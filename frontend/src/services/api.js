import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchCandidates = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/candidates`);
        return response.data;
    } catch (error) {
        console.error('Error fetching candidates:', error);
        return [];
    }
};
