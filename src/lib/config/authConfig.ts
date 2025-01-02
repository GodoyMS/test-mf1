import { PublicClientApplication } from '@azure/msal-browser';
import { CLIENT_ID, OCP_APIM_SUBSCRIPTION_KEY, REDIRECT_URI, TENANT_ID } from './environments';

export const msalConfig = {
};

const _msalInstance = new PublicClientApplication(msalConfig);
_msalInstance.initialize();

export const msalInstance = async () => {
};

export const handleLogin = async () => {
};

export const logout = () => {
};

