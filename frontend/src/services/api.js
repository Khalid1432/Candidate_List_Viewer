import axios from 'axios';

const API_BASE_URL = 'https://candidate-list-viewer-dusky.vercel.app/api';

export const fetchCandidates = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/candidates`);
        return response.data;
    } catch (error) {
        console.error('Error fetching candidates:', error);
        return [];
    }
};
