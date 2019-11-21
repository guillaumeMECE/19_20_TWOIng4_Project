import React, { Component } from 'react'
import './style.css';

import Box from '@material-ui/core/Box'

export default class CreditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // let usersList = data.users.map((user, e) => this.renderUsers(user, e))
        // let publicationsList = this.state.focus.feed.map((publication, e) => this.renderPublications(publication, e))

        return (
            <div className="CreditCard">
                <Box letterSpacing={2} m={1} fontWeight="fontWeightBold" className="names">
                    {this.props.firstname.concat(' ', this.props.lastname)}
                </Box>
                <div className="expDate">
                    <div className="expDate-info">
                        <Box fontWeight="fontWeightLight" fontSize={6} textAlign="right">
                            EXPIRE
                         </Box>
                        <Box fontWeight="fontWeightLight" fontSize={6} textAlign="right">
                            A FIN
                        </Box>
                    </div>
                    <Box className="expDate-props">
                        {this.props.expDate}
                    </Box>
                </div>
                <Box fontWeight="fontWeightBold" className="cardNb">
                    {this.props.cardNumber}
                </Box>
            </div>
        );
    }
}

CreditCard.defaultProps = {
    firstname: 'Jack',
    lastname: 'FRANKLIN',
    expDate: '11/20',
    cardNumber: '**** 1234'
}
