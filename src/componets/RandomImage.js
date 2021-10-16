import React, {useState, useEffect} from 'react';
import {Loader} from './partials/Loader';
import {ImageDisplay} from './partials/ImageDisplay';
import Axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

function RandomImage() {
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    handleFetchMoreImages();
  }, [])

  const handleFetchMoreImages = () => {
    const randomImgRootUrl = `https://api.unsplash.com`;
    //Access key for Upnsplash API in .env;
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    Axios.get(`${randomImgRootUrl}/photos/random?client_id=${accessKey}&count=25`)
    .then((res => setRandomImages([...randomImages, ...res.data])))
  }
  
  return (
    <div>
      <InfiniteScroll dataLength={randomImages.length} next={handleFetchMoreImages} hasMore={true} loader={<Loader/>}>
          {randomImages.map(image => (
            <ImageDisplay url={image.urls.small} key={image.id} />
          ))}
      </InfiniteScroll>
    </div>
  )
}

export default RandomImage;