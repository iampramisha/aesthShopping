import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container=styled.div`
width: 100vw;
height: 100vh;
background: url("https://th.bing.com/th/id/OIP.cJsn70xsbm7uZF13c-oPMQHaPD?&rs=1&pid=ImgDet")center;
display: flex;
align-items: center;
`
const Form=styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 290px;

`
const Input= styled.input`
margin: 14px;
width: 269px;
height: 26px;
padding-left: 14px;
color: black;
font-weight: 600;
letter-spacing: 1.4px;

`
const Wrapper=styled.div`
`
const Title=styled.h1`
margin-left: 510px;
font-size: 50px;
background-color: gray;
width: 36%;
border-radius: 9px;
justify-content: center;
align-items: center;
text-align: center;


`
const Agreement=styled.div`
font-size: 21px;
text-align: center;
align-items: center;
justify-content: center;
background-color: white;
font-family: fangsong;
border-radius: 3px;
padding: 2px 6px;

`
const Button=styled.button`
width: 69px;
height: 35px;
margin-top: 29px;
letter-spacing: 1.2px;
margin-right: 20px;
`
const linkStyle = {
    marginTop: '20px',
    textDecoration: 'none', // Remove underline
    color: 'White', // Set text color
    fontWeight: 'bold', 
    marginRight: "10px",// Make the text bold
    // Add more CSS properties as needed
  };
  
const Register = () => {
  return (
   <Container>
    <Wrapper>
        <Title>Create an account</Title>
        <Form>
            <Input placeholder="name"/>
            <Input placeholder="lastname"/>
            <Input placeholder="username "/>
            <Input placeholder="password "/>
            <Input placeholder="confirm password"/>
            <Agreement>
                By creating an account, I consent to the processing of my  personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>Create</Button>
            <Link to="/" style={linkStyle}>Home</Link>
        </Form>
    </Wrapper>
   </Container>
  )
}

export default Register