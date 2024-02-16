import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><a href='#' style={{textDecoration:'none', color:'#0065a1'}}>Minha conta</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='#' style={{textDecoration:'none', color:'#0065a1'}}> Documento Pedigree</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='#' style={{textDecoration:'none', color:'#0065a1'}} >Kennel Club</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='/' style={{textDecoration:'none', color:'#0065a1'}} >Tenha um cachorro de raça</a></MenuItem>
      </Menu>
    </div>
  );
}

export default NavBar;