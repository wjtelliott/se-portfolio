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
    Button,
} from '@mui/material';
import {
    Menu as MenuIcon,
    MonetizationOn as MonetizationOnIcon,
} from '@mui/icons-material';
import NavBarAvatar from './NavBarAvatar';
import { logoTitle } from './SharedConsts';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account Settings', 'Logout'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const navigate = useNavigate();

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = event => {
        const newUrl = event.target.innerText?.replace(' ', '').toLowerCase();
        if (newUrl) navigate(newUrl);
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = event => {
        const newUrl = event.target.textContent?.replace(' ', '').toLowerCase();
        if (newUrl) navigate(newUrl);
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <MonetizationOnIcon
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                    />

                    <Typography
                        variant="h6"
                        noWrap
                        onClick={() => navigate('/')}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
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

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
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
                                display: { xs: 'block', md: 'none' },
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

                    <MonetizationOnIcon
                        sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        onClick={() => navigate('/')}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
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

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {pages.map(page => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* Avatar */}
                    <NavBarAvatar
                        settings={settings}
                        handleCloseUserMenu={handleCloseUserMenu}
                        handleOpenUserMenu={handleOpenUserMenu}
                        anchorElUser={anchorElUser}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
