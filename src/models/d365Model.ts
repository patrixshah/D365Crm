import { DynamicsWebApi } from 'dynamics-web-api';
import AuthService from '../services/AuthService';

const d365Url = process.env.D365_URL || ''; // e.g., https://yourorg.api.crm.dynamics.com

export const dynamicsWebApi = new DynamicsWebApi({
  serverUrl: d365Url,
  onTokenRefresh: async () => {
    const newAccessToken = await AuthService.getInstance().getAccessToken();
    return newAccessToken;
  },
});
