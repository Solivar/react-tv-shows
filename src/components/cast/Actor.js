import React from 'react';

import styles from './Actor.module.scss'

const Actor = ({ actor }) => {
  let image = actor.character.image ? actor.character.image.medium : null;

  if (!image) {
    image = actor.person.image ? actor.person.image.medium : null;
  }

  const style = {
    backgroundImage: image ? `url(${image})` : '',
  }
  return(
    <div className={styles.container} style={style}>
      <div className={styles.character}>
        { !image &&
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
