import React from "react";
//import { Formik } from "formik";
import { useState } from "react";
import CheckBox from '@react-native-community/checkbox';
import { Tittle, TextInput, Container, Subtitles, Caption, SubmitButton, Check,Text0,SubmitButton2, Footer } from "./style/common_style";

export const login = (props) => {

    const [checkBox, setCheckBox] = useState(true)
    const [checkBox2, setCheckBox2] = useState(true)


    const revisar = (val) => (checkBox == true) ? setCheckBox(false) : setCheckBox(true)
    const revisar2 = (val) => (checkBox2 == true) ? setCheckBox2(false) : setCheckBox2(true) 
 
    return (
      //   <Formik
      //   initialValues={{ email: '', password: '' }}
      //   onSubmit={values => console.log(values)}
      // > {({ handleChange, handleBlur, handleSubmit, values }) => (
    <Container>
         
      <Tittle>Log In</Tittle>
      <Subtitles>First Name</Subtitles>
      <TextInput ></TextInput>

      <Subtitles>Email</Subtitles>
      <TextInput ></TextInput>
      
      <Subtitles>Password</Subtitles>
      <TextInput ></TextInput>
      <Caption>Use 8 or mor characters with a mix of of letters,numbers ans symbols.</Caption> 

      <CheckBox
        title="I agree to the Terms and Privacy Policy"
        disabled={false}
        value={checkBox}
        checkedColor='red'
        textStyle='blue'
        uncheckedColor='#4543'
        onValueChange={(checkBox) => {revisar(checkBox)}}
      ></CheckBox>

      <CheckBox
        title="Suscribe for select products updates"
        disabled={false}
        value={checkBox2}
        onValueChange={(checkBox2) => {revisar2(checkBox2)}}
      ></CheckBox>
        
      <SubmitButton title="Sing Up"></SubmitButton>
      <Text0>Or</Text0>
      <SubmitButton2
        icon={{
        name: "arrow-right",
        size: 15,
        color: "white"
        }}
        title="Sing up with Google"
      />
      <Footer>Already have an acount</Footer>


    </Container> 
 

  );
}