import React, { PropsWithChildren } from 'react';
import { View, Text } from 'react-native';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback() {
    return (
        <View className='flex-1 justify-center items-center'
        >
            <Text>Something went wrong.</Text>
        </View>
    );
}

export default function AppErrorBoundaryProvider({
    children,
}: PropsWithChildren) {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
        >
            {children}
        </ErrorBoundary>
    );
}