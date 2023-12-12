import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@material-ui/core';
import Headerless from '../layouts/headerless';

export default function HomePage() {
  return (
    <Container>
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
    </Container>
  );
}

HomePage.getLayout = function getLayout(page) {
  return (
    <Headerless>
      {page}
    </Headerless>
  )
}