import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Container=styled.div`
display: flex;
background-color: light-gray;

`
const Wrapper=styled.div`
display: flex;
 align-items: center;
justify-content: center;
flex-direction: column;
margin-left: 600px;

`
const Title=styled.h1`
display: flex;
jsutify-content: center;
align-items: center;
margin-top: 49px;
margin-right: 10px;
`
const Form=styled.form`
display: flex;
flex-direction: column;
margin: 50px 30px;
`
const Input=styled.input`
margin-bottom: 19px;
width: 190px;
height: 20px;
font-weight: 600;
letter-spacing: 1.2px;

`
const Button=styled.button`
width: 70px;
height: 36px;
margin-left: 59px;
`
const Login = () => {
  return (
 <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="Enter your username"/>
            <Input placeholder="Enter your password"/>
            <Button>Log in</Button>
        </Form>
        <Link to="/">Home</Link>
    </Wrapper>
 </Container>
  )
}

export default Login