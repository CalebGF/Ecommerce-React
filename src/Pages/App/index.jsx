import { useRoutes, BrowserRouter } from 'react-router-dom'
import '../../App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import Login from '../Login'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import Layout from '../../Components/Layout'


const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/sign-in', element: <Login />},
    { path: '*', element: <NotFound /> }
  ]);
  return routes;
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
        <Navbar />
    </BrowserRouter>
  )
}

export default App
