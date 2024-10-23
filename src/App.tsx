import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useLayoutEffect } from 'react';
import { Layout } from './components/Layout/Layout';
import theme from './config/theme';
import { AppContextProvider } from './contexts/appContext';

export function App() {
  const processUpdates = () => {
    if (localStorage.getItem('app-version')) {
      // Process upgrades
      localStorage.clear();
    }
  };

  useLayoutEffect(() => {
    processUpdates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
