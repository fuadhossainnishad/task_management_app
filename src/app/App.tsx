import React from 'react';
// import OnboardingScreen from './screens/onboarding.screen';
import Providers from './providers';
import AppBootstrap from './AppBoostrap';

export default function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    // <SafeAreaProvider className="">
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <SafeAreaView className="bg-white flex-1">
    //     <AppNavigator />
    //     <Toast />
    //   </SafeAreaView>
    // </SafeAreaProvider>
    <Providers>
      <AppBootstrap />
    </Providers>
  );
}

// function AppContent() {
//   return (
//     <View className="">
//       <OnboardingScreen />
//     </View>
//   );
// }
