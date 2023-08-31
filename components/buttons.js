import renderToDom from '../utils/renderToDom';

const getJokeBtn = () => {
  const domString = '<button type="button" class="btn btn-light">Get Joke</button>';
  renderToDom('#initial-btn', domString);
};

const getPunchlineBtn = () => {
  const domString = '<button type="button" class="btn btn-light">Get Punchline</button>';
  renderToDom('#punchline-btn', domString);
};

const getNewJoke = () => {
  const domString = '<button type="button" class="btn btn-light">Get New Joke</button>';
  renderToDom('#reset-btn', domString);
};

export { getJokeBtn, getPunchlineBtn, getNewJoke };
