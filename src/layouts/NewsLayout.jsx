

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import RightNave from '../Shared/RightNave/RightNave';

const NewsLayout = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNave></RightNave>
                    </Col>
                </Row>
            </Container>
           <Footer />
        </div>
    );
};

export default NewsLayout;