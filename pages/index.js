import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { usePostHog } from "posthog-js/react";
import Link from "next/link";
import React from "react";
import Headerless from "../layouts/headerless";

export default function HomePage() {
  const router = useRouter();
  const posthog = usePostHog();
  const handleClick = () => {
    posthog.capture("click-newsletter-subscribe-btn");
    router.push("/form");
  };

  const handleExploreDealsClick = () => {
    posthog.capture("click-explore-deals-btn");
  };

  return (
    <Container>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "80vh" }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to PunctConnect
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Your personalized coupon and discount hub. Start saving today!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleExploreDealsClick}
          >
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
              
              <Typography color="textSecondary" style={{ marginTop: "20px",  marginBottom: "20px", fontStyle: "italic" }}>
                By subscribing and using our product, you agree to our{" "}
                <Link href="/privacy">Privacy Policy </Link> and{" "}
              </Typography>

              <Button variant="contained" onClick={handleClick}>
                Subscribe
              </Button>

            </CardContent>
          </Card>

          <br />


        </Grid>
      </Grid>
    </Container>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <Headerless>{page}</Headerless>;
};
