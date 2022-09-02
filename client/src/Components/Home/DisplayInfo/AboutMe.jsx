import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { centeredFlexBox } from '../../Shared/StylePresets';

const AboutMe = () => {
    return (
        <Box
            alignSelf="center"
            sx={{
                ...centeredFlexBox,
                justifyContent: 'center',
                minHeight: '20vh',
                py: 4,
                width: {
                    xs: '100%',
                    md: '90%',
                },
            }}
        >
            <Card
                sx={{
                    display: {
                        xs: { ...centeredFlexBox },
                        md: 'flex',
                    },
                    borderRadius: '25px 25px 25px 25px',
                    border: 'none',
                    boxShadow: '1px 1px 40px black',
                }}
            >
                <CardMedia
                    component="img"
                    sx={{
                        width: {
                            xs: '100%',
                            md: '15vw',
                        },
                    }}
                    image="/portrait.JPG"
                    alt="Portrait of William Elliott"
                />
                <Box
                    textAlign="center"
                    alignSelf="center"
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography
                            variant="p"
                            sx={{
                                display: { xs: 'none', md: 'block' },
                                fontSize: '3em',
                                mb: 2,
                            }}
                        >
                            William Elliott
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{ fontSize: { xs: '1.5em', md: '1.75em' } }}
                        >
                            Software Developer with a background in C#, Python,
                            Java, and Javascript.
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                fontSize: { xs: '1em', md: '1.5em' },
                                display: 'block',
                                mt: 3,
                            }}
                        >
                            I enjoy coding, tabletop games, hiking, as well as
                            playing and creating video games. Throughout my
                            prior workplaces, I've stayed productive under
                            pressure to mitigate problems before they become a
                            crisis, help myself and others control emotional
                            work stress, and value transparency and
                            communication above all else.
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Box>
        //     <img
        //         src="/portrait.JPG"
        //         style={{
        //             width: 'auto',
        //             height: 'auto',
        //             maxWidth: '45%',
        //             maxHeight: '45%',
        //             borderRadius: '100%',
        //             display: 'inline',
        //             alignSelf: 'center',
        //         }}
        //     />
        //     <Box
        //         alignSelf="center"
        //         textAlign="center"
        //         sx={{ width: '45%' }}
        //     >
        //         <Typography
        //             variant="p"
        //             sx={{ display: 'block', fontSize: '2em', mb: 2 }}
        //         >
        //             William Elliott
        //         </Typography>
        //         <Typography variant="p">
        //             Software Developer with a background in C#, Python, Java,
        //             and Javascript.
        //         </Typography>
        //     </Box>
        //     <Box alignSelf="center">
        //         <Typography variant="p">
        //             I enjoy coding, tabletop games, hiking, as well as playing
        //             and creating video games. Throughout my prior workplaces,
        //             I've stayed productive under pressure to mitigate problems
        //             before they become a crisis, help myself and others control
        //             emotional work stress, and value transparency and
        //             communication above all else.
        //         </Typography>
        //     </Box>
    );
};

export default AboutMe;
