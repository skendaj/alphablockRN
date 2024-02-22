// import '../../tamagui.web.css';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';

import { Stack } from 'expo-router';

import { useColorScheme } from 'react-native';

import { TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RootNavigator = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        contentStyle: {
          backgroundColor: '#222531',
        },
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config} defaultTheme={colorScheme}>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <RootNavigator />
        </ThemeProvider>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}
