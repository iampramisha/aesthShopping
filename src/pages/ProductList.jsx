import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Products from '../components/Products';


const Container=styled.div`

`
const FilterContainer=styled.div`
display: flex;
justify-content: space-around;
`
const Filter=styled.div`
margin: 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Title=styled.h1`
margin: 20px;
font-weight: 600;
font-size: 36px;
`
const FilterText=styled.span`
font-size: 22px;
margin-right: 20px;

`
const Select=styled.select`
padding: 10px;
margin-right: 20px;
font-size: 18px;

`
const Option=styled.option`
`
const ProductList = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Announcement></Announcement>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
<FilterText>
    Filter Products:
</FilterText>
<Select>
    <Option disabled selected>Color</Option>
    <Option>White</Option>
    <Option>Black  </Option>
    <Option>Blue</Option>
    <Option>Red</Option>
    <Option>Yellow</Option>
    <Option>Green</Option>
</Select>
<Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XM</Option>
                    <Option>S</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Products:
                </FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price(asc)</Option>
                    <Option>Price(desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products></Products>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </Container>
  )
}

export default ProductList