import { pubsub } from './pubsub.js';

export const actorsForm = {
  render: (container) => {
    let template = document.getElementById('actorFormTemplate');
    let div = template.content.cloneNode(true);
    div.querySelector('button').addEventListener('click', actorsForm.add);
    container.appendChild(div);
  },
  add: (e) => {
    e.preventDefault();
    let input = document.querySelector('.actor-form input');
    let name = input.value;
    input.value = ''; //clear the form

    console.info(`AF: Added ${name}`);
    pubsub.publish('actorAdded', name);
  },
};
