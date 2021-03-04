import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import logodos from '../../assets/logodos.png';
import { AiFillCloseSquare } from 'react-icons/ai';
import { useTypedSelector } from '../../hooks/ReduxHooks/useTypedSelector';
import { useActions } from '../../hooks/ReduxHooks/useActions';

const Sidebar = () => {
  const { isLogin, jwt, username } = useTypedSelector((state) => state.login);
  const { showSidebar } = useTypedSelector((state) => state.sidebar);
  const { handleSidebarAction, logOut } = useActions();
  const [showSide, setShow] = useState(false);

  const handleSidebar = () => {
    setShow(!showSidebar);
    handleSidebarAction(showSide);
  };
  const content = (
    <div
      className={showSidebar ? `backdrop` : ''}
      onClick={() => handleSidebar()}
    >
      <aside className={`sidebar ${showSidebar && `show-sidebar`}`}>
        <div className='sidebar-btn-close-container'>
          <button className='sidebar-btn-close' onClick={() => handleSidebar}>
            <AiFillCloseSquare className='sidebar-btn-close-icon' />
          </button>
        </div>

        <img src={logodos} alt='vintage tech logo' className='logo-sidebar' />
        <ul>
          <div>
            {isLogin && jwt && (
              <li>
                <h3 className='username-sidebar'>
                  <strong>{username}</strong>
                </h3>
              </li>
            )}
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

          <div>
            <li>
              {isLogin && jwt ? (
                <Link to='/' onClick={() => logOut()}>
                  Sign out
                </Link>
              ) : (
                <Link to='/login'>Login</Link>
              )}
            </li>
          </div>
        </ul>
      </aside>
    </div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('sidebar-portal')!
  );
};
export default Sidebar;
