import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap';

const Header = () => {
  return (
<Navbar className='py-4' bg="primary" expand="lg">
  <Container>
    <Navbar.Brand href="/" className="text-white">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <LinkContainer to="/"><Nav.Link className="text-white">Ana Sayfa</Nav.Link></LinkContainer>
        <NavDropdown title={<span className='text-white'>Hakkımızda</span>} id="basic-nav-dropdown">
          <NavDropdown.Item>ACM Nedir</NavDropdown.Item>
          <NavDropdown.Item>Neler Yapıyoruz</NavDropdown.Item>
          <NavDropdown.Item>Ekibimiz</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Separated link</NavDropdown.Item>
        </NavDropdown>
        <LinkContainer to="/blog"><Nav.Link className="text-white" href="blog">Blog</Nav.Link></LinkContainer>
        <Nav.Link className="text-white">Duyurular</Nav.Link>
        <LinkContainer to="/about"><Nav.Link className="text-white">İletişim</Nav.Link></LinkContainer>
      </Nav>
    </Navbar.Collapse>
    <LinkContainer to="/signin"><Button variant='outline-light'>Giriş Yap</Button></LinkContainer>
  </Container>
</Navbar>
  )
}

export default Header
