import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import shoes from './data/shoes';
import { Routes, Route, Link } from 'react-router-dom'

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

const Main = () => {
  return(
      <>
        <div className='main-bg'></div>
        <Container>
          <Row>
            {
              shoes.map((s, i) => <Card key={i} shoes={shoes[i]} i={i}></Card>)
            }
          </Row>
        </Container>
      </>
  )
}

const Card = (props) => {
  const altStr = `shoes${props.i + 1}`;
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

const Detail = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt='shoes1' width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default App;
