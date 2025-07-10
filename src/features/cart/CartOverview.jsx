import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getTotalCartPrice, getTotalPizza } from './cartSlice.jsx'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'

function CartOverview() {
  // const dispatch = useDispatch()
  const totalPrice = useSelector(getTotalCartPrice)
  const totalPizza = useSelector(getTotalPizza)
  // const getTotalCartPrice = useSelector(getTotalCartPrice)
  // const getTotalCartPrice = useSelector(getTotalCartPrice)
  return (
    <div
      className={`flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase 
      sm:px-6 md:text-base`}
    >
      <p className={`space-x-4 font-semibold text-stone-300 sm:space-x-6`}>
        <span>cart overview: {totalPizza} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to={'/cart'}>Open cart &rarr;</Link>
    </div>
  )
}

export default CartOverview
