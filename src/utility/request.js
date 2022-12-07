import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

const request = (method, url, data) => {
  const axData = {
    method
  }
  if (method === 'get') {
    axData.url = url + '?' + Object.keys(data).reduce(
      (accumulator, value, key, array) => accumulator + value + '=' + data[value] + '&',
      ''
    ).slice(0, -1)
  } else {
    axData.url = url
    axData.data = data
  }
  return axios(axData)
}

export default request
