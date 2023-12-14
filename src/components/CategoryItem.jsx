import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
flex:1;
margin:3px;
height: 70vh;
position:relative;
`
const Image=styled.img`
width:100%;
height: 100%;
object-fit: cover;
`
const Title=styled.h1`
color:black;
margin: 20px;
background-color: white;
padding: 3px;
opacity: 0.55;
border-radius: 20px;


`
const Button=styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
`
const Info=styled.div`
position: absolute;
align-items: center;
justify-content: center;
text-align: center;
top:0;
left:0;
flex-direction: column;
width:100%;
height: 100%;
display: flex;
`
const CategoryItem = ({item}) => {
  return (
   <Container>
    <Image src={item.img}/>  
    <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
    </Info>
     </Container>
  )
}

export default CategoryItem