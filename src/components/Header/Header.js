import React from 'react';
import IconButton from '../IconButton';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "./Header.css";
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header>
   
      <div className="header__section header__left">
        {/* iconbuttons */}
        <IconButton Icon={AppsIcon} title=''/>
        <IconButton Icon={HomeIcon} title=''/>
        <IconButton Icon={DashboardIcon} title='Boards'/>
        
     
        {/* search */}
        <span className="header__icon-container">
        <SearchIcon />
        <input className="header__searchBar" type="text"></input>
        </span>
        
      </div>
      <Logo className="header__logo" />
      

      <div className="header__section header__right">
      <IconButton Icon={AddIcon} title=''/>
      <IconButton Icon={InfoIcon} title=''/>
      <IconButton Icon={NotificationsIcon} title=''/>
      {/* userIcon */}
        
      </div>
    </header>
  )
}

export default Header;
