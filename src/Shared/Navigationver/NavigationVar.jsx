import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';



const NavigationVar = () => {
    const {user, logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
      logOut()
      .then()
      .catch(error => console.log(error))
    }
    return (
        <Container >
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    
     
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center">
             <Link to='/'>Home</Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#career">career</Nav.Link>
          </Nav>
          <Nav >
           
            {user && <FaUserCircle style={{fontSize:'2rem'}}/>}
            {user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                <Link to="/login">
                    <Button variant="secondary">Login</Button>
                </Link>
            }          
            
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
        </Container>
    );
};

export default NavigationVar;