import axios from 'axios'
import { BASE_URL } from './config/api.const';

export const getCurrency = async () => {
  const result = await axios({
    method: 'get',
    url: BASE_URL,
    responseType: 'stream',
  })
    .then(function (response) {
      return response.data
    });

  return JSON.parse(result)

}


