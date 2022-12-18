import { Container, Row } from "react-bootstrap";
import Card from "./Card";

const Main = (props) => {
    return(
        <>
          <div className='main-bg'></div>
          <Container>
            <Row>
              {
                props.shoes.map((s, i) => <Card key={i} shoes={props.shoes[i]} i={i}></Card>)
              }
            </Row>
          </Container>
        </>
    )
  }

export default Main;