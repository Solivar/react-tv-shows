import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";

import axios from 'axios';

import Loader from '../Loader';

const Show = ({ shows }) => {
  let { id } = useParams();
  const history = useHistory();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const showExists = () => {
      const exists = shows.find(show => show.tvMazeId === parseInt(id));

      return !!exists;
    }

    const fetchData = async () => {
      console.log(id);

      try {
        const res = await axios.get(`http://api.tvmaze.com/shows/${id}?embed=cast`);
        const { name, summary } = res.data;

        const show = {
          name,
          summary,
        };

        setShow(show);
        setIsLoading(false);
      } catch (error) {
        history.push('/');
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
  } else {
    return (
      <div>
        <h2>{show.name}</h2>
        <p>{ stripHtml(show.summary)}</p>
      </div>
    );
  }
}

export default Show;
