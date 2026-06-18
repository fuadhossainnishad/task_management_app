import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type BootState =
    | 'loading'
    | 'onboarding'
    | 'unauthenticated'
    | 'authenticated';

export default function useAppInit() {
    const [state, setState] = useState<BootState>('loading');

    useEffect(() => {
        const init = async () => {
            try {
                const onboardingComplete = await AsyncStorage.getItem(
                    'onboarding_complete'
                );

                const token = await AsyncStorage.getItem('token');

                if (!onboardingComplete) {
                    setState('onboarding');
                    return;
                }

                if (!token) {
                    setState('unauthenticated');
                    return;
                }

                setState('authenticated');
            } catch (e) {
                console.log('App init error:', e);

                setState('unauthenticated');
            }
        };

        init();
    }, []);

    return { state };
}