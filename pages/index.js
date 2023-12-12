import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@material-ui/core';
import Headerless from '../layouts/headerless';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/form')
  }


  return (
    <Container>
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
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

          <br />


          {/* subscribe to newsletter */}
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Subscribe to our newsletter
              </Typography>
              <Typography color="textSecondary" paragraph>
                Stay up to date with the latest deals and coupons.
              </Typography>
              <Button variant="contained" onClick={handleClick}>Subscribe</Button>
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