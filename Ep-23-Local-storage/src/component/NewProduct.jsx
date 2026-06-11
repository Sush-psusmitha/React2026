import React, { useState } from 'react'
import { Grid, Paper, TextField, Typography,Button } from "@mui/material"

const NewProduct = () => {
    let paperStyle = {
        width: 400,
        margin: "20px auto", 
        padding: "20px"
    }
    
    let [newProduct, setNewProduct] = useState({
    "title": "",
    "price": 500,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 0,
      "count": 0
    }
    });

    let handleChange = (e) =>{
        // console.log(e.target.name);
        // console.log(e.target.value); since we able to get the value from e so we can desstructure
        let {value, name} = e.target; 
        // console.log(value,name);
        let fieldName = name.split("rating.")[1];
        if(name.includes("rating.")){
            setNewProduct({
                ...newProduct, 
                rating:{
                   ...newProduct.rating, [fieldName] : value
                }
            })
        }else{
           setNewProduct({
            ...newProduct, 
            [name]: value
        })
        }
        
    }
// console.log(newProduct);

let handleAdd = (e) => {
  e.preventDefault();

  fetch("http://localhost:5000/products", {
    method: "POST", 
    headers : {
        "Content-Type" : "application/json"
    }, 
    body: JSON.stringify(newProduct)
  })
  .then(()=>{
    alert("Data Added Succesfully!!"); 
    setNewProduct(
       {
    "title": "",
    "price": 500,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 0,
      "count": 0
    }
    }
    )
  })
}



    return (
        <Paper elevation={20} style={paperStyle}>
            <Typography variant='h5' textalign="center" gutterBottom>
                Create New Product
            </Typography>
            <Grid component="form" onSubmit={handleAdd} container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} style={{display: "grid", gap: "20px"}} >
                    <TextField  value={newProduct.title}
                        fullWidth
                        name='title'
                        label="Title" 
                        variant="outlined" 
                        onChange={handleChange}
                    /> 
                    <TextField value={newProduct.category}
                        fullWidth
                        name='category'
                        label="Category" 
                        variant="outlined" 
                         onChange={handleChange}
                    />
                    <Grid container spacing={2}>
                       <Grid size={6}>
                           <TextField value={newProduct.rating.rate}
                        fullWidth
                        name='rating.rate'
                        type='number'
                        label="Rate" 
                        variant="outlined" 
                         onChange={handleChange}
                        /> 
                       </Grid>
                       <Grid size={6}>
                           <TextField value={newProduct.rating.count}
                        fullWidth
                        name='rating.count'
                        type='number'
                        label="Count" 
                        variant="outlined" 
                         onChange={handleChange}
                        /> 
                       </Grid>
                    </Grid>
                </Grid>
                <Button variant="contained" type='submit'>Add</Button>
            </Grid>
        </Paper>
    )
}

export default NewProduct