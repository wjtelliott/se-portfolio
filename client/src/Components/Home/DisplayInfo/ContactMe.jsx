import React from 'react';
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
                <form
                    action="/api/contact"
                    method="POST"
                    style={{ width: '100%', ...centeredFlexBox }}
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
                            name="email"
                            aria-describedby="email-helper-text"
                            type="email"
                            required
                        />
                        <FormHelperText id="email-helper-text">
                            I will never share your email with anyone
                        </FormHelperText>

                        <TextField
                            id="comments-input"
                            name="comments"
                            aria-describedby="comments-helper-text"
                            sx={{ mt: 4 }}
                            required
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
            </Box>
        </Box>
    );
};

export default ContactMe;
