import { useEffect, useState } from "react";
import { Product } from "../app/models/products";
import React from 'react';
import ProductList from "./ProductList";

export default function Catalog () {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products/',{
        method: 'GET',
        headers: {
            accept: 'application/json',
        }})
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    return(
        <>
            <ProductList products={products}/>
        </>
    )
}