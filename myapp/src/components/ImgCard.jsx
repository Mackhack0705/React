import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/cards.css'

const ImgCard = (val) => {
  return (
    <div className='box'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={val.imgurl} />
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ImgCard
