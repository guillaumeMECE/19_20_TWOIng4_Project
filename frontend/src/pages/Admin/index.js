import React from 'react';
import './style.css';
import Form from '../../components/form';
import CardPreview from '../../components/cardPreview';
import Grid from '@material-ui/core/Grid';


function Admin() {
    return (
        <div className="Admin">
            <Grid container spacing={3}>
                <Grid item xs>
                    <CardPreview />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Form />
                </Grid>
            </Grid>
        </div>
    );
}

export default Admin;
