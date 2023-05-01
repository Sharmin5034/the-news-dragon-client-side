import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {

    return (
        <Container>
        <div className='text-center'>
            <img src={logo} alt=''/>
            <p className='text-secondary'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
           <div className='d-flex text-danger'>
           <Button variant="danger">Danger</Button>
           <Marquee className='ms-4' speed={40}>
           Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
</Marquee>
           </div>

          
        </Container>
    );
};

export default Header;