import { useEffect, useState } from "react";
import { Product } from "../app/models/products";
import { Button, FormLabel, Input } from '@mui/material';
import React from 'react';
import ProductList from "./ProductList";

export default function Catalog () {
    const [products, setProducts] = useState<Product[]>([]);

    const [state, setState] = useState({
        price: ''
    });


    useEffect(() => {
        fetch('http://localhost:5000/api/products/')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])


    function filterEvent(p: any) {
        console.log(state.price)
        fetch(`http://localhost:5000/api/products?searchTerm=${p}`)
        .then(response => response.json())
        .then(data => setProducts(data))
      }


    return(
        <>
            <FormLabel>Presupuesto: </FormLabel>
            <Input sx={{width:"80px"}} id="ipre" name="ipre" type="number" value={state.price} 
                onChange={(e) => setState({price : e.target.value})}/>
            <Button variant="contained" onClick={() => filterEvent(state.price)} > Buscar</Button>
            <br/><br/><br/><br/>
            <ProductList products={products}/>
        </>
    )
}

