import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import reactLogo from '../reactLogo.png';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const NavBar = () => {

    const { logout } = useContext(AuthContext);

  return (
    <>
        <Navbar bg="light">
          <Container>
              <Navbar.Brand href="/">
              <img
              alt=""
              src={reactLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Auth
            </Navbar.Brand>

            <Nav>
              <Nav.Item>
                <Button variant='dark' onClick={logout}>Log out</Button>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
    </>
  )
  }