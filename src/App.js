import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom'
import Main from './components/Main'
import Detail from './components/Detail'

function App() {
  return (
    <div>
      {/*TODO: 모듈화*/}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
          <Navbar.Brand href="#home">React-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <Link to='/'>Home</Link>
                <br></br>
                <Link to='/detail'>Detail</Link>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={ <Main/> }/>
        <Route path='/detail' element={ <Detail/> }/>
      </Routes>
    </div>
  );
}


export default App;
