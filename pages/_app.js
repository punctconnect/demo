// pages/app.js

import React from 'react';
import Head from 'next/head';
import { Container, Typography, Button, Grid, Card, CardContent } from '@material-ui/core';
import Layout from '../layouts/layout';
import '../styles/globals.css';

const AppPage = ({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <Container>
      <Head>
        <title>PunctConnect - Your Coupon and Discount Hub</title>
        <meta name="description" content="Find the best deals and discounts with PunctConnect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />

      <footer>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} PunctConnect. All rights reserved.
        </Typography>
      </footer>
    </Container>
  );
};

export default AppPage;
