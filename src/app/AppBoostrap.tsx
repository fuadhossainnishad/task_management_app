import AppNavigator from "../navigation/AppNavigator";
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
            return <OnboardingNavigator />;

        case 'authenticated':
            return <AppNavigator />;

        default:
            return null;
    }
}