import { pubsub } from './pubsub.js';

export const stats = {
  render: (container) => {
    let d = document.createElement('div');
    d.className = 'stats-container';
    container.appendChild(d);
    let pm = document.createElement('p');
    pm.className = 'movie-count';
    pm.innerHTML = `0 movies in the list`;
    d.appendChild(pm);
    let pa = document.createElement('p');
    pa.className = 'actor-count';
    pa.innerHTML = `0 actors in the list`;
    d.appendChild(pa);

    pubsub.subscribe('moviesUpdated', stats.moviesUpdated);

    pubsub.subscribe('actorsUpdated', stats.actorsUpdated);
  },
  moviesUpdated: (list) => {
    console.info(
      `S: I hear that movies list length has been updated to ${list.length}`
    );
    document.querySelector(
      '.movie-count'
    ).textContent = `${list.length} movies in the list`;
  },
  actorsUpdated: (list) => {
    console.info(
      `S: I hear that the actors list length has been updated to ${list.length}`
    );
    document.querySelector(
      '.actor-count'
    ).textContent = `${list.length} actors in the list`;
  },
};
