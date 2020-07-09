import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import axios from 'axios';


const Show = () => {
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(`http://api.tvmaze.com/shows/${id}?embed=cast`);

      console.log(data);
    }

    fetchData();
  }, [])

  return(
    <div>
      <p>kekw {id}</p>
    </div>
  );
}

export default Show;
