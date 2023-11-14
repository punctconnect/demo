// pages/app.js

import React from 'react';
import Head from 'next/head';
import { Container, Typography, Button, Grid, Card, CardContent } from '@material-ui/core';

const AppPage = () => {
  return (
    <Container>
      <Head>
        <title>PunctConnect - Your Coupon and Discount Hub</title>
        <meta name="description" content="Find the best deals and discounts with PunctConnect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container spacing={3} justify="center" alignItems="center" style={{ minHeight: '80vh' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to PunctConnect
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              Your personalized coupon and discount hub. Start saving today!
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Explore Deals
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  Featured Coupons
                </Typography>
                {/* Add your featured coupons or deals here */}
                <Typography color="textSecondary" paragraph>
                  Check out these exclusive offers from our partners.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>

      <footer>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} PunctConnect. All rights reserved.
        </Typography>
      </footer>
    </Container>
  );
};

export default AppPage;
