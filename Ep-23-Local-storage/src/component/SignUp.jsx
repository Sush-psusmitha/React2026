import React, { useState } from 'react'
import { Grid, Paper, TextField, Typography,Button } from "@mui/material"
import {useForm} from "react-hook-form"
import * as Yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

let rederCounter = 0;

let schema = Yup.object().shape({
  name : Yup.string().required("Name is required").matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter Your Full Name")

})
const SignUp = () => {

  let paperStyle = {
    width: 400, 
    margin: "20px auto", 
    padding: "20px",
    display: "grid", 
    gap: "20px"
  };
  rederCounter++;

 let [input,setInput] = useState("");

 let {register,handleSubmit,formState: {errors}} = useForm({
  resolver: yupResolver(schema)
 });
 
 let handleData = (data) => {
   console.log(data)
 }
  return (
    <Paper elevation ={20} style ={paperStyle} component="form" onSubmit={handleSubmit(handleData)}>
       <Typography textalign="center" variant='h6'>Create Account - {rederCounter}</Typography>
       <TextField  label = "Name" {...register( "name",)} 
       error = {!!errors.name}
       helperText={errors.name?.message}  />

       <TextField label = "Email" {...register( "email")} />

       <TextField label = "Age" {...register( "age")} />

       <TextField label = "Password" {...register( "password")} />

       <TextField label = "Confirm Password" {...register( "cPassword")} />

       <Button variant='contained' type='submit'>SignUp</Button>
    </Paper>
  )
}

export default SignUp
// useForm() - return object