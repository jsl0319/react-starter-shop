import { Col } from "react-bootstrap";

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

export default Card