import React from 'react'

function IconButton({Icon, title}) {

  function openModal(){
    console.log("clicked on button")
  }
  return (
    <div className="header__icon-container" onClick={openModal}>
      {Icon && <Icon className="header__iconButton"/>}
      <span>{title}</span>
    </div>
  )
}

export default IconButton
