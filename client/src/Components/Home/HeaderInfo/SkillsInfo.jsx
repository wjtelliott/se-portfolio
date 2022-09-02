import React from 'react';
import { Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { centeredFlexBox } from '../../Shared/StylePresets';

const SkillsInfo = () => {
    /**
     * Each skill here will be listed with the amount of circles
     * next to it eq to the
     */
    const skillsData = [
        ['JavaScript', 5],
        ['React', 5],
        ['HTML/CSS', 5],
        ['MongoDB', 4],
        ['Python', 3],
        ['SQL', 3],
    ];

    const iconStyle = {
        fontSize: '1.5em',
        alignSelf: 'center',
    };

    const getSkillsIcons = amt =>
        [...Array(amt)].map((_, index) => (
            <CircleIcon
                key={`circleIcon${index}`}
                style={iconStyle}
            />
        ));

    const formattedSkillsData = skillsData.map((data, index) => {
        return (
            <Box
                sx={{
                    ...centeredFlexBox,
                    justifyContent: 'left',
                    width: 1,
                }}
                key={`skillsDataIndex${index}`}
            >
                <Box
                    sx={{
                        ...centeredFlexBox,
                        justifyContent: 'left',
                        width: 1 / 2,
                    }}
                >
                    <Typography
                        variant="p"
                        sx={{ fontSize: '1.75em' }}
                    >
                        {data[0]}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        ...centeredFlexBox,
                        justifyContent: 'left',
                        width: 1 / 2,
                    }}
                >
                    {getSkillsIcons(data[1])}
                </Box>
            </Box>
        );
    });

    return (
        <Box sx={{ ...centeredFlexBox, justifyContent: 'left' }}>
            <Typography
                variant="h3"
                sx={{ fontSize: '2em', mt: 6, mb: 1 }}
            >
                SKILL&nbsp; SUMMARY
            </Typography>
            {formattedSkillsData}
        </Box>
    );
};

export default SkillsInfo;
