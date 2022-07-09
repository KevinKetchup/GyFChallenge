import React from 'react';
import { Card, CardContent, Typography, CardHeader } from "@mui/material";
import { Product } from "../app/models/products";
import moment from 'moment';

interface Props{
    product: Product; 
}

  function categoryValue(product : any) {
    switch(product) {
      case 'PRODUNO':
        return '1';
      default: 'PRODDOS'
        return '2';
    }
  };

export default function ProductCard({product}: Props) {
    return (
        <>
          <Card>
              
            <CardHeader
                title={product.id}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}
                }}/>
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                  Precio: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                  Fecha de carga: {moment(product.uploadDate).format("DD/MM/YYYY")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Categoria: {categoryValue(product.category)}
                </Typography>
            </CardContent>
           </Card>
        </>
    )
}