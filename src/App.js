import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Main from './components/Main'
import Detail from './components/Detail'
import About from './components/About';
import shoes from './data/shoes';

import Error404 from './page/404'

function App() {
  let navigate  = useNavigate();

  return (
    <div>
      {/*TODO: 모듈화*/}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
          <Navbar.Brand href='/'>React-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => {navigate('/')}}>Home</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {navigate('/detail')}}>Detail</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {navigate('/about')}}>About</NavDropdown.Item>
              {/* Link 사용은 안이뿜.. css 따로 적용해야함.. */}
                {/* <Link to='/'>Home</Link>
                <Link to='/detail'>Detail</Link> */}
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

      {/* 라우트 보따리  */}
      <Routes>
        <Route path='/' element={ <Main shoes={shoes}/> }/>
        <Route path='/detail/:id' element={ <Detail shoes={shoes}/> }>
        </Route>
        {/* 라우트 중첩으로 부모-자식 관계로 표현할 수 있당 */}
        <Route path='/about' element={ <About/> }>
          <Route path='one' element={<h4>about: 상세페이지 입니다.</h4>}/>
        </Route>
        {/* 앞에 정의한 path 외의 경로는 404 페이지를 호출함 */}
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
