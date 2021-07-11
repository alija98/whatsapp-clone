import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVert from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or state new chat" type="text"></input>
        </div>
      </div>
      <div className="sidebar__chats">
        <h3>Sidebar Chat</h3>
        <h3>Sidebar Chat</h3>
        <h3>Sidebar Chat</h3>
        <h3>Sidebar Chat</h3>
        <h3>Sidebar Chat</h3>
        <h3>Sidebar Chat</h3>
        <h3>Sidebar Chat</h3>
        <h3>Sidebar Chat</h3>
        <h3>Sidebar Chat</h3>
      </div>
    </div>
  );
}

export default Sidebar;
