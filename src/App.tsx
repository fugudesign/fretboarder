import { AppContextProvider } from './contexts/appContext';
import CssBaseline from '@mui/material/CssBaseline';
import { Layout } from './components/Layout/Layout';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';

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
