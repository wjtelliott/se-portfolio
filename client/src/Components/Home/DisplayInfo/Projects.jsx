import { Typography } from '@mui/material';
import React from 'react';
import { fadeInDelay } from '../../Shared/SharedConsts';
import { centeredFlexBox } from '../../Shared/StylePresets';
import { Box, Divider } from '@mui/material';

const Projects = () => {
    const projects = [
        {
            title: 'Restaurant Picker',
            image: '/rest-picker.jpg',
            imageAlt: 'Home page of Rest-Picker/iDontCare website',
            desc: `Have no idea where to eat out at tonight?
                Type/Click a category or "I'm flexible" to view local businesses
                in your current area of that category. Uses multiple APIs to get
                the user's GeoLocation, display local businesses, and an
                interactive GeoMap. Users are authorized through Auth0 and info
                is stored with a NoSQL back-end. This uses a free Heroku
                account, and may take a while to load on the first request. This is
                a solo-orientated project that I've been working on.`,
        },
        {
            title: 'You-Betcha',
            image: '/you-betcha.jpg',
            imageAlt: 'Home page of You-Betcha website',
            desc: `An MLB game-betting website, using fake currency. Sign in/up, make
            money-line bets on real upcoming MLB games. Everyday at midnight, bets will
            be resolved, 'payments' will be made to user accounts, and the next set of games will
            be fetched and stored. This website features
            user authentication, an API through our backend server to fetch upcoming game data,
            and a PostgresSQL database to store user data, user betting history, and games to bet
            on. This was a group-orientated milestone project for UW-Madison.`,
        },
        {
            title: 'Another Space Game',
            image: '/space-game-splash.jpg',
            imageAlt: 'Splash screen for Another Space Game',
            desc: `A space ship game made from scratch using
                standard JS & HTML5. This utilizes class structure/inheritance
                and OOP to create game logic, sounds, and animations. This
                project's notable features are a basic raycasting lighting
                system as well as velocity, friction, and collision logic. This was
                my first milestone project at UW-Madison.`,
        },
    ];

    const projDivider = (
        <Box sx={{ ...centeredFlexBox, my: 5 }}>
            <Divider
                orientation="horizontal"
                sx={{ width: '40%' }}
            />
        </Box>
    );

    const formattedProjects = projects.map((project, index) => {
        return (
            // Need to use a div here for the fade effect
            <div
                data-aos="fade-up"
                data-aos-delay={fadeInDelay}
                key={`projectsIndex${index}`}
            >
                {projDivider}
                <Box sx={{ ...centeredFlexBox }}>
                    <img
                        src={project.image}
                        alt={project.imageAlt}
                        style={{ width: '90%' }}
                    />
                    <Box sx={{ px: '5%', mt: 1 }}>
                        <Typography
                            sx={{ fontSize: { xs: '1.75em', md: '2em' } }}
                        >
                            {project.title}
                        </Typography>
                        <Typography sx={{ fontSize: '1em' }}>
                            {project.desc}
                        </Typography>
                    </Box>
                </Box>
            </div>
        );
    });

    return (
        <div id="projects">
            <Typography
                textAlign="center"
                sx={{ fontSize: { xs: '2em', md: '3em' } }}
            >
                Recent Projects
            </Typography>
            {formattedProjects}
        </div>
    );
};

export default Projects;
