import { Call, Email, Facebook, FmdGood, Instagram,Pinterest,Twitter, YouTube } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Container=styled.div`
display: flex;

`
const Left=styled.div`
flex:1.2;
`
const Logo=styled.h1`
font-size: 25px;

`
const Desc=styled.p`
margin: 20px 0px;

`
const SocialContainer=styled.div`
display: flex;

`
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color:white;
background-color: ${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 10px;
`
const Center=styled.div`
flex:1;
margin-left: 31px;
padding: 5px 25px;

`
const Topic=styled.h1`
font-size: 27px;
font-weight: 600;
margin-left:70px;

`
const List=styled.ul`
margin-top: 20px;
padding: 0;
display : flex;
list-style:none;
flex-wrap: wrap;
font-size: 20px;
`
const Head=styled.h1`
font-size: 27px;
font-weight: 600;
margin-left:110px;
margin-bottom: 10px;

`
const ListItem=styled.li`
width: 50%;
margin-bottom: 19px;
`
const Right=styled.div`
flex:1;
`
const ContactItem=styled.div`
font-size: 18px;
display: flex;
margin-right: 90px;
justify-content: center;
align-items: center;
margin-bottom: 10px;
`
const Payment=styled.img`
margin-top: 20px;
height: 130px;
width: 220px;
margin-left: 50px;

`
const Footer = () => {
  return (
    <Container>
<Left>
<Logo>
Wardrobe Wonders: Unveil Your Unique Elegance
</Logo>
<Desc>
Thank you for being a part of our journey. Your trust in us is not taken for granted, and we are honored to be your go-to destination for fashion. We look forward to serving you and helping you express your unique style.
</Desc>
<SocialContainer>
    <SocialIcon color="#1877F2">
    <Facebook></Facebook>
    </SocialIcon>
    <SocialIcon color="#E4405F">
        <Instagram></Instagram>
    </SocialIcon>
    <SocialIcon color="#1DA1F2">
        <Twitter></Twitter>
    </SocialIcon>
    <SocialIcon color="#FF0000">
        <YouTube></YouTube>
    </SocialIcon>
    <SocialIcon color="#0A66C2">
        <LinkedInIcon></LinkedInIcon>
    </SocialIcon>
    <SocialIcon>
        <Pinterest></Pinterest>
    </SocialIcon>
</SocialContainer>
</Left>
<Center>
<Topic>Useful Links</Topic>
<List>
    <ListItem>Home</ListItem>
    <ListItem> Cart</ListItem>
    <ListItem>Man Fashion</ListItem>
    <ListItem>Women Fashion</ListItem>
    <ListItem> Accessories</ListItem>
    <ListItem>My Account</ListItem>
    <ListItem>Order Tracking</ListItem>
    <ListItem>Wishlist</ListItem>
    <ListItem>Terms</ListItem>
    <ListItem>Wishlist</ListItem>
</List>
</Center>
<Right>
    <Head>Contact</Head>
<ContactItem>
    <FmdGood></FmdGood>
Butwal, Rupandehi-Nepal
</ContactItem>
<ContactItem>
    <Call></Call>
    9866543210
</ContactItem>
<ContactItem>
    <Email></Email>
    happytoserve11@gmail.com
</ContactItem>
<Payment src="https://digitizor.com/wp-content/uploads/2013/09/ecommerce-payment-options.jpg"></Payment>
   </Right>
    </Container>
  )
}

export default Footer



















