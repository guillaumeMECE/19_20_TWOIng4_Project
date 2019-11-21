import React from 'react';
import './style.css';
import Form from '../../components/form';
import CardPreview from '../../components/cardPreview';
import Grid from '@material-ui/core/Grid';


function Transaction() {
    return (
        <div className="Transaction">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Form />
                </Grid>
                <Grid item xs>
                    <CardPreview />
                </Grid>
            </Grid>
        </div>
    );
}

export default Transaction;
