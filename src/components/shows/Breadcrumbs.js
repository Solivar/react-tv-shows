import React from 'react';

import { Link } from "react-router-dom";

const Breadcrumbs = ({ showName }) => {
  return(
    <nav >
      <Link to="/">Shows</Link>
      <span className="mr ml font-bold">/</span>
      <span className="link-active">{showName}</span>
    </nav>
  );
}

export default Breadcrumbs;
