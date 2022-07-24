import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { useFonts } from 'expo-font';

import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  const [loaded] = useFonts({
    'Poppins_Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins_Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins_Regular': require('./assets/fonts/Poppins-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}



