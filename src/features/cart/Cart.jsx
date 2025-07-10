import { Link } from 'react-router-dom'
import CartItem from './CartItem.jsx'
import LinkButton from '../../ui/LinkButton.jsx'
import Button from '../../ui/Button.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { resetCart } from './cartSlice.jsx'
import EmptyCart from './EmptyCart.jsx'

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
]

function Cart() {
  const { cart } = useSelector((state) => state.cart)
  // console.log('cart', cart)
  // const cart = fakeCart
  const user = useSelector((state) => state.user.userName)

  const dispatch = useDispatch()

  function handleReset() {
    dispatch(resetCart())
  }

  if (cart.length === 0) {
    return <EmptyCart />
  }
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {user}</h2>
      {cart.length !== 0 ? (
        <ul className="mt-3 divide-y divide-stone-200 border-b">
          {cart.map((item) => (
            <CartItem item={item} key={item.pizzaId} />
          ))}
        </ul>
      ) : (
        <>
          <br />
          <p>order sth baby ...</p>
        </>
      )}

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={handleReset}>
          Clear cart
        </Button>
      </div>
    </div>
  )
}

export default Cart
