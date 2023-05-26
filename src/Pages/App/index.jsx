import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import '../../App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import Login from '../Login'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'


const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/Ecommerce-React/', element: <Home />},
    { path: '/electronics', element: <Home />},
    { path: '/clothes', element: <Home />},
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-orders/:id', element: <MyOrder />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/sign-in', element: <Login />},
    { path: '/*', element: <NotFound />},
  ]);
  return routes;
}

function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
          <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
