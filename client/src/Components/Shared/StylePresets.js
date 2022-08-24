const headerOffset = '425px';
const displayOffset = '460px';

const centeredFlexBox = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
};

const removeLinkDecor = {
    textDecoration: 'none',
    color: 'inherit',
};

const headerInfo = {
    backgroundColor: 'primary.main',
    position: 'fixed',
    display: {
        xs: 'none',
        md: 'flex',
    },
    width: headerOffset,
    minHeight: '100vh',
    top: 0,
    left: 0,
};

const displayInfo = {
    ml: {
        xs: 0,
        md: displayOffset,
    },
};

module.exports = { centeredFlexBox, removeLinkDecor, headerInfo, displayInfo };
