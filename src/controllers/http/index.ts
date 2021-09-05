import axios from 'axios';

export const http = axios.create({
	baseURL: process.env.API_SAMBATECH_HOST,
});
