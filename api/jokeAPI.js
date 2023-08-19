const endpoint = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun?blacklistFlags=racist,sexist&type=twopart';

const getJoke = () => new Promise((resolve, reject) => {
  fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export default getJoke;
