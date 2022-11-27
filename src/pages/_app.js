import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { theme } from '../theme';
import { DialogProvider } from 'src/components/dialogs/context';
import DialogController from 'src/components/dialogs/controller';
import { QueryClient, QueryClientProvider } from 'react-query';

const clientSideEmotionCache = createEmotionCache();

const queryClient = new QueryClient();

const AppWrapper = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <DialogProvider>
            {children}
          </DialogProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          MOCEAN
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <AppWrapper>
        {getLayout(<Component {...pageProps} />)}
        <DialogController />
      </AppWrapper>
    </CacheProvider>
  );
};

export default App;
