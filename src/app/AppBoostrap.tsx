import AppNavigator from "../navigation/AppNavigator";
import AuthNavigator from "../navigation/AuthNavigator";
import OnboardingNavigator from "../navigation/OnboardingNavigator";
import useAppInit from "./bootstrap/useAppInit";

export default function AppBootstrap() {
    const { state } = useAppInit();

    switch (state) {
        case 'loading':
            return null;

        case 'onboarding':
            return <OnboardingNavigator />;

        case 'unauthenticated':
            return <AuthNavigator />;

        case 'authenticated':
            return <AppNavigator />;

        default:
            return null;
    }
}