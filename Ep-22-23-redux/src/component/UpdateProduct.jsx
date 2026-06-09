import React, { useEffect, useState } from 'react'
import { Grid, Paper, TextField, Typography,Button } from "@mui/material"
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"


const UpdateProduct = () => { 
    let paperStyle = {
        width: 400,
        margin: "20px auto", 
        padding: "20px"
    }; 

    
    let [updateProduct, setUpdateProduct] = useState(null);

   let {id} = useParams(); 
 let navigate =  useNavigate()
  useEffect(()=>{
    axios.get(`http://localhost:5000/products/${id}`)
    .then(res => setUpdateProduct(res.data))
  },[]);


    let handleChange = (e) =>{
        let {value, name} = e.target; 
        let fieldName = name.split("rating.")[1];
        if(name.includes("rating.")){
            setUpdateProduct({
                ...updateProduct, 
                rating:{
                   ...updateProduct.rating, [fieldName] : value
                }
            })
        }else{
           setUpdateProduct({
            ...updateProduct, 
            [name]: value
        })
        }
        
    }

let handleUpdate = (e) => {
  e.preventDefault();

  fetch(`http://localhost:5000/products/${id}`, {
    method: "PUT", 
    headers : {
        "Content-Type" : "application/json"
    }, 
    body: JSON.stringify(updateProduct)
  })
  .then(()=>{
    alert("Data Saved Succesfully!!"); 
    navigate("/products")
  });
}


  if(updateProduct !== null){
   return (
        <Paper elevation={20} style={paperStyle}>
            <Typography variant='h5' textalign="center" gutterBottom>
                Update Product
            </Typography>
            <Grid component="form" onSubmit={handleUpdate} container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} style={{display: "grid", gap: "20px"}} >
                    <TextField  value={updateProduct.title}
                        fullWidth
                        name='title'
                        label="Title" 
                        variant="outlined" 
                        onChange={handleChange}
                    /> 
                    <TextField value={updateProduct.category}
                        fullWidth
                        name='category'
                        label="Category" 
                        variant="outlined" 
                         onChange={handleChange}
                    />
                    <Grid container spacing={2}>
                       <Grid size={6}>
                           <TextField value={updateProduct.rating.rate}
                        fullWidth
                        name='rating.rate'
                        type='number'
                        label="Rate" 
                        variant="outlined" 
                         onChange={handleChange}
                        /> 
                       </Grid>
                       <Grid size={6}>
                           <TextField value={updateProduct.rating.count}
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
                <Button variant="contained" color="success" type='submit'>Save</Button>
            </Grid>
        </Paper>
    )
  } else{
    <div>Loading..</div>
  }
    
}

export default UpdateProduct
