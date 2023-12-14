import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title=styled.h1`
font-size: 60px;
margin-bottom: 20px;

`
const Description=styled.p`
font-size: 36px;
margin-bottom: 23px;
font-weight: 500;
`
const Button=styled.button`
flex: 1;
border: none;
background-color: #8FA799;
color: white;
`
const InputContainer=styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 2px solid lightgray;
`
const Input=styled.input`
border: none;
font-size: 20px;
flex: 8;
padding-left: 40px;
`
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description> Let us know what can we do to meet your needs :) 
        </Description>
        <InputContainer>
        <Input placeholder='Your Email'/>
        <Button>
            <Send></Send>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter