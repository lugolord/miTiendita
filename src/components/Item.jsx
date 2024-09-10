/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Item ({ item }) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.category}
          </Card.Text>
          <Card.Text>
            {item.description}
          </Card.Text>
        </Card.Body>
        <Button variant="dark">more info</Button>
      </Card>
    </Col>
  )
}

export default Item
