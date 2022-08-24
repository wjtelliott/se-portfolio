import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    AppBar,
    Toolbar,
    Container,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { logoTitle } from './SharedConsts';

const pages = ['Projects', 'Experience', 'Education'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const navigate = useNavigate();

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = event => {
        const newUrl = event.target.innerText?.replace(' ', '').toLowerCase();
        if (newUrl) navigate('#' + newUrl);
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                display: { xs: 'flex', md: 'none' },
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: 'block',
                            }}
                        >
                            {pages.map(page => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        onClick={() => navigate('/')}
                        sx={{
                            mr: 2,
                            display: 'flex',
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        {logoTitle}
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
