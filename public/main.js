import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import htmlStructure from '../utils/htmlStructure';
import { getJokeBtn } from '../components/buttons';
import domEvents from '../components/events/domEvents';

const init = () => {
  htmlStructure();
  getJokeBtn();
  domEvents();
};

init();
