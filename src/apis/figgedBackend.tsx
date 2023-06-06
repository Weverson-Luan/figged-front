import axios from 'axios';


export default axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}/figged`,
  headers: {
    Authorization: `${process.env.REACT_APP_API_TOKEN}`,
  }
})
