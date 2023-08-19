const renderToDom = (divId, htmlToRender) => {
  const div = document.querySelector(divId);
  div.innerHTML = htmlToRender;
};

export default renderToDom;
