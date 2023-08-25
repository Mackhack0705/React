import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/cards.css';


const ImgCard = (val) => {
  const [Count,setCount] = useState(0);
  const handleClick=() => {
    // console.log("Button Clicked",Count);
    setCount(Count+1)
  }
  return (
    <div className='box'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={val.imgurl} />
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>{val.desc}</Card.Text>
        <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
        {Count}
      </Card.Body>
    </Card>
    </div>
  )
}

export default ImgCard
