/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useCartContext } from '../context/cartContext'

function ItemCount ({ prod }) {
  const [count, setCount] = useState(1)
  const { addToCart } = useCartContext()
  
  const add = () => setCount(count + 1)
  const restar = () => setCount(count - 1)

  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={restar}>-</button>
      <button onClick={() => addToCart({...prod, quantity: count})}>add to cart</button>
    </div>
  )
}

export default ItemCount
