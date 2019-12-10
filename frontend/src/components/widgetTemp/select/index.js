/* eslint-disable no-use-before-define */
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


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

