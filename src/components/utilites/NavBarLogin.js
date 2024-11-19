import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import cart from '../../images/cart.png'
const NavBarLogin = () => {
    return (
 
    <Navbar expand="sm" className="sticky-top" bg='dark' variant='dark'>
      <Container >
        <Navbar.Brand >
            <img src={logo} className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <FormControl type='search' placeholder='ابحث ...' className='me-2 w-100 text-center' aria-label='Search'/>
            <Nav className="me-auto">
                <Nav.Link className='nav-text d-flex mt-3 justify-content-center'>
                    <img src={login} className='login-img' alt='sfvs'/>
                    <p style={{color:'white'}}>دخول</p>
                </Nav.Link>
                <Nav.Link className='nav-text d-flex mt-3 justify-content-center'>
                    <img src={cart} className='login-img' alt='sfvs'/>
                    <p style={{color:'white'}}>عربة</p>
                </Nav.Link>
                
            </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

 

export default NavBarLogin 