/* eslint-disable react/prop-types */
import ItemCount from './ItemCount'

function ItemDetail ({ detail }) {
  return (
    <div>
      <p>{detail?.name}</p>
      <ItemCount prod={detail} />
    </div>
  )
}

export default ItemDetail
