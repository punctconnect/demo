// pages/app.js

import Hotjar from "@hotjar/browser";
import { Container, Typography } from "@material-ui/core";
import Head from "next/head";
import { useRouter } from "next/router";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React, { useEffect } from "react";
import "../styles/globals.css";

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== "undefined") {
  posthog.init("phc_j9yScYcBMQB4qIgJTnWWuBnDPYfp0CcqUNK4yr2yA9g", {
    api_host: "https://eu.posthog.com",
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug();
    },
  });
}

const AppPage = ({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  const router = useRouter();

  useEffect(() => {
    // Track page views
    Hotjar.init(3793789, 6);
    const handleRouteChange = () => posthog?.capture("$pageview");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <PostHogProvider client={posthog}>
      <>
        {" "}
        {getLayout(
          <Container>
            <Head>
              <title>PunctConnect - Your Coupon and Discount Hub</title>
              <meta
                name="description"
                content="Find the best deals and discounts with PunctConnect"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <Component {...pageProps} />

            <footer>
              <Typography variant="body2" color="textSecondary" align="center">
                &copy; {new Date().getFullYear()} PunctConnect. All rights
                reserved.
              </Typography>
            </footer>
          </Container>
        )}
      </>
    </PostHogProvider>
  );
};

export default AppPage;
