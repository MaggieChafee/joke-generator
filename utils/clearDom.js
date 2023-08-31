const clearDom = () => {
  document.querySelector('#setup-text').innerHTML = '';
  document.querySelector('#punchline-text').innerHTML = '';
  document.querySelector('#initial-btn').innerHTML = '';
  document.querySelector('#punchline-btn').innerHTML = '';
  document.querySelector('#reset-btn').innerHTML = '';
};

export default clearDom;
