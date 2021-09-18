import { stats } from './stats.js';
import { movies } from './movies.js';
import { moviesForm } from './moviesForm.js';
import { actors } from './actors.js';
import { actorsForm } from './actorsForm.js';

window.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const aside = document.querySelector('aside');

  //Using the render function of the stats el to render it to the HTML
  stats.render(aside);

  //Using the render function of the movies elements to render them to the HTML
  movies.render(main);
  moviesForm.render(aside);

  //Using the render function of the actors elements to render them to the HTML
  actors.render(main);
  actorsForm.render(aside);
});
