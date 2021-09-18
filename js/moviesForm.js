import { pubsub } from './pubsub.js';

export const moviesForm = {
  render: (container) => {
    let template = document.getElementById('movieFormTemplate');
    let div = template.content.cloneNode(true);
    div.querySelector('button').addEventListener('click', moviesForm.add);
    container.appendChild(div);
  },
  add: (e) => {
    e.preventDefault();
    let input = document.querySelector('.movie-form input');
    let title = input.value;
    input.value = ''; //clear the form

    console.info(`MF: Added ${title}`);
    pubsub.publish('movieAdded', title);
  },
};
