import { Box, Button, InputAdornment, MenuItem, TextField } from '@mui/material';
import moment from 'moment';
import React, { useState } from 'react';



export default function AddProduct () {    
    const [state, setState] = useState({
        price: '',
        uploadDate: moment(new Date()).format("DD/MM/YYYY"),
        category: '',
    });

    const categories = [
        {
            value: 'PRODUNO',
            label: 'Producto Uno',
        },
        {
            value: 'PRODDOS',
            label: 'Producto Dos'
        },
      ];
       
    const [category, setCategory] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
      };
    
    return(
    <div className='Box' style={{display:'contents'}}>
        <Box>
            <div className='textField'>
                <TextField label="Price" 
                    InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }} id="Price" />
                <TextField label="UploadDate" id="UploadDate" value={state.uploadDate} />
                <TextField style={{width:'200px'}}  id="Category" select label="Category" value={category} onChange={handleChange} >
                {categories.map((option) => (
                    <MenuItem  key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
                <Button variant="contained" style={{margin:'10px 10px 10px 60px'}}>Insert</Button>
            </div>
        </Box>
    </div>
    )
}