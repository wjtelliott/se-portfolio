import React from 'react';
import { Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { centeredFlexBox, removeLinkDecor } from '../../Shared/StylePresets';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactLinks = () => {
    const iconStyle = {
        fontSize: '5em',
        color: '#E6C89C',
    };

    return (
        <Box sx={{ ...centeredFlexBox }}>
            {/* LinkedIn */}
            <a
                href="http://linkedin.com/in/william-jt-elliott/"
                style={{ ...removeLinkDecor, marginLeft: 3, marginRight: 3 }}
            >
                <LinkedInIcon style={{ ...iconStyle }} />
            </a>

            {/* GitHub */}
            <a
                href="http://github.com/wjtelliott"
                style={{ ...removeLinkDecor, marginLeft: 3, marginRight: 3 }}
            >
                <GitHubIcon style={{ ...iconStyle }} />
            </a>
        </Box>
    );
};

export default ContactLinks;
