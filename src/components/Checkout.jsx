import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { useCartContext } from '../context/cartContext'
import { createOrder } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'

function Checkout () {
  const { cart, getTotal } = useCartContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const phone = e.target.phone.value
    const email = e.target.email.value

    const order = {
      buyer: { name, phone, email },
      items: cart,
      date: serverTimestamp(),
      total: getTotal()
    }

    createOrder(order)
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3>Resumen de compra:</h3>
          <ListGroup>
            {cart.map(item => <ListGroup.Item key={item.id}>{item.name} x {item.quantity}</ListGroup.Item>)}
          </ListGroup>
        </Col>
        <Col>
          <h3>Datos para la compra:</h3>
          <Form className='border rounded p-3' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                Well never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button variant="outline-success" type="submit">
              Finalizar compra 🎉
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Checkout
