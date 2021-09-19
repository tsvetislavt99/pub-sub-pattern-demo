import { eventBus } from './eventBus.js';

export const movies = {
  list: [],
  render: (container) => {
    let template = document.getElementById('movieListTemplate');
    let div = template.content.cloneNode(true);
    container.appendChild(div);
    //let ul = document.querySelector('.movie-container ul');

    eventBus.subscribe('movieAdded', movies.movieAdded);
  },
  movieAdded: (title) => {
    console.info(`M: I hear that ${title} was added`);
    //Using Set to make sure there are no duplicates
    let tempList = new Set(movies.list);
    tempList.add(title);
    movies.list = Array.from(tempList).sort();

    console.info(`M: I updated the list`);
    eventBus.publish('moviesUpdated', movies.list);

    //Update the ui
    let ul = document.querySelector('.movie-container ul');
    ul.innerHTML = '';
    let df = document.createDocumentFragment();
    movies.list.forEach((title) => {
      let li = document.createElement('li');
      li.innerText = title;
      df.appendChild(li);
    });
    ul.appendChild(df);
  },
};
