import React from 'react';
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions';

const Header = ({ setSearch, darkMode, setDarkMode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logOutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: darkMode ? '#333' : '#f8f9fa',
        color: darkMode ? '#fff' : '#343a40',
      }}
    >
      <Container>
        <Navbar.Brand href="/">
          <Link to="/" style={{
            textDecoration: 'none',
            color: darkMode ? '#fff' : '#343a40',
          }}>
            Memoire
          </Link>
        </Navbar.Brand>
        <div
          className="w-6 h-6 cursor-pointer"
          style={{
            color: darkMode ? '#fff' : '#343a40',
          }}
          onClick={toggleDarkMode}
        >
          {darkMode ? '🌙' : '☀️'}
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {userInfo && (
            <Nav className="m-auto">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            </Nav>
          )}
          {userInfo ? (
            <Nav>
              <Nav.Link href="/mynotes">
                <Link
                  to="/mynotes"
                  style={{
                    textDecoration: 'none',
                    color: darkMode ? '#fff' : '#343a40', // Set your text colors
                  }}
                >
                  My Notes
                </Link>
              </Nav.Link>
              <NavDropdown title={userInfo?.name} id="basic-nav-dropdown" style={{
                textDecoration: 'none',
                color: darkMode ? '#fff' : '#343a40', // Set your text colors
              }}>
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Item
                  onClick={logOutHandler}
                >
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link
                to="/login"
                style={{
                  textDecoration: 'none',
                  color: darkMode ? '#fff' : '#343a40', // Set your text colors
                }}
              >
                Login
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
