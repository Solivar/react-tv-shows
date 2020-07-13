import React from 'react';

import Actor from './Actor';

const CastGrid = ({ actors }) => {
  return(
    <ul className="grid">
      {actors.map((actor) => {
        return(
          <li key={actor.character.id}>
            <Actor actor={actor}/>
          </li>
        )
      })}
    </ul>
  );
}

export default CastGrid;
