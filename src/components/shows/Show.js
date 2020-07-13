import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";

import axios from 'axios';

import CastGrid from '../cast/Grid';
import Loader from '../Loader';
import styles from './Show.module.scss'

const Show = ({ shows }) => {
  let { id } = useParams();
  const history = useHistory();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const showExists = () => {
      const exists = shows.find(show => show.tvMazeId === parseInt(id));

      return !!exists;
    }

    const fetchData = async () => {
      console.log(id);

      try {
        const res = await axios.get(`http://api.tvmaze.com/shows/${id}?embed=cast`);
        const { name, summary, genres } = res.data;

        const show = {
          name,
          summary,
          genres,
          cast: res.data._embedded.cast
        };

        setShow(show);
      } catch (error) {
        console.log(error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    if (showExists()) {
      fetchData();
    } else {
      history.push('/');
    }
  }, [id, shows, history])

  const stripHtml = (text) => {
    const elem = document.createElement('div');
    elem.innerHTML = text;

    return elem.textContent || elem.innerText || '';
  }

  if (isLoading) {
    return <Loader/>
  } else if(hasError) {
    return <p>Something went wrong. Try again later</p>
  } else {
    return (
      <div>
        <h2>{show.name}</h2>
        <p>{stripHtml(show.summary)}</p>
        { show.genres.length &&
          <ul className={styles.genres}>
            <strong>Genres: </strong>
            {show.genres.map((genre) => {
              return(
                <li key={genre}>
                  {genre}
                </li>
              )
            })}
          </ul>
        }
        <h2>Cast</h2>
        <CastGrid actors={show.cast} />
      </div>
    );
  }
}

export default Show;
