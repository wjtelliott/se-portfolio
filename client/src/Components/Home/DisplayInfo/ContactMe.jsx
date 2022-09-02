import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    TextField,
    Typography,
} from '@mui/material';
import { centeredFlexBox } from '../../Shared/StylePresets';

const ContactMe = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userComment, setUserComment] = useState('');
    const [displayForm, setDisplayForm] = useState(true);

    const [sendingStatus, setSendingStatus] = useState('Sending...');

    const handleSubmit = e => {
        e.preventDefault();
        // Hide form
        setDisplayForm(false);

        // Send fetch request
        const sendData = async () => {
            const url = '/api/contact';
            const payload = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: userEmail,
                    comment: userComment,
                }),
            };
            const response = await fetch(url, payload);
            try {
                const responseData = await response.json();

                setSendingStatus(
                    responseData.message ??
                        'There was an issue sending your contact info. Please try again later.'
                );
            } catch (_) {
                setSendingStatus(
                    'There was an issue sending your contact info. Please try again later.'
                );
            }
        };
        sendData();
    };

    return (
        <Box id="contact">
            <Typography sx={{ fontSize: { xs: '2em', md: '3em' } }}>
                Interested?
            </Typography>
            <Typography
                sx={{ fontSize: '1.75em', display: { xs: 'none', md: 'flex' } }}
            >
                Check out my links on the left, or use this easy form to contact
                me!
            </Typography>
            <Box
                sx={{
                    mt: 3,
                }}
            >
                {displayForm ? (
                    <form
                        style={{ width: '100%', ...centeredFlexBox }}
                        onSubmit={handleSubmit}
                    >
                        <FormControl
                            sx={{
                                // border: '1px solid black',
                                // borderRadius: '30px',
                                width: { xs: '90%', md: '75%' },
                                p: 1,
                            }}
                        >
                            <InputLabel htmlFor="email-input">
                                Email Address
                            </InputLabel>
                            <Input
                                id="email-input"
                                aria-describedby="email-helper-text"
                                type="email"
                                name="email"
                                required
                                onChange={e => setUserEmail(e.target.value)}
                            />
                            <FormHelperText id="email-helper-text">
                                I will never share your email with anyone
                            </FormHelperText>

                            <TextField
                                id="comments-input"
                                name="comment"
                                aria-describedby="comments-helper-text"
                                sx={{ mt: 4 }}
                                required
                                onChange={e => setUserComment(e.target.value)}
                            ></TextField>
                            <FormHelperText id="comments-helper-text">
                                Please leave a message for me
                            </FormHelperText>

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 4 }}
                            >
                                Submit
                            </Button>
                        </FormControl>
                    </form>
                ) : (
                    <Box sx={{ ...centeredFlexBox }}>
                        <Typography sx={{ fontSize: '1.5em' }}>
                            {sendingStatus}
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ContactMe;
