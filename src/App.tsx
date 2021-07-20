import React, {useEffect, useState} from 'react';
import {setInterval} from 'timers';
import './App.css';

import reviews from './reviews.json';

const App: React.FC = () => {
  const [active, setActive] = useState(0);
  let timer: NodeJS.Timer;

  if (active > 2) {
    setActive(0);
  }

  const nextSlide = () => {
    if (active > 2) {
      setActive(0);
    } else {
      setActive((prev) => prev + 1);
    }
  };
  const prevSlide = () => {
    if (active === 0) {
      setActive(2);
    } else {
      setActive((prev) => prev - 1);
    }
  };

  const changeSlide = () => {
    timer = setInterval(() => {
      active < 2 ? nextSlide() : setActive(0);
    }, 5000);
  };

  // useEffect(() => {
  //   changeSlide();

  //   return () => {
  //     clearInterval(timer);
  //   };
  // });

  return (
    <div className="App">
      <h1>
        <span>/</span> Reviews
      </h1>
      <div className="slider-container">
        <article
          className={
            active === 0
              ? 'active-slide'
              : active === 2
              ? 'next-slide'
              : 'prev-slide'
          }
        >
          <img src={reviews[0].image} alt={reviews[0].name} />
          <div className="info">
            <div className="name">{reviews[0].name}</div>
            <div className="title">{reviews[0].title}</div>
            <div className="quote">{reviews[0].quote}</div>
          </div>
        </article>
        <article
          className={
            active === 1
              ? 'active-slide'
              : active + 1 === 1
              ? 'next-slide'
              : 'prev-slide'
          }
        >
          <img src={reviews[1].image} alt={reviews[1].name} />
          <div className="info">
            <div className="name">{reviews[1].name}</div>
            <div className="title">{reviews[1].title}</div>
            <div className="quote">{reviews[1].quote}</div>
          </div>
        </article>
        <article
          className={
            active === 2
              ? 'active-slide'
              : active + 1 === 2
              ? 'next-slide'
              : 'prev-slide'
          }
        >
          <img src={reviews[2].image} alt={reviews[2].name} />
          <div className="info">
            <div className="name">{reviews[2].name}</div>
            <div className="title">{reviews[2].title}</div>
            <div className="quote">{reviews[2].quote}</div>
          </div>
        </article>

        <div onClick={prevSlide} className="prev">
          {'<'}
        </div>
        <div onClick={nextSlide} className="next">
          {'>'}
        </div>
      </div>
    </div>
  );
};

export default App;
