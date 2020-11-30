import { useState, useEffect } from 'react';
import youtube from '../apis/youtube'

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
}, [defaultSearchTerm]);

const search = async (term) => {
  const youtubeReq = await youtube()
  const response = await youtubeReq.get('/search', {params: {q: term}})

   setVideos(response.data.items);


  };

    return [ videos, search ]
};


export default useVideos;