import React, { Component } from 'react'
import './style.css';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (

            <Box className="widget" boxShadow={2} borderRadius={20}>
                <Typography component="div">
                    <Box letterSpacing={1} fontWeight="fontWeightBold" fontSize="h6.fontSize" m={1}>
                        {this.props.title}
                    </Box>
                </Typography>
                {this.props.child()}
            </Box>
        );
    }
}

Widget.defaultProps = {
    title: 'Widget Title',
    child: function () { return < Typography component="div" style={{ color: '#000000' }} > Components</Typography>; }
}