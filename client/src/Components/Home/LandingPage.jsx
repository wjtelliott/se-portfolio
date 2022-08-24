/** @format */

import React, { useEffect, useState } from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import {
    centeredFlexBox,
    displayInfo,
    headerInfo,
} from '../Shared/StylePresets';
import ContactInfo from './HeaderInfo/ContactInfo';
import SkillsInfo from './HeaderInfo/SkillsInfo';
import HeaderLinks from './HeaderInfo/HeaderLinks';
import AboutMe from './AboutMe';
import Projects from './Projects/Projects';
import PriorExperience from './PriorExp';
import ContactMe from './ContactMe';
import ContactLinks from './HeaderInfo/ContactLinks';

const LandingPage = function () {
    //eslint-disable-next-line
    const [responseData, setResponseData] = useState({ status: 'Loading' });

    useEffect(() => {
        const abortContoller = new AbortController();

        // This eval is required on all pages that want to use AOS
        /* eslint-disable-next-line */
        eval('AOS.init()');

        const fetchData = async () => {
            // If we are running on localhost, we have to specify port in env
            const url = `${process.env.REACT_APP_APIURL}/sanity`;
            const response = await fetch(url);
            response
                .json()
                .then(data => setResponseData(data))
                .catch(_ =>
                    setResponseData({ error: 'Response was not JSON' })
                );
        };
        fetchData();

        return () => {
            abortContoller.abort();
        };
    }, []);

    return (
        <Box sx={{ ...centeredFlexBox }}>
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
            <Box
                sx={{
                    ...displayInfo,

                    background:
                        'linear-gradient(45deg, rgba(255,255,255,1) 80%, rgba(180,180,180,1) 90%, rgba(33,55,87,1) 100%)',
                }}
            >
                <Stack
                    direction="column"
                    spacing={4}
                    divider={
                        <Divider
                            orientation="horizontal"
                            flexItem
                        />
                    }
                    sx={{
                        ...centeredFlexBox,
                        px: {
                            xs: 3,
                            md: 6,
                        },
                    }}
                >
                    <AboutMe />

                    <Projects />

                    <PriorExperience />

                    <ContactMe />
                </Stack>
            </Box>
        </Box>
    );
};

export default LandingPage;
