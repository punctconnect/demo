
import React from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";

//  props


export default function ProductCard(props) {
    const { product } = props;

    return (
        <Paper elevation={3} style={{padding: "20px"}}>
                
            <div style={{padding: "20px"}}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.discount}</p>
                <p>{product.category}</p>
            </div>
        </Paper>
    );
}
