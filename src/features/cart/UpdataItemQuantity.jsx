import Button from '../../ui/Button.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {
  decreaseQuantity,
  getQuantity,
  increaseQuantity,
} from './cartSlice.jsx'

function UpdataItemQuantity({ pizzaId }) {
  const dispatch = useDispatch()
  const quantity = useSelector(getQuantity(pizzaId))
  function handleIncrement() {
    dispatch(increaseQuantity(pizzaId))
  }
  function handleDecrement() {
    dispatch(decreaseQuantity(pizzaId))
  }
  return (
    <div className={`flex items-center gap-2 md:gap-4`}>
      <Button type={'round'} onClick={handleIncrement}>
        +
      </Button>
      {quantity}
      <Button type={'round'} onClick={handleDecrement}>
        -
      </Button>
    </div>
  )
}

export default UpdataItemQuantity
