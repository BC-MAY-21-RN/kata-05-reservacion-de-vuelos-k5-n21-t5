import React from "react";
//import { Formik } from "formik";
import { useState } from "react";
import CheckBox from '@react-native-community/checkbox';
import { Tittle, TextInput, Container, Subtitles, Caption, SubmitButton, Check } from "./style/common_style";

export const login = (props) => {

    const [checkBox, setCheckBox] = useState(true)

    const revisar = (val) => (checkBox == true) ? setCheckBox(false) : setCheckBox(true) 
    return (
      //   <Formik
      //   initialValues={{ email: '', password: '' }}
      //   onSubmit={values => console.log(values)}
      // > {({ handleChange, handleBlur, handleSubmit, values }) => (
    <Container>
         
      <Tittle>Log In</Tittle>
      <Subtitles>Email</Subtitles>
      <TextInput ></TextInput>
      
      <Subtitles>Password</Subtitles>
      <TextInput ></TextInput>
      <Caption>use 8 or mor characters with a mix of of letters,numbers ans symbols.</Caption> 

      <CheckBox
      title="I agree to the Terms and Privacy Policy"
      disabled={false}
      value={checkBox}
      onValueChange={(checkBox) => {revisar(checkBox)}}
      ></CheckBox>

      <SubmitButton title="Enviar"></SubmitButton>
    </Container> 
 

  );
}