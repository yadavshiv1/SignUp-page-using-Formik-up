import React from 'react';
import './Style.css'
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
  const validate = Yup.object({
    companyName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'at  least 6 chars')
      .required('Password is required'),
  })
  return (
    <Formik
      initialValues={{
        companyName: '',
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div className='Rectangle'>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <p>No credit card required</p>
          <Form>
            <TextField label="Company Name" name="companyName" type="text" />
            <TextField label="Email" name="email" type="email" /><br/>
            <TextField label="password" name="password" type="password" /><br/>
            <input type="checkbox" name="checkbox" id="checkbox" required />
            <span> I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
            <button className="btn btn-dark mt-3" type="submit" style={{
        backgroundColor:'red',

}}>Get Started</button>
          </Form>
          
        </div>
      )}
    </Formik>
 
  )
}
