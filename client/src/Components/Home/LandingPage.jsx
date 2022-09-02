import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import DisplayInfo from './DisplayInfo/DisplayInfo';

const LandingPage = function () {
    useEffect(() => {
        /**
         * We aren't changing any state in this effect, but with an eval
         * I'd rather be safe instead of sorry.
         */
        const abortContoller = new AbortController();

        /**
         * A fix I found to use AOS on React:
         *
         * We MUST eval(aos init) on each page that wants to use the
         * aos effects. This is not needed on component children, just
         * the parent component.
         */

        /* eslint-disable-next-line */
        eval('AOS.init()');

        return () => {
            abortContoller.abort();
        };
    }, []);

    return (
        <Box>
            <HeaderInfo />
            <DisplayInfo />
        </Box>
    );
};

export default LandingPage;
