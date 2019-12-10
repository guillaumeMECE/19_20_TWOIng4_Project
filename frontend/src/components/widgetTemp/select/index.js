import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(props) {
    return (
        <div style={{ display: 'inline-block' }}>
            <Autocomplete
                id="combo-box-demo"
                options={props.selectList}
                getOptionLabel={option => option.location}
                style={{ width: 200 }}
                renderInput={params => (
                    <TextField {...params} label={props.name} variant="outlined" fullWidth />
                )}
                onChange={(e, value) => props.handleChange(e, value)}
            />
        </div>
    );
}
