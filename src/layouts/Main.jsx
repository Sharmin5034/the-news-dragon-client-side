import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNave from '../Shared/LeftSide/LeftNave';
import RightNave from '../Shared/RightNave/RightNave';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
        <Header />
 <Container>
      <Row>
        <Col sm ={3}><LeftNave /></Col>
        <Col sm ={6}><Outlet>  </Outlet></Col>
        <Col sm ={3}><RightNave /></Col>
      </Row>
    </Container>
        <Footer />
        </div>
    );
};

export default Main;