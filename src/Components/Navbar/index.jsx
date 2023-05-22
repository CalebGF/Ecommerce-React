import { NavLink } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Navbar() {
    const activeStyle = 'underline underline-offset-4';
    const { count } = useContext(ShoppingCartContext);
    
    return (
        <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                        to='/'
                        className={({isActive}) =>
                            isActive ? activeStyle : ''
                        }
                    >
                        Shop
                    </NavLink>
                </li> 

                <li> 
                    <NavLink 
                        to='/all'
                        className={({isActive}) =>
                            isActive ? activeStyle : ''
                        }
                    >
                        All
                    </NavLink>
                </li>
                    <NavLink 
                        to='/clothes'
                        className={({isActive}) =>
                            isActive ? activeStyle : ''
                        }
                    >
                        Clothes
                    </NavLink>
                <li> 
                    <NavLink 
                        to='/electronics'
                        className={({isActive}) =>
                            isActive ? activeStyle : ''
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
          
            </ul>

            <ul className="flex items-center gap-3">
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({isActive}) =>
                            isActive ? activeStyle : ''
                        }
                    >
                        My Orders
                    </NavLink>
                </li>

                <li>    
                    <NavLink 
                        to='/my-account'
                        className={({isActive}) =>
                            isActive ? activeStyle : ''
                        }
                    >
                        My Account
                    </NavLink>
                </li>

                <li>    
                    <NavLink 
                        to='/login'
                        className={({isActive}) =>
                            isActive ? activeStyle : ''
                        }
                    >
                        Login
                    </NavLink>
                </li>
                
                <li>
                    <NavLink 
                        to='/cart'
                        className={({isActive}) =>
                            isActive ? activeStyle : ''
                        }
                    >
                        Cart
                        <ShoppingBagIcon className='ml-2' />
                        {count > 0 && 
                            <span className='text-xs font-semibold bg-black text-white rounded-full px-2 py-0.5'>
                                {count}
                            </span>
                        }
                    </NavLink>
                    
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;