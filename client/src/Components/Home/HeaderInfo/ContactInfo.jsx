import React from 'react';
import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { centeredFlexBox } from '../../Shared/StylePresets';

const ContactInfo = () => {
    const contactData = [
        'wjtelliott@gmail.com',
        '(608) 393-4429',
        '@william-jt-elliott',
        'william-elliott.herokuapp.com',
    ];

    const iconStyle = {
        fontSize: '2em',
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
                {index === 3 && <LaptopMacIcon style={{ ...iconStyle }} />}
                <Typography
                    variant="p"
                    sx={{ fontSize: '1.75em', mx: 1, mr: 3, my: 1 }}
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
                sx={{ fontSize: '3em', mt: 3, mb: 2 }}
            >
                CONTACT &nbsp;ME&nbsp; AT
            </Typography>
            {formattedContactData}
        </Box>
    );
};

export default ContactInfo;
