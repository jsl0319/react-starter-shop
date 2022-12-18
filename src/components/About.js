import { Outlet } from "react-router-dom";

const About = () => {
    return(
      <>
      <h4>이건 어바웃 페이지 입니다.</h4>
      <Outlet></Outlet>
      </>
    )
  }

export default About;