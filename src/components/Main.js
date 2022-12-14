import { Container, Row } from "react-bootstrap";
import Card from "./Card";
import shoes from '../data/shoes';

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

export default Main;