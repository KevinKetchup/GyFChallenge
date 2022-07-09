import { AppBar, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import React from 'react';

const navStyles =
{
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '%:hover':{
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

export default function Header({}) {
    return(
        <AppBar position='static'  sx={{mb: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography variant='h6' component={NavLink} to='/' sx={navStyles}>
                        GyFStocks
                    </Typography>   
                </Box>
                <List sx={{display: 'flex'}}>
                        <ListItem
                        component={NavLink}
                        to={'/AddProduct'}
                        key={'/AddProduct'}
                        sx={navStyles}
                        >
                            ADD PRODUCT
                        </ListItem>
                        
                        <ListItem
                        component={NavLink}
                        to={'/Catalog'}
                        key={'/Catalog'}
                        sx={navStyles}
                        >
                            CATALOG
                        </ListItem>
                </List>                
            </Toolbar>
        </AppBar>
    )
}