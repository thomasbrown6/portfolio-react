import React from "react";
import { Row, HomeSection } from "../components";
import "./Home.css";
import Favicon from 'react-favicon';


const Home = () => (
  <Row>
    <Favicon url="https://thomasabrown.herokuapp.com/static/media/Profilepic.b20333c2.JPG" />
    <HomeSection />
  </Row>
);

export default Home;
