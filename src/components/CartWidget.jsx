import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useCartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'

function CartWidget () {
  const { cart } = useCartContext()

  return (
    <Button variant="primary" as={Link} to='/cart'>
      Cart <Badge bg="secondary">{cart.length}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  )
}

export default CartWidget