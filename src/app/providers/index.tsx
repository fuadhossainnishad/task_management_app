import React, { PropsWithChildren } from 'react';
import AppSafeAreaProvider from './AppSafeAreaProvider';
import AppErrorBoundaryProvider from './AppErrorBoundaryProvider';
import AppQueryProvider from './AppQueryProvider';
import AppThemeProvider from './AppThemeProvider';
import AppNavigationProvider from './AppNavigationProvider';

export default function Providers({ children }: PropsWithChildren) {
    return (
        <AppSafeAreaProvider>
            <AppNavigationProvider>
                <AppErrorBoundaryProvider>
                    <AppQueryProvider>
                        <AppThemeProvider>
                            {children}
                        </AppThemeProvider>
                    </AppQueryProvider>
                </AppErrorBoundaryProvider>
            </AppNavigationProvider>
        </AppSafeAreaProvider >
    );
};
