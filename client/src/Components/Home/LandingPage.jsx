/** @format */

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
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

const LandingPage = function () {
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
        <Box sx={{ ...centeredFlexBox, p: 3, my: 3 }}>
            <Box
                sx={{
                    ...centeredFlexBox,
                    ...headerInfo,
                    p: 3,
                }}
            >
                <Box>
                    <img
                        src="/portrait.JPG"
                        alt="Portrait of William Elliott"
                        style={{
                            width: '100%',
                            borderRadius: '100%',
                        }}
                    />

                    <ContactInfo />

                    <SkillsInfo />

                    <HeaderLinks />
                </Box>
            </Box>
            <Box sx={{ ...centeredFlexBox, ...displayInfo, fontSize: '4em' }}>
                <AboutMe />

                <Projects />

                <PriorExperience />

                <ContactMe />
            </Box>
        </Box>
    );
};

export default LandingPage;
