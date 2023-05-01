

import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInside from './EditorInside';

const News = () => {
    const  news = useLoaderData()
    const {title, category_id, image_url, details} = news;
    return (
        <div className='my-5'>
            <h2>Dragon News</h2>
            <Card>
      <Card.Img variant="top" src={image_url}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
<Link to={`/category/${category_id}`}><Button variant='danger'><FaArrowLeft /> All news in this category</Button></Link>
      </Card.Body>
    </Card>
    <EditorInside />
        </div>
    );
};

export default News;