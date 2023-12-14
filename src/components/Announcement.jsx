import React from 'react'
import styled from 'styled-components';
const Container=styled.div`
height: 30px;
background-color: teal;
color: white;
align-items: center;
text-align: center;
`
const Announcement = () => {
  return (
    <Container>
        Super deal! Free shipping on orders over $50!
    </Container>
  )
}

export default Announcement