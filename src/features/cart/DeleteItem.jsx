import Button from '../../ui/Button.jsx'
import { useDispatch } from 'react-redux'
import { removeItem } from './cartSlice.jsx'

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch()
  function handleRemove() {
    dispatch(removeItem(pizzaId))
  }
  return (
    <Button type="small" onClick={handleRemove}>
      Delete
    </Button>
  )
}

export default DeleteItem
