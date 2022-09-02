import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { centeredFlexBox } from '../../Shared/StylePresets';

const PriorExperience = () => {
    const priors = [
        {
            title: ['Store Associate', 'Part-time'],
            dates: ["Jun '22", 'Present', null],
            desc: [
                'Maintain inventory accuracy to ensure minimal expenditure waste amongst delivery teams',
                'Promptly deliver to customer homes on scheduled time and customer satisfaction of product',
                'Repair and replace damaged or unsatisfactory product with customer requests',
            ],
        },
        {
            title: ['Warehouse Supervisor', 'Full-time'],
            dates: ["Mar '21", "Jun '22", '1yr 4mos'],
            desc: [
                'Communicate between buyers, retail managers, and vendors to facilitate effective inventory reports for accounts payable',
                'Maintain and verify BOLs with the physical inbound product to foster accurate inventory control',
                'Participate in and sustain 5S standards to create a safe, productive work environment for all coworkers',
                'Provide direct reports and other lead staff with tasks and their appropraite daily deadlines to implement a consistent workflow',
            ],
        },
        {
            title: ['Warehouse Lead', 'Full-time'],
            dates: ["Apr '18", "Mar '21", '3yrs'],
            desc: [
                'Ongoing coaching and training for employees on operational processes, expectations, safetly guidlines, teambuilding, and interpersonal skills to help facilitate an effective, complete, and productive work environment',
                'Participate in and coach employees on product quality assurance to maintain proper expected product quality from all vendors and to all delivered customers',
                'Oversee all equiptment safety tests to equip all coworkers with proper, safe, gear and machines.',
                'Use Lock Out-Tag Out procedures with all machines that require service to prevent accidental injury or damage',
            ],
        },
    ];

    const priorDivider = (
        <Box sx={{ ...centeredFlexBox, mt: 2 }}>
            <Divider
                orientation="horizontal"
                sx={{ width: '40%' }}
            />
        </Box>
    );

    const formattedPriors = priors.map((prevJob, index) => {
        return (
            <Box key={`priorIndex${index}`}>
                {priorDivider}
                <Typography sx={{ fontSize: '1.5em' }}>
                    {/* Job title */}
                    {prevJob.title[0]}
                </Typography>
                <Typography sx={{ fontSize: '1em', color: '#696969' }}>
                    {/* Job dates */}
                    {prevJob.title[1]}
                    {': '}
                    {prevJob.dates.filter(e => e).join(' - ')}
                </Typography>
                {prevJob.desc.map((desc, descIndex) => {
                    return (
                        <Box
                            key={`priorDescIndex${descIndex}`}
                            sx={{
                                ...centeredFlexBox,
                                justifyContent: 'left',
                                flexWrap: 'nowrap',
                                my: 1,
                            }}
                        >
                            <CircleIcon
                                sx={{
                                    fontSize: '.5em',
                                    alignSelf: 'center',
                                    mx: 1,
                                }}
                            />
                            <Typography>{desc}</Typography>
                        </Box>
                    );
                })}
            </Box>
        );
    });

    return (
        <Box>
            <Typography
                variant="h4"
                sx={{ fontSize: '2em' }}
            >
                Prior Experience
            </Typography>
            <Typography
                variant="h5"
                sx={{ fontSize: '1.25em', color: '#696969' }}
            >
                And main duties
            </Typography>

            {formattedPriors}
        </Box>
    );
};

export default PriorExperience;
