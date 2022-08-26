import axios from 'axios';
import { API_PATHS } from '@/constants/api-paths';
import { Auth } from '@/constants/auth';
export const token = (code: string) => {
	const authKey = btoa(`${Auth.clientId}:${Auth.clientSecret}`);
	const formData = new URLSearchParams();
	formData.append('grant_type', 'authorization_code');
	formData.append('client_id', Auth.clientId);
	formData.append('code', code);
	formData.append('redirect_uri', window.location.origin);
	return axios.post(`${API_PATHS.auth}oauth2/token`, formData, {
		headers: {
			Authorization: `Basic ${authKey}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});
};
