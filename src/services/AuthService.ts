import { ConfidentialClientApplication } from '@azure/msal-node';
import dotenv from 'dotenv';

dotenv.config();
const clientId = process.env.CLIENT_ID || '';
const clientSecret = process.env.CLIENT_SECRET || '';
const tenantId = process.env.TENANT_ID || '';

const msalConfig = {
  auth: {
    clientId: clientId,
    authority: `https://login.microsoftonline.com/${tenantId}`,
    clientSecret: clientSecret,
  },
};

class AuthService {
  private static instance: AuthService;

  private cca: ConfidentialClientApplication;

  private accessToken: string | null = null;

  private constructor() {
    this.cca = new ConfidentialClientApplication(msalConfig);
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async getAccessToken(): Promise<string> {
    if (this.accessToken) {
      return this.accessToken;
    }

    try {
      const authResult = await this.cca.acquireTokenByClientCredential({
        scopes: ['https://org59563df7.crm8.dynamics.com/.default'],
      });
      this.accessToken = authResult ? authResult.accessToken : '';
      return this.accessToken;
    } catch (error) {
      console.error(`Error acquiring access token: ${error}`);
      throw error;
    }
  }
}

export default AuthService;
