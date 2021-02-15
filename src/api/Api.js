const BASE_URL = 'https://swapi.dev/api/people/'

export const request = (url) => {
  return fetch(`${BASE_URL}${url}`)
  .then(response => {
    if (response.ok) {

      return response.json();
    }

    throw `${response.status} - ${response.statusText}`
  });
};

export const getCharactersFromApi = () => request('.json')
