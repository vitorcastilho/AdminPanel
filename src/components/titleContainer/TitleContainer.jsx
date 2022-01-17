import React from "react";
import { Link } from "react-router-dom";
import "./titleContainer.css";

export default function TitleContainer({ title, linkTo, create, style }) {
  return (
    <div className={`titleContainer ${style && "titlePadding"}`}>
      <h1 className="title">{title}</h1>
      {linkTo && (
        <Link to={linkTo}>
          <button className="addButton">Create New {create}</button>
        </Link>
      )}
    </div>
  );
}
