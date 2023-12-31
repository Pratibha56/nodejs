import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const ImageCard = (props)=> {
  const[count,setcount]= useState(10);
  const HandleClick =() => {
    console.log("button clicked");
  }

    return (
      <div>
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imgurl} />
        <Card.Body>
          <Card.Title>{ props.title}</Card.Title>
          <Card.Text>
          {props.desc}
          </Card.Text>
          <Button  onClick={HandleClick} variant="primary">Go somewhere</Button>
          {count}
        </Card.Body>
      </Card>
  
      </div>
    )
  }
  
  export default ImageCard