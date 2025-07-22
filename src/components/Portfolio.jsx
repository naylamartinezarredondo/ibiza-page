import React, { useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './Portfolio.css';

import img1 from '../assets/test1.jpg';
import img2 from '../assets/test2.jpg';
import img3 from '../assets/test3.jpg';

const carousels = [
  { title: 'Sesiones Familiares', images: [img1, img2, img3, img1] },
  { title: 'Retratos Individuales', images: [img2, img3, img1, img2] },
  { title: 'Parejas y Bodas', images: [img3, img1, img2, img3] },
  { title: 'Eventos Especiales', images: [img1, img3, img2, img1] },
  { title: 'Sesiones en Exterior', images: [img2, img1, img3, img2] },
  { title: 'Fotografía Infantil', images: [img3, img2, img1, img3] },
  { title: 'Sesiones Creativas', images: [img1, img2, img3, img1] },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // en desktop
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 768, // tablets
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480, // celulares
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);

  const openLightbox = (images, index) => {
    const slides = images.map((src) => ({ src }));
    setLightboxImages(slides);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="portfolio" id="portafolio">
      <h2>Portafolio</h2>

      {carousels.map((carousel, i) => (
        <div key={i} className="portfolio-carousel">
          <h3 className="carousel-title">{carousel.title}</h3>
          <Slider {...settings}>
            {carousel.images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`${carousel.title} ${index + 1}`}
                  className="portfolio-image"
                  onClick={() => openLightbox(carousel.images, index)}
                />
              </div>
            ))}
          </Slider>
        </div>
      ))}

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={currentIndex}
        slides={lightboxImages}
      />
    </section>
  );
};

export default Portfolio;