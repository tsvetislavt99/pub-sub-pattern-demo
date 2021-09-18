import { pubsub } from './pubsub.js';

export const actors = {
  list: [],
  render: (container) => {
    const template = document.querySelector('#actorListTemplate');
    const div = template.content.cloneNode(true);
    container.appendChild(div);

    pubsub.subscribe('actorAdded', actors.actorAdded);
  },
  actorAdded: (name) => {
    console.info(`A: I heard a new actor named ${name} was added`);
    const tempList = new Set(actors.list);
    tempList.add(name);
    actors.list = Array.from(tempList).sort();

    console.info(`A: I updated the actors list :)`);
    pubsub.publish('actorsUpdated', actors.list);

    let ul = document.querySelector('.actor-container ul');
    ul.innerHTML = '';
    let df = document.createDocumentFragment();
    actors.list.forEach((name) => {
      let li = document.createElement('li');
      li.innerText = name;
      df.appendChild(li);
    });
    ul.appendChild(df);
  },
};
