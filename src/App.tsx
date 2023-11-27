import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Layout } from './components/Layout/Layout';
import theme from './config/theme';
import { AppContextProvider } from './contexts/appContext';

export function App() {
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
