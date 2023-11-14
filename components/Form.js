import React from "react";
import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { set } from "react-hook-form";

export default function Form() {
    const [products, setProducts] = React.useState([]);


    const handleGetProducts =  () => {
        console.log("Getting products");
  
        axios.get('https://dummyjson.com/products')
          .then(function (response) {
              if (response.status !== 200) {
                  console.log("Error getting products");
                  return;
              }
  
              setProducts(response.data.products);
  
          });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            title: e.target.title.value,
            description: e.target.description.value,
            price: e.target.price.value,
            discount: e.target.discount.value,
            category: e.target.category.value
        };

        axios.post('https://dummyjson.com/products/add', newProduct)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                console.error("Error adding product:", error);
            });

         setProducts([...products, newProduct]);
    }
  
 
    return (
        <div>
                <div>
                <form style={{padding: "20px"}} onSubmit={handleSubmit}>
                    {/* title, required */}
                    <label htmlFor="title">Title</label>
                    &nbsp;
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                    />

                    <br/>
                    <br/>

                    {/* description, textarea, optional, length>30 */}
                    <label htmlFor="description">Description</label>
                    &nbsp;
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        minLength={30}
                    />

                    <br/>
                    <br/>

                    {/* price, number, required */}
                    <label htmlFor="price">Price</label>
                    &nbsp;
                    <input
                        type="number"
                        id="price"
                        name="price"
                        required
                    />

                    <br/>
                    <br/>
                    
                    <label htmlFor="discount">Discount</label>
                    &nbsp;
                    <input
                        type="number"
                        id="discount"
                        name="discount"
                        min={5}
                    />
                    <span>%</span>

                    <br/>
                    <br/>

                    {/* category from smartphones, laptops */}
                    <label htmlFor="category">Category</label>
                    &nbsp;
                    <select id="category" name="category">
                        <option value="smartphones">Smartphones</option>
                        <option value="laptops">Laptops</option>
                    </select>

                    <br/>
                    <br/>

                    <button type="submit">Submit</button>
                </form> 
                </div>

                <div>
                <Button variant="contained" color="primary" onClick={handleGetProducts}>
                    Get products
                </Button>


                <br/>
                <br/>


                <Grid container spacing={2}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>

                </div>
        </div>


    );
}