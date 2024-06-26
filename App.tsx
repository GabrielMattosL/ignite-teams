import { ThemeProvider } from 'styled-components/native';
import {useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading'
import theme from './src/theme';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';

export default function App() {

  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontLoaded ? <Routes /> : <Loading/>}
    </ThemeProvider>
  );
}
