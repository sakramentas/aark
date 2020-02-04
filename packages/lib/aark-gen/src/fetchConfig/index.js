import axios from 'axios';

export const fetchConfig = async url =>
  axios
    .get(url)
    .then(({ data }) => data)
    .catch(err => {
      throw new Error(err);
    });
