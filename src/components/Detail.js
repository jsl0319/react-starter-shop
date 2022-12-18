import { useParams } from "react-router-dom";

const Detail = (props) => {
  let { id } = useParams();
  let shoe = props.shoes.find((s) => s.id == id);

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt='shoes1' width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{shoe.name}</h4>
            <p>{shoe.description}</p>
            <p>{shoe.price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    )
}

export default Detail;