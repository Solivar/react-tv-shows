import React from 'react';

import styles from './Actor.module.scss'

const Actor = ({ actor }) => {
  const style = {
    backgroundImage: actor.character.image ? `url(${actor.character.image.medium})` : '',
  }
  return(
    <div className={styles.container} style={style}>
      <div className={styles.character}>
        { !actor.character.image &&
          <p className={styles['no-image']}>No image</p>
        }
        <p className={styles.name}>{actor.character.name}</p>
      </div>
      <div className={styles.actor}>
        <p className={styles.name}>{actor.person.name}</p>
      </div>
    </div>
  );
}

export default Actor;
