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
import ProfitAndLoss from '../profitAndLoss';
import TransactionList from '../transactionList';
import TopInList from '../topIn';
import AmountCutting from '../amountCutting';

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
            <GridList spacing={12} cellHeight={300} className="gridList" cols={isSmall ? 1 : 3}>
                <GridListTile cols={isSmall ? 1 : 3}>
                    <Widget title="Suivie du compte" child={() => (<AccountStatement />)} />
                </GridListTile>
                <GridListTile cols={1}>
                    <Widget title="Types d'achats" child={() => (<DoughnutTagChart />)} />
                </GridListTile>
                <GridListTile>
                    <Widget title="Amount Cutting" child={() => (<AmountCutting />)} />
                </GridListTile>
                <GridListTile>
                    <Widget title="Profit & Loss" child={() => (<ProfitAndLoss />)} />
                </GridListTile>
                <GridListTile>
                    <Widget title="Last Transactions" child={() => (<TransactionList />)} />
                </GridListTile>
                <GridListTile>
                    <Widget title="Top In" child={() => (<TopInList />)} />
                </GridListTile>
            </GridList>
        </div>
    );
}

WidgetGridList.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
export default withWidth()(WidgetGridList);

