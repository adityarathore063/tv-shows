import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <h3>Tv Shows</h3>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
