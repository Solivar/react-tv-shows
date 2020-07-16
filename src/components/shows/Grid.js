import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Sorter from './Sorter';
import styles from './Sorter.module.scss';

const Grid = ({ showsData }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    setShows(showsData);
  }, [ showsData ]);

  const sortAlphabetically = (shows) => {
    const sortedShows = [...shows];

    return sortedShows.sort((a, b) => a.name > b.name ? 1 : -1);
  }

  const handleOption = (option) => {
    switch(parseInt(option)) {
      case 1:
        setShows(sortAlphabetically(showsData));

        break;

      case 2:
        setShows(sortAlphabetically(showsData).reverse());

        break;

      default:
        setShows([...showsData]);
    }
  }

  return(
    <div>
      <div className={styles.sorter}>
        <span className="mr">Sort by:</span>
        <Sorter onChangeOption={handleOption}/>
      </div>
      <ul className="grid">
        {shows.map((show) => {
          return(<li key={show.tvMazeId}>
            <Link to={`show/${show.tvMazeId}`}>
              <img src={show.img} alt={show.name}/>
            </Link>
          </li>)
        })}
      </ul>
    </div>
  );
}

export default Grid;
