import axios from 'axios';

const headers = {
  'x-api-key': 'a35c3e4e-88d0-4b04-80e1-5b98372ac7be',
};

export function getAllBreedsApi() {
  return axios.get('https://api.thecatapi.com/v1/breeds');
}

export function getFavouritesApi() {
  return axios.get('https://api.thecatapi.com/v1/favourites', {headers});
}

export function postApi(image) {
  return axios.post('https://api.thecatapi.com/v1/favourites', image, {
    headers,
  });
}
