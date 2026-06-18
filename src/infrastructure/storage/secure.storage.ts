import * as Keychain from 'react-native-keychain';

const TOKEN_KEY = 'auth_token';

export const secureStorage = {
    setToken: async (token: string) => {
        await Keychain.setGenericPassword(TOKEN_KEY, token);
    },

    getToken: async () => {
        const credentials = await Keychain.getGenericPassword();

        if (!credentials) return null;

        return credentials.password;
    },

    clearToken: async () => {
        await Keychain.resetGenericPassword();
    },
};