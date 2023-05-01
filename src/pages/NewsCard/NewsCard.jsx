
import moment from 'moment/moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye,  FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

import { Link } from 'react-router-dom';


const NewsCard = ({news}) => {
    const {title,_id, rating, total_view, image_url, details, author} = news;
    return (
        <Card className="mb-5">
        <Card.Header className='d-flex align-items-center'>
           <Image style={{height:'40px'}} src={author.img} roundedCircle />
           <div className='ps-3  flex-grow-1  '>
            <p className='mb-0'>{author.name}</p>
           
            <p>{moment(author.published_date).format('yyyy-mm-do')}</p>
            </div>
            <div>
                <FaRegBookmark />
               <FaShareAlt />
           </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img  src={image_url} />
          <Card.Text>
           {details.length < 250? <>{details}</>:<>{details.slice(0, 250)}......<Link className=' text-decoration-none text-danger ' to={`/news/${_id}`}>Read More</Link></>}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
            <div className='flex-grow-1'>
            <Rating
  placeholderRating={rating.number}
  emptySymbol={<FaRegStar/>}
  readonly
  placeholderSymbol={<FaStar/>}
  fullSymbol={<FaStar/>}
/>
                <span>{rating.number}</span>
            </div> 
            <div>
                <FaEye className='mx-2'/>{total_view}
                </div></Card.Footer>
      </Card>
    );
};

export default NewsCard;