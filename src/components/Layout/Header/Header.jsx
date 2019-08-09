import React, { useState, useContext } from 'react';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import useStyles from './HeaderStyle';
import { AppContext } from '../../../services/AppContext';

function useMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    function handleMobileMenuClose() {
        setAnchorEl(null);
    }

    function handleMobileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    return {
        anchorEl,
        open: isMenuOpen,
        onClose: handleMobileMenuClose,
        onClick: handleMobileMenuOpen,
    };
}

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { cart } = useContext(AppContext);
    let count = cart.length;

    const theme = useTheme();

    function handleDrawerOpen() {
        setDrawerOpen(true);
    }

    function handleDrawerClose() {
        setDrawerOpen(false);
    }

    const renderMainMenu = (
        <React.Fragment>
            <div className={classes.drawerHeader} />
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
                onClose={handleDrawerClose}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link to="/">
                        <ListItem button>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/products">
                        <ListItem button>
                            <ListItemText>All products</ListItemText>
                        </ListItem>
                    </Link>

                    <Link to="/bestseller">
                        <ListItem button>
                            {' '}
                            <ListItemText>Bestseller</ListItemText>
                        </ListItem>
                    </Link>
                    <ListItem button>
                        <ListItemText>Profile</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>About us</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    );

    const menuId = 'primary-search-account-menu';
    const { onClose, open, anchorEl, onClick } = useMenu();
    // console.log(open);
    const renderMenu = (
        <Menu
            onClose={onClose}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <MenuItem onClick={onClose}>
                <Link to="/login">Đăng nhập</Link>
            </MenuItem>
            <MenuItem onClick={onClose}>
                <Link to="/signup">Đăng ký</Link>
            </MenuItem>
        </Menu>
    );

    const {
        onClose: onMobileMenuClose,
        open: mobileMenuOpen,
        anchorEl: mobileMenuAnchorEl,
        onClick: onMobileMenuClick,
    } = useMenu();
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMenuAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={mobileMenuOpen}
            onClose={onMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="Show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    aria-label="Show 11 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={onClick}>
                <IconButton
                    aria-label="Account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        VN ÔTÔ
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'Search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Link to="/cart">
                            <IconButton
                                aria-label="Show 4 new mails"
                                color="inherit"
                            >
                                <Badge badgeContent={count} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </Link>

                        <IconButton
                            aria-label="Show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="Account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={onClick}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="Show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={onMobileMenuClick}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.grow}>
                {renderMobileMenu}
                {renderMenu}
                {renderMainMenu}
            </div>
        </div>
    );
}
