import React from 'react';
import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { centeredFlexBox } from '../../Shared/StylePresets';

const ContactInfo = () => {
    const contactData = [
        'wjtelliott@gmail.com',
        '(608) 393-4429',
        '@william-jt-elliott',
    ];

    const iconStyle = {
        fontSize: '1.75em',
        alignSelf: 'center',
    };

    const formattedContactData = contactData.map((data, index) => {
        return (
            <Box
                sx={{ ...centeredFlexBox, justifyContent: 'left' }}
                key={`contactDataIndex${index}`}
            >
                {/* Wish there was an easier way to make this DRYYYYYY */}
                {index === 0 && <EmailIcon style={{ ...iconStyle }} />}
                {index === 1 && <PhoneIcon style={{ ...iconStyle }} />}
                {index === 2 && <LinkedInIcon style={{ ...iconStyle }} />}
                <Typography
                    variant="p"
                    sx={{ fontSize: '1.75em', mx: 1, mr: 3 }}
                >
                    {data}
                </Typography>
            </Box>
        );
    });

    return (
        <Box sx={{ ...centeredFlexBox, justifyContent: 'left' }}>
            <Typography
                variant="h3"
                sx={{ fontSize: '2em', mt: 3, mb: 1 }}
            >
                CONTACT &nbsp;ME&nbsp; AT
            </Typography>
            {formattedContactData}
        </Box>
    );
};

export default ContactInfo;
