import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import './style.css';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Box from '@material-ui/core/Box';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        borderRightColor: "#252a41",
        backgroundColor: '#252a41',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        borderRightColor: "#252a41",
        backgroundColor: '#252a41',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    icon: {
        color: '#ffffff',
    },
    chevron: {
        color: '#ffffff',
        backgroundColor: '#3B3F54',
        borderRadius: '6px',
        width: '40px',
        height: '35px'
    },
    title: {
        color: '#ffffff'
    }
}));

export default function MiniDrawer(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        setOpen(!open);
    };

    const renderMenu = (text) => {
        switch (text) {
            case 'Dashboard':
                return <DashboardIcon className={classes.icon} />;
            case 'Card':
                return <CreditCardIcon className={classes.icon} />;
            case 'Admin':
                return <SupervisorAccountIcon className={classes.icon} />;

            default:
                break;
        }
    };

    const renderLink = (text) => {
        switch (text) {
            case 'Dashboard':
                return "/dashboard";
            case 'Card':
                return "/err";
            case 'Admin':
                return "/admin";

            default:
                return "/";
        }
    };

    const renderClass = (text) => {
        let pathname = props.pathname.slice(2); // to remove '/'
        pathname = props.pathname.slice(1, 2).toUpperCase().concat(pathname);
        if (text === pathname) {
            return 'activeLink';
        }
    };

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawer}>
                        {open === false ? <ChevronRightIcon className={classes.chevron} /> : <ChevronLeftIcon className={classes.chevron} />}
                    </IconButton>
                </div>

                <List>
                    {['Dashboard', 'Card', 'Admin'].map((text, index) => (
                        <Link key={index} to={renderLink(text)} style={{ color: 'inherit', textDecoration: 'none' }}>
                            <Box className={renderClass(text)} style={{ marginLeft: 10 }}>
                                <ListItem button key={text}>
                                    <ListItemIcon>{renderMenu(text)}</ListItemIcon>
                                    <ListItemText primary={
                                        <Typography className={classes.title}>
                                            <Box letterSpacing={2} m={1}>
                                                {text}
                                            </Box>
                                        </Typography>
                                    } />
                                </ListItem>
                            </Box>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                {props.child()}
            </main>
        </div >
    );
}