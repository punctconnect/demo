import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { TextField, Button, Box, Typography, Container } from '@material-ui/core';
import { useRouter } from 'next/router';
import Layout from '../../layouts/layout';
import { usePostHog } from 'posthog-js/react';

export default function Form() {
    const router = useRouter();
    const [state, handleSubmit] = useForm("mvojengb");
    const posthog = usePostHog();
    const handleFormSubmit = (event) => {
        posthog.capture('newsletter-subscribe-attempt');
        event.preventDefault();
        handleSubmit(event);
    };

    useEffect(() => {
        if (state.succeeded) {
            posthog.capture('newsletter-subscribe-success');
            alert("Thanks for subscribing!");
            router.push('/');
        }
    }, [router, state.succeeded]);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={{
                width: '100%',
                margin: 'auto',
                maxWidth: '600px',
                padding: '1rem',
                marginTop: '2rem',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Typography variant="h3" component="h1" gutterBottom>
                Subscribe to our newsletter
            </Typography>

            <form onSubmit={handleFormSubmit}>
                <TextField
                    id="email"
                    type="email"
                    name="email"
                    label="Email Address"
                    fullWidth
                    inputProps={{ inputMode: 'email' }}
                    margin="normal"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />

                <TextField
                    id="phone"
                    type="phone"
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    margin="normal"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    required
                />
                <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                />

                <TextField
                    id="message"
                    type="message"
                    name="message"
                    label="Anything else we should know?"
                    fullWidth
                    margin="normal"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={state.submitting}
                    fullWidth
                >
                    Submit
                </Button>
            </form>
        </Box>
    );
}

Form.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
