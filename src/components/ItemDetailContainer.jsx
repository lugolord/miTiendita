import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSingleProduct } from '../firebase/db'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {
  const [detail, setDetail] = useState()
  const { id } = useParams()
  
  useEffect(() => {
      getSingleProduct(id, setDetail)
  }, [id])

  return (
    <ItemDetail detail={detail} />
  )
}

export default ItemDetailContainer
