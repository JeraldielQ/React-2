import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div>
      <h2 className="notfound-h2">404 - Not Found</h2>
      <p className="notfound-p">Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to the home page</Link>
    </div>
  );
}

export default NotFound;
