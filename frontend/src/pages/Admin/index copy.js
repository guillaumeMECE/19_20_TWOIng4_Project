import React from 'react';
import './style.css';
import Form from '../../components/form';
import CardPreview from '../../components/cardPreview';
import Grid from '@material-ui/core/Grid';

let stateObj;
const handleClick = (obj) => {
    console.log('valueOnClickTreeItem in TreeView', obj);
    stateObj = obj;
}

function Admin() {
    console.log('stateObj', stateObj);

    return (
        <div className="Admin">
            <Grid container spacing={3}>
                <Grid item xs>
                    <CardPreview onClick={(obj) => handleClick(obj)} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Form obj={stateObj} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Admin;
