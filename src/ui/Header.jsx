import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/searchOrder.jsx'
import Username from '../features/user/Username.jsx'

function Header() {
  return (
    <header
      className={`flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-4 uppercase sm:px-6`}
    >
      <Link to={'/'} className={`tracking-widest`}>
        pizza react router v6+{' '}
      </Link>

      <SearchOrder />
      <Username />
    </header>
  )
}

export default Header
