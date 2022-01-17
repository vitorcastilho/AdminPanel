import React from "react";
import "./user.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import TitleContainer from "../../components/titleContainer/TitleContainer";

export default function User() {
  return (
    <div className="user">
      <TitleContainer title="Edit User" linkTo="/newUser" create="User"/>
     
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQEfw-oJUnmERw/profile-displayphoto-shrink_200_200/0/1630189966113?e=1647475200&v=beta&t=kyPiThTWcUzWJ_LXidL7RsBOvdDtrDFod1I5fEM-JMk"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Vitor Castilho</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">vitorcastilho</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">20.11.1983</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+55 48 9 9999 9999</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">vitorcastilho@email.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Santa Catarina | BR</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="vitorcastilho"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Vitor Castilho"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+55 48 9 9999 9999"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>E-mail</label>
                <input
                  type="text"
                  placeholder="vitorcastilho@email.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Santa Catarina | BR"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQEfw-oJUnmERw/profile-displayphoto-shrink_200_200/0/1630189966113?e=1647475200&v=beta&t=kyPiThTWcUzWJ_LXidL7RsBOvdDtrDFod1I5fEM-JMk"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
