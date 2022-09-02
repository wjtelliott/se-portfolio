import React from 'react';
import { Box } from '@mui/material';
import ContactLinks from './ContactLinks';
import ContactInfo from './ContactInfo';
import SkillsInfo from './SkillsInfo';
import HeaderLinks from './HeaderLinks';
import { centeredFlexBox, headerInfo } from '../../Shared/StylePresets';

const HeaderInfo = () => {
    return (
        <Box
            sx={{
                ...centeredFlexBox,
                ...headerInfo,
                color: 'primary.contrastText',
                px: 3,
            }}
        >
            <Box alignSelf="center">
                <ContactLinks />

                <ContactInfo />

                <SkillsInfo />

                <HeaderLinks />
            </Box>
        </Box>
    );
};

export default HeaderInfo;
