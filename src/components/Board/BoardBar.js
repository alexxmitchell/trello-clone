import React from 'react';
import IconButton from '../IconButton';
import ViewColumnOutlinedIcon from '@material-ui/icons/ViewColumnOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import './BoardBar.css';

function BoardBar({boardTitle}) {
  return (
    <div className="board__bar">
      {/* wrapping row of things */}
      <IconButton Icon={ViewColumnOutlinedIcon} title="Board"/>
      <h2>{boardTitle}</h2>
      <IconButton Icon={StarBorderOutlinedIcon} />
      <span>|</span>
      <IconButton title="Personal" />
      <span>|</span>
      <IconButton Icon={LockOutlinedIcon} title="Private" />
      <span>|</span>
      {/* user */}
      <IconButton title="Invite" />

      <div className="board__bar-right">
        <IconButton Icon={RoomServiceOutlinedIcon} title="Butler"/>
        <IconButton Icon={MoreHorizOutlinedIcon} title="Show Menu"/>
      </div>
    </div>
  )
}

export default BoardBar;
