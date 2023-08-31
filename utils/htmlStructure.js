const htmlStructure = () => {
  document.querySelector('#app').innerHTML = `
  <div id="setup-text"></div>
  <div id="punchline-text"></div>
  <div id="initial-btn"></div>
  <div id="punchline-btn"></div>
  <div id="reset-btn"></div>
  `;
};

export default htmlStructure;
