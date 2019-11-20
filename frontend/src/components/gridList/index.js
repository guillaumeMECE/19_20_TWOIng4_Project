import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Widget from '../widget';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#F5F5F5',
        borderRadius: '20px',
        padding: '1em'
    },
    gridList: {
        width: '100%',
        // height: auto,
    },
}));

export default function ImageGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={2}>
                <GridListTile>
                    <Widget />
                </GridListTile>
                <GridListTile>
                    <Widget />
                </GridListTile>
                <GridListTile>
                    <Widget />
                </GridListTile>
                <GridListTile>
                    <Widget />
                </GridListTile>
                <GridListTile>
                    <Widget />
                </GridListTile>
                <GridListTile>
                    <Widget />
                </GridListTile>
            </GridList>
        </div>
    );
}
