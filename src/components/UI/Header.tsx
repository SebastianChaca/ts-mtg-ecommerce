import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';

import logodos from '../../assets/logodos.png';
import CartLink from '../Cart/CartLink';
import { useTypedSelector } from '../../hooks/ReduxHooks/useTypedSelector';
import { useActions } from '../../hooks/ReduxHooks/useActions';
import MenuDrop from './MenuDrop';
import MenuGrow from './MenuGrow';
export default function Header() {
  const [showSide, setShow] = useState(false);
  const { jwt, username, isLogin } = useTypedSelector((state) => state.login);
  const { handleSidebarAction } = useActions();
  const handleSidebar = () => {
    setShow(!showSide);
    handleSidebarAction(showSide);
  };
  return (
    <header className='header'>
      <nav className='nav-responsive'>
        <ul>
          <div>
            <div>
              <button className='header-btn' onClick={() => handleSidebar()}>
                <span />
                <span />
                <span />
              </button>
            </div>

            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
          </div>
          <div className='logo-responsive-container'>
            <img
              src={logodos}
              alt='magic logo'
              className='logo logo-responsive'
            />
          </div>
          <div>
            {isLogin && jwt && (
              <li>
                <MenuDrop username={username} />
              </li>
            )}
            <li>
              {!isLogin && !jwt && (
                <Link to='/login'>
                  <BiUserCircle className='login' />
                  Login
                </Link>
              )}
            </li>
            <div className='cart-link-responsive'>
              <CartLink />
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}
