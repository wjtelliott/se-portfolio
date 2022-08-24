import React from 'react';

const Projects = () => {
    return (
        <div id="projects">
            Restaurant Picker Have no idea where to eat out at tonight?
            Type/Click a category or "I'm flexible" to view local businesses in
            your current area of that category. Uses multiple APIs to get the
            user's GeoLocation, display local businesses, and an interactive
            GeoMap. Users are authorized through Auth0 and info is stored with a
            NoSQL back-end. This uses a free Heroku account, and may take a
            while to load on the first request.
            <br />
            Another Space Game A space ship game made from scratch using
            standard JS & HTML5. This utilizes class structure/inheritance and
            OOP to create game logic, sounds, and animations. This project's
            notable features are a basic raycasting lighting system as well as
            velocity, friction, and collision logic.
        </div>
    );
};

export default Projects;
