import React from 'react';
import { Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { centeredFlexBox } from '../../Shared/StylePresets';

const SkillsInfo = () => {
    const skillsData = [
        ['JavaScript', 5],
        ['React', 5],
        ['HTML/CSS', 5],
        ['MongoDB', 4],
        ['Python', 3],
        ['SQL', 3],
    ];

    const iconStyle = {
        fontSize: '2em',
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
                    my: 1,
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
                sx={{ fontSize: '3em', mt: 3, mb: 2 }}
            >
                SKILL&nbsp; SUMMARY
            </Typography>
            {formattedSkillsData}
        </Box>
    );
};

export default SkillsInfo;
