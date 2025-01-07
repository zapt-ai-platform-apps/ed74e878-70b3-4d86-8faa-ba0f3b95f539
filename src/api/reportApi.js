import axios from 'axios';

export const generateReport = async (data) => {
    return await axios.post('/api/generateReport', data);
}