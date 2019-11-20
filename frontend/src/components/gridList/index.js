import React from 'react'
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Widget from '../widget';
import './style.css';

const handleWidth = (width) => {
    switch (width) {
        case 'xs':
            return true;
        default:
            return false;
    }
};

function WidgetGridList(props) {
    const { width } = props;
    const isSmall = handleWidth(width);
    return (
        <div className="root" >
            <GridList cellHeight={179} className="gridList" cols={isSmall ? 1 : 2}>
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

WidgetGridList.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
export default withWidth()(WidgetGridList);

