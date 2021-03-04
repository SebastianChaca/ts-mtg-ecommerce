import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { useActions } from '../../hooks/ReduxHooks/useActions';
interface MenuD {
  username: string;
}
const MenuDrop: React.FC<MenuD> = ({ username }) => {
  const { logOut } = useActions();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <div className='menudrop'>
          <BiUserCircle className='login' />
          {username}
        </div>
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={logOut}>
          <RiLogoutCircleLine className='login' />
          LogOut
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuDrop;
