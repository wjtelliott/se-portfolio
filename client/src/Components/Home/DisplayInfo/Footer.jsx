import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { removeLinkDecor } from '../../Shared/StylePresets';

const Footer = () => {
    return (
        <Box textAlign="center">
            <Button
                href="/William_Elliott.pdf"
                download="WJTE_RESUME"
                variant="outlined"
                sx={{ my: 2, fontSize: '.75em' }}
            >
                Download PDF
            </Button>

            <Typography
                sx={{
                    fontSize: '.75em',
                }}
            >
                Thanks for checking out my portfolio page! This was made with
                React.js, MUI, and served with Express.
            </Typography>
            <Typography
                sx={{
                    fontSize: '.75em',
                }}
            >
                Click{' '}
                <a
                    href="http://github.com/wjtelliott/se-portfolio/"
                    style={{ ...removeLinkDecor, color: 'blue' }}
                >
                    Here
                </a>{' '}
                to see the repo for this page!
            </Typography>
        </Box>
    );
};

export default Footer;
