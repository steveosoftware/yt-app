import axios from 'axios';

const KEY = 'AIzaSyCFyYKBlEGXo73Pg4QAJHZz2-1t1GS2L0s'


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});


