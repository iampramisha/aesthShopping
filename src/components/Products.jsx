import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
const Container=styled.div`
width: 85%;
padding: 20px;
display: flex;
// to make items horixontal we should write display flex herree
flex-wrap: wrap;
justify-content:center;
align-items: center;
margin-left: 90px;

`
const Small=styled.div`
margin: 60px;
font-size: 30px;
text-align: center;
align-items: center;
font-family: cursive;
`

const Products = () => {
  return (
    <>
  <Small>
    Besides Traditional, you may also like 
  </Small>
    <Container>
        {popularProducts.map(item=>(
            <Product item={item} key={item.id} />
        ))}
    </Container>
    </>
  )
}

export default Products