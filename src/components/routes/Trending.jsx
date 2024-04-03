'use client';
// Load Hooks
import { useState, useEffect } from 'react';

// Load components
import Slider from 'react-slick';
import Image from 'next/image';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Load data
import data from '../../../public/data.json';

const Trending = () => {
  const movies = Object.create(data);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const sortedVideos = Object.entries(movies['TrendingNow']).filter(item => typeof item === 'object').sort(([, a], [, b]) => {
      const dateA = new Date(a['Date']);
      const dateB = new Date(b['Date']);
      return dateB - dateA; // Sorting in descending order, adjust as needed
    });

    const limitedVideos = sortedVideos.slice(0, 50);
    setTrendingMovies(limitedVideos);
  }, [movies]);

  console.log('movies', movies)

  const settings = {
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {trendingMovies.map((movie) => (
          <div key={movie.Id} className='carousel-item'>
            <Image src={`assets/${movie.CoverImage}`} alt={movie.Title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Trending;
