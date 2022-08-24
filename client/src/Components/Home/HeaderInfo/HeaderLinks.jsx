import { Box, Button } from '@mui/material';
import React from 'react';
import { navigationLinks } from '../../Shared/SharedConsts';
import { centeredFlexBox } from '../../Shared/StylePresets';

const HeaderLinks = () => {
    const formattedButtons = navigationLinks.map((page, index) => (
        <Button
            href={`#${page.toLowerCase()}`}
            variant="contained"
            sx={{
                mx: 1,
                backgroundColor: 'primary.dark',
            }}
            key={`navIndex${index}`}
        >
            {page}
        </Button>
    ));

    return <Box sx={{ ...centeredFlexBox, my: 8 }}>{formattedButtons}</Box>;
};

export default HeaderLinks;
