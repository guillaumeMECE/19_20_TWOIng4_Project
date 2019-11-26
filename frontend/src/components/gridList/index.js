import React from 'react'
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Widget from '../widget';
import './style.css';
import ChartTest from '../chartTest';
import DoughnutTagChart from '../doughnutTagChart/index';
import AccountStatement from '../accountStatement';

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
            <GridList cellHeight={300} className="gridList" cols={isSmall ? 1 : 2}>
                <GridListTile cols={2}>
                    <Widget title="Suivie du compte" child={() => (<AccountStatement />)} />
                </GridListTile>
                <GridListTile>
                    <Widget title="Types d'achats" child={() => (<DoughnutTagChart />)} />
                </GridListTile>
                <GridListTile>
                    <Widget title="Area chart test 3" child={() => (<ChartTest />)} />
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

