import axios from 'axios';

const youtube = async () => {

const {data} = await axios.get('/api')

return axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: data.key
  }
});
}

export default youtube;