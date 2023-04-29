import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../assets/bg.png'

const RightNave = () => {
    return (
        <div>
            <h5>Login With</h5>
               <Button variant="outline-primary" className='mb-2'><FaGoogle/> Login With Google</Button>
      <Button variant="outline-secondary"><FaGithub/> Login With GitHub</Button>
      <div className='mb-4'>
        <h4>Find us on</h4>
        <ListGroup>
      <ListGroup.Item><FaFacebook />Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter />Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram />Instagram</ListGroup.Item>
    </ListGroup>
      </div>
      
      <Qzone />
    <div>
        <img src={bg} alt="" />
    </div>
        </div>
    );
};

export default RightNave;