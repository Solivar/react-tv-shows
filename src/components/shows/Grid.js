import React from 'react';
import { Link } from "react-router-dom";

const Grid = ({ shows }) => {
  return(
    <ul className="grid">
      {shows.map((show) => {
        return(<li key={show.tvMazeId}>
          <Link to={`show/${show.tvMazeId}`}>
            <img src={show.img} alt={show.name}/>
          </Link>
        </li>)
      })}
    </ul>
  );
}

export default Grid;
