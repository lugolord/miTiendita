import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ItemList from './ItemList'

function ItemListContainer () {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://66d63577f5859a704268a79b.mockapi.io/products')
      .then(res => res.json())
      .then(res => setItems(res))
  }, [])

  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        <ItemList items={items} />
      </Row>
    </Container>
  )
}

export default ItemListContainer
