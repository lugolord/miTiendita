import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../firebase/db'

function ItemListContainer () {
  const [items, setItems] = useState([])
  const { id } = useParams()

  useEffect(() => {
      getProducts(setItems)
  }, [id])

  return (
    <Container>
      <Row xs={1} md={2} lg={4} className="g-4">
        <ItemList items={items} />
      </Row>
    </Container>
  )
}

export default ItemListContainer
