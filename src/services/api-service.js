import axios from 'axios';

const apiKey = '20312002-359243adeeeebb2bc74e90a1f';

axios.defaults.baseURL = 'https://pixabay.com';

const fetchImages = (query, page) => {
  return axios
    .get(
      `/api/?q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&key=${apiKey}`,
    )
    .then(response => response.data.hits);
};

export default fetchImages;
