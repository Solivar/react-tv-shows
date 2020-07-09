import React from 'react';
import { Link } from "react-router-dom";

const Grid = () => {
  // http://api.tvmaze.com/shows/269

  return(
    <div>
      <Link to="show/269">
        <img src="http://static.tvmaze.com/uploads/images/medium_portrait/48/122213.jpg" alt="Peaky Blinders"/>
      </Link>

      <Link to="show/1871">
        <img src="http://static.tvmaze.com/uploads/images/medium_portrait/211/528026.jpg" alt="Mr. Robot"/>
      </Link>
    </div>
  );
}

export default Grid;
