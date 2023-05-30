import { NavLink } from "react-router-dom";
import { useState } from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Navbar() {
    const activeStyle = 'underline underline-offset-4';
    const { count } = useContext(ShoppingCartContext);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        {to: '/', text: 'Shop'},
        {to: '/all', text: 'All'},
        {to: '/clothes', text: 'Clothes'},
        {to: '/electronics', text: 'Electronics'},
    ];

    const userLinks = [
        {to: '/my-orders', text: 'My Orders'},
        {to: '/my-account', text: 'My Account'},
        {to: '/login', text: 'Login'},
    ];
    
    return (
        <nav className="flex flex-wrap justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
            
            <div className="flex items-center">
                <NavLink to="/" className="text-lg font-bold text-gray-800">
                My App
                </NavLink>
            </div>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block menu-options`}>
                <ul className="flex items-center space-x-4">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                        <NavLink
                            to={link.to}
                            className="text-gray-600 hover:text-gray-800"
                            activeclassname="text-gray-800 font-bold"
                        >
                            {link.text}
                        </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

        <div className="flex items-center">
            <ul className="flex items-center space-x-4">
                {userLinks.map((link) => (
                <li key={link.to}>
                    <NavLink
                        to={link.to}
                        className="text-gray-600 hover:text-gray-800"
                        activeclassname="text-gray-800 font-bold"
                    >
                        {link.text}
                    </NavLink>
                </li>
                ))}

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

            <div className="absolute top-0 right-0 md:hidden ml-4">
            <button 
                onClick={toggleMenu}
                className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-800 hover:border-gray-800">
                <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
            </div>
        </div>
        {/* <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
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
        </nav> */}
    </nav>

    );
}

export default Navbar;