import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TAuthStackParamlist } from "./types";
import LoginScreen from '../features/auth/screens/login.screen';
import VerifyEmailScreen from '../features/auth/screens/verifyEmail.screen';
import VerifyOtpScreen from '../features/auth/screens/verifyOtp.screen';
import SignupScreen from '../features/auth/screens/signup.screen';
import ColorPickerScreen from '../features/onboarding//screens/colorPicker.screen';
import ForgotPasswordScreen from '../features/auth/screens/forgotPassword.screen';
import ResetPasswordScreen from '../features/auth/screens/resetPassword.screen';
import VerifyOtpScreen2 from '../features/auth/screens/verifyOtp2.screen';

export default function AuthNavigator() {
    const Stack = createNativeStackNavigator<TAuthStackParamlist>()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VerifyEmail"
                component={VerifyEmailScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VerifyOtp"
                component={VerifyOtpScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VerifyOtp2"
                component={VerifyOtpScreen2}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ColorPicker"
                component={ColorPickerScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ResetPassword"
                component={ResetPasswordScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}