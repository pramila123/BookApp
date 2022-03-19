import React from 'react'
import styled from 'styled-components'
const NavbarContainer=styled.div`
width:100;
// background:#5F94B4;
font-size:1.4rem;
text-transform:uppercase;
// color:#fff;
`;
const NavSection=styled.div`
padding:1.2rem 1rem;
word-spacing:0.3rem;
letter-spacing:0.01rem;
text-align:center;
`;
const Navbar = () => {
  return (
  <>
  <NavbarContainer>
      <NavSection>
Book Management System
      </NavSection>

  </NavbarContainer>
  </>
  )
}

export default Navbar