import React from 'react';
import { Grid } from "@mui/material";
import { Product } from "../app/models/products";
import ProductCard from "./ProductCard";

interface Props{
    products: Product[];
}

export default function ProductList({products}: Props){
    return (
            <Grid container spacing={3}>
            {products.map(product => (
                <Grid item xs={2} key={product.id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
}