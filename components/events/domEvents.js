import getJoke from '../../api/jokeAPI';
import { showDelivery, showSetup } from '../../pages/jokes';
import clearDom from '../../utils/clearDom';
import htmlStructure from '../../utils/htmlStructure';
import { getJokeBtn, getNewJoke, getPunchlineBtn } from '../buttons';

const domEvents = () => {
  getJoke().then((joke) => {
    document.querySelector('#initial-btn').addEventListener('click', () => {
      showSetup(joke);
      document.querySelector('#initial-btn').innerHTML = '';
      getPunchlineBtn();
    });
    document.querySelector('#punchline-btn').addEventListener('click', () => {
      showDelivery(joke);
      document.querySelector('#punchline-btn').innerHTML = '';
      getNewJoke();
    });
  });
  document.querySelector('#reset-btn').addEventListener('click', () => {
    clearDom();
    htmlStructure();
    getJokeBtn();
    domEvents();
  });
};

export default domEvents;
