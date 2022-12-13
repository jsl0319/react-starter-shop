import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import shoes from './data/shoes';

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
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
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

      <div className='main-bg'></div>

      <Container>
        <Row>
          {
            shoes.map((s, i) => <Item key={i} shoes={shoes[i]} index={i}></Item>)
          }
        </Row>
      </Container>

    </div>
  );
}

const Item = (props) => {
  const altStr = `shoes${props.index + 1}`;
  const imgSrc = `https://codingapple1.github.io/shop/${altStr}.jpg`;

  return (
      <Col xs>
        <img src={ imgSrc } alt='shoes1' width='80%'/>
        <h4>{ props.shoes.name }</h4>
        <p>{ props.shoes.brand }</p>
        <p>{ props.shoes.description }</p>
        <p>{ props.shoes.price }</p>
      </Col>
  )
}

export default App;
