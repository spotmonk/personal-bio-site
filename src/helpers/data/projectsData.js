import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseURL = apiKeys.firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/Projects.json`)
    .then(({ data }) => resolve(utils.responseToArray(data)))
    .catch((err) => reject(err));
});

export default { getProjects };
