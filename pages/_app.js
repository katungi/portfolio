import React from 'react';
import Router from 'next/router';
import nprogress from 'nprogress';
import debounce from 'lodash.debounce';
import { ThemeProvider } from 'next-themes';
import { Analytics} from '@vercel/analytics/react'
import '../styles/globals.css';

const start = debounce(nprogress.start, 500);
Router.events.on('routeChangeStart', start);
Router.events.on('routeChangeComplete', () => {
  start.cancel();
  nprogress.done();
  window.scrollTo(0, 0);
});
Router.events.on('routeChangeError', () => {
  start.cancel();
  nprogress.done();
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Analytics/>
    </ThemeProvider>
  );
}

export default MyApp;
