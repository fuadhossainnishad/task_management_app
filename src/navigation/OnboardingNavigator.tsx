import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../features/onboarding//screens/onboarding.screen";
import { TOnboardingStackParamlist } from "./types";
import OnboardingScreen2 from "../features/onboarding//screens/onboarding2.screen";
import OnboardingScreen3 from "../features/onboarding/screens/onboarding3.screen";

export default function OnboardingNavigator() {
    const Stack = createNativeStackNavigator<TOnboardingStackParamlist>()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Onboarding2"
                component={OnboardingScreen2}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Onboarding3"
                component={OnboardingScreen3}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}