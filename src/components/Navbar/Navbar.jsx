import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
const Input=styled.input`
border: none;
background-color: #eee;
font-size: 10px;
align-items: center;
margin-top: 6px;

`
const Navbar = () => {
  return (
    <div className="container">
<div className="wrapper">
    <div className="left">
<div className="Language">
    EN
</div>
<div className="SearchContainer">
    <Input/>
<SearchIcon style={{ color: "white", fontSize:16}}/>

</div>
    </div>
    <div className="center">
<div className="logo">
Wardrobe Wonders 
</div>
    </div>
    <div className="right">
    <Link to="/register">
<div className="register">
    Register

</div>
</Link>
<Link to="/login">
<div className="sign-in">
Sign in
</div>
</Link>
<div className="badge">
<Badge badgeContent={4} color="primary">
  <ShoppingCartOutlinedIcon/>
</Badge>
</div>
    </div>
</div>
    </div>
  )
}

export default Navbar