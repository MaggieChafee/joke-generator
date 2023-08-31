import renderToDom from '../utils/renderToDom';

const showSetup = (response) => {
  const setup = `<p>${response.setup}</p>`;
  renderToDom('#setup-text', setup);
};

const showDelivery = (response) => {
  const delivery = `<p>${response.delivery}</p>`;
  renderToDom('#punchline-text', delivery);
};

export { showSetup, showDelivery };
