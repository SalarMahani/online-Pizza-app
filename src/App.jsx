import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './ui/Home.jsx'
import Menu, { menuLoader } from './features/menu/Menu.jsx'
import Cart from './features/cart/Cart.jsx'
import CreateOrder, { action } from './features/order/CreateOrder.jsx'
import Order, { orderLoader } from './features/order/Order.jsx'
import AppLayout from './ui/AppLayout.jsx'
import Error from './ui/Error.jsx'
import { action as updateOrderAction } from './features/order/UpdateOrder.jsx'
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: action,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
        action: updateOrderAction,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
