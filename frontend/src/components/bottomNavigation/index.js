import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const renderMenu = (text) => {
        switch (text) {
            case 'Dashboard':
                return <DashboardIcon />;
            case 'Card':
                return <CreditCardIcon />;
            case 'Transaction':
                return <CompareArrowsIcon />;

            default:
                break;
        }
    };

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            {['Dashboard', 'Card', 'Transaction'].map((text, index) => (
                <BottomNavigationAction label={text} icon={renderMenu(text)}></BottomNavigationAction>
            ))}
        </BottomNavigation>
    );
}