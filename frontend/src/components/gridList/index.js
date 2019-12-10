import React from 'react';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Widget from '../widget';
import './style.css';
import DoughnutChart from '../doughnutChart/index';
import BarChartHorizontal from '../barChartHorizontal';
import ListTop5 from '../ListTop5';
import InfiniteList from '../infiniteList';
import BarChartHorizontal2 from '../barChartHorizontal2';
import WidgetTemp from '../widgetTemp';
import WidgetAverageMeasure from '../widgetAverageMeasure';

const handleWidth = (width) => {
    switch (width) {
        case 'sm':
            return true;
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
            <GridList spacing={12} cellHeight={300} className="gridList" cols={isSmall ? 1 : 3}>
                <GridListTile cols={isSmall ? 1 : 3}>
                    <Widget title="Temperature in" child={() => (<WidgetTemp />)} />
                </GridListTile>
                <GridListTile cols={1}>
                    <Widget title="AirPollution By Country" child={() => (<DoughnutChart />)} />
                </GridListTile>
                <GridListTile>
                    <Widget title="Top 3 Temp" child={() => (<ListTop5 />)} />
                </GridListTile>
                <GridListTile>
                    <Widget title="Measures By Location" child={() => (<WidgetAverageMeasure />)} />
                </GridListTile>
                <GridListTile>
                    <Widget title="Sensors By HouseSize" child={() => (<InfiniteList />)} />
                </GridListTile>
                <GridListTile cols={isSmall ? 1 : 2}>
                    <Widget title="Sensors by Country" child={() => (<BarChartHorizontal />)} />
                </GridListTile>
            </GridList>
        </div>
    );
}

WidgetGridList.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
export default withWidth()(WidgetGridList);

