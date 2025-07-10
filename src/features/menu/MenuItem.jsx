import { formatCurrency } from '../../utils/helpers.js'
import Button from '../../ui/Button.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, getQuantity } from '../cart/cartSlice.jsx'
import DeleteItem from '../cart/DeleteItem.jsx'
import UpdataItemQuantity from '../cart/UpdataItemQuantity.jsx'

function MenuItem({ pizza }) {
  const dispatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza
  const quantity = useSelector(getQuantity(id))
  const inCart = quantity > 0
  function handleClick() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: 1 * unitPrice,
    }
    dispatch(addItem(newItem))
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500 uppercase">
              Sold out
            </p>
          )}
          {inCart && (
            <div className={`flex items-center gap-2 sm:gap-4`}>
              <UpdataItemQuantity pizzaId={id} />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {soldOut || inCart ? (
            ''
          ) : (
            <Button type="small" onClick={handleClick}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  )
}
export default MenuItem
