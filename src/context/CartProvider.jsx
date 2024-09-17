/* eslint-disable react/prop-types */
import { cartContext } from './cartContext'
import { useState } from 'react'

function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (item) => setCart([...cart, item])

  const getTotal = () => {
    const pricesOnly = cart.map(prod => prod.price*prod.quantity) // [1000, 128934984, 123]
    
    const total = pricesOnly.reduce((acc, current) => acc + current, 0)

    return total
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, getTotal }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider
