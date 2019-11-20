import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Widget from '../widget';
import './style.css'


export default class WidgetGridList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        return (
            <div className="root" >
                <GridList cellHeight={160} className="gridList" cols={this.props.isSmall ? 1 : 2}>
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
}

