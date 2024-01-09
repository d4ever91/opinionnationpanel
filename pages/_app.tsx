import React from 'react';
import type { AppProps } from 'next/app';
import { Session } from "next-auth";
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux';
import store from '@/lib/store';
import { customTheme } from '@/lib/theme'
import {  createStandaloneToast } from '@chakra-ui/react'
import { AxiosInterceptor } from '@/lib/services/nodepress';
import { Toaster } from 'react-hot-toast';
import { appWithTranslation } from "next-i18next";

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) => {

  const { ToastContainer } = createStandaloneToast(customTheme);
  
  return (
    <AxiosInterceptor>
      <ToastContainer />
      <Toaster  position="top-right" />
        <SessionProvider session={session}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </SessionProvider>
    </AxiosInterceptor>
  );
}

export default appWithTranslation(App);
