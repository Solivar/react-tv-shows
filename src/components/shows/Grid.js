import React from 'react';
import { Link } from "react-router-dom";

import styles from './Grid.module.scss'

const Grid = ({ shows }) => {
  return(
    <ul className={styles['shows-grid']}>
      {shows.map((show) => {
        return <li key={show.tvMazeId}>
          <Link to={`show/${show.tvMazeId}`}>
            <img src={show.img} alt={show.name}/>
          </Link>
        </li>
      })}
    </ul>
  );
}

export default Grid;
