import React from "react";
import "./topbar.css";

import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">AdminPanel</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEfw-oJUnmERw/profile-displayphoto-shrink_200_200/0/1630189966113?e=1647475200&v=beta&t=kyPiThTWcUzWJ_LXidL7RsBOvdDtrDFod1I5fEM-JMk"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
