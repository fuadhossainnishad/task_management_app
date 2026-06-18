import { PropsWithChildren } from "react";
import { NavigationContainer } from "@react-navigation/native";
export default function AppNavigationProvider({ children }: PropsWithChildren) {
    return (
        <NavigationContainer>
            {children}
        </NavigationContainer>
    );
};
