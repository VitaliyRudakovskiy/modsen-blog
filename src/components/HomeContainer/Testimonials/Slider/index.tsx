'use client';

import { useState } from 'react';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import styles from './Slider.module.scss';
import SliderPage from './SliderPage';
import testimonials from './testimonials';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleClickNext = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handleClickPrev = () => {
    setActiveSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className={styles.slider}>
      <div
        className={styles.slider__items}
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {testimonials.map(({ id, image, author, place }, index) => (
          <SliderPage
            key={id}
            image={image}
            author={author}
            place={place}
            isActive={index === activeSlide}
          />
        ))}
      </div>
      <div className={styles.slider__arrows}>
        <LeftArrow onClick={handleClickPrev} />
        <RightArrow onClick={handleClickNext} />
      </div>
    </div>
  );
};

export default Slider;
