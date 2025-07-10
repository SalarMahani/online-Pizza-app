// import { useState } from 'react'

// https://uibakery.io/regex-library/phone-number
import Button from '../../ui/Button.jsx'

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  )

import { Form, redirect, useActionData, useNavigation } from 'react-router-dom'
import cart from '../cart/Cart.jsx'
import { useRef, useState } from 'react'
import { createOrder } from '../../services/apiRestaurant.js'
import { useSelector } from 'react-redux'
import EmptyCart from '../cart/EmptyCart.jsx'
import store from '../../store.jsx'
import { getTotalCartPrice, resetCart } from '../cart/cartSlice.jsx'
import { formatCurrency } from '../../utils/helpers.js'

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ]

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false)
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const formError = useActionData()

  const cart = useSelector((state) => state.cart.cart)
  const user = useSelector((state) => state.user.userName)

  const pizzaPrice = useSelector(getTotalCartPrice)
  let priority = 0
  if (withPriority) {
    priority = pizzaPrice * 0.2
  }
  const total = pizzaPrice + priority
  if (!cart.length) {
    return <EmptyCart />
  }
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={user}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formError?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formError.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting
              ? 'Placing order....'
              : `Order now ${formatCurrency(total)}`}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export async function action({ request }) {
  // console.log('🔥')
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const order = {
    ...data,
    priority: data.priority === 'true',
    cart: JSON.parse(data.cart),
  }
  const error = {}
  if (!isValidPhone(order.phone)) {
    error.phone = 'please enter a valid phone number'
    return error
  }
  const newId = await createOrder(order)
  store.dispatch(resetCart())
  return redirect(`/order/${newId.id}`)
}

export default CreateOrder
