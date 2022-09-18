import React from 'react';
import { Box, Stack, Divider } from '@mui/material';
import AboutMe from './AboutMe';
import Projects from './Projects';
import PriorExperience from './PriorExp';
import ContactMe from './ContactMe';
import Footer from './Footer';
import { displayInfo, centeredFlexBox } from '../../Shared/StylePresets';
import { fadeInDelay } from '../../Shared/SharedConsts';

const DisplayInfo = () => {
    return (
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
                        xs: 2,
                        md: 6,
                    },
                }}
            >
                <Box
                    sx={{
                        ...centeredFlexBox,
                        my: {
                            xs: 0,
                            md: 5,
                        },
                    }}
                >
                    <AboutMe />
                </Box>

                {/* 
                        We shouldn't use it here. Let the projects component
                        assign the data-aos
                    */}
                <Projects />

                {/* We have to use DIVs here for the data-aos classes */}
                <div
                    id="experience"
                    data-aos="fade-up"
                    data-aos-delay={fadeInDelay}
                >
                    <PriorExperience />
                </div>

                {/* <div
                    data-aos="fade-up"
                    data-aos-delay={fadeInDelay}
                >
                    <ContactMe />
                </div> */}

                <Footer />
            </Stack>
        </Box>
    );
};

export default DisplayInfo;
