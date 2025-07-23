import React, { useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './Portfolio.css';

import in1 from '../assets/individuales/469877535_1103014908156553_3334768143699533760_n.jpg';
import in2 from '../assets/individuales/469894748_1103014891489888_4378432240755848215_n.jpg';
import in3 from '../assets/individuales/470671822_1109169930874384_2183456194087633446_n.jpg';
import in4 from '../assets/individuales/470690743_1109170160874361_1362204713957601916_n.jpg';
import in5 from '../assets/individuales/471163971_1114391010352276_6803738751379831172_n.jpg';
import in6 from '../assets/individuales/471257985_1114391430352234_5171976923885960070_n.jpg';
import in7 from '../assets/individuales/471520020_1115835450207832_759968187351272267_n.jpg';
import in8 from '../assets/individuales/484989733_1189050216557892_5006434302437093517_n.jpg';
import in9 from '../assets/individuales/485003300_1189049973224583_9190151577762417338_n.jpg';
import in10 from '../assets/individuales/485308111_1189050233224557_3505166085012640010_n.jpg';

import pa1 from '../assets/pareja/139813705_218659359925450_3914345074888721236_n.jpg';
import pa2 from '../assets/pareja/139816466_218659176592135_4880587940257398552_n.jpg';
import pa3 from '../assets/pareja/140065899_218659093258810_2037264920769545068_n.jpg';
import pa4 from '../assets/pareja/140182080_218659476592105_2920638483709006770_n.jpg';
import pa5 from '../assets/pareja/177659020_279849233806462_5931269058224555307_n.jpg';
import pa6 from '../assets/pareja/177776079_279849187139800_5717917588919181202_n.jpg';
import pa7 from '../assets/pareja/177907537_279849283806457_5826828681525349403_n.jpg';
import pa8 from '../assets/pareja/177972806_279849133806472_3110123940334927326_n.jpg';

import fa1 from '../assets/familiares/471569250_1115065650284812_7441143953288748807_n.jpg';
import fa2 from '../assets/familiares/471664964_1115065386951505_3813868477820573987_n.jpg';
import fa3 from '../assets/familiares/471697619_1115832310208146_3946509077728432445_n.jpg';
import fa4 from '../assets/familiares/471982050_1115832663541444_9186591469463553911_n.jpg';
import fa5 from '../assets/familiares/480484877_1163841412412106_7158912870003012414_n.jpg';
import fa6 from '../assets/familiares/481071674_1163841362412111_8455511765122586713_n.jpg';
import fa7 from '../assets/familiares/488718268_1207638868032360_6953210757281280691_n.jpg';
import fa8 from '../assets/familiares/489328403_1207901964672717_3598935593697320600_n.jpg';
import fa9 from '../assets/familiares/489587693_1207462774716636_5943754861707247801_n.jpg';

import xb1 from '../assets/xv-bodas/471165440_1114380763686634_2373178276126691140_n.jpg';
import xb2 from '../assets/xv-bodas/471597876_1115821926875851_6043824827144781974_n.jpg';
import xb3 from '../assets/xv-bodas/485038731_1190148616448052_1894265481948660175_n.jpg';
import xb4 from '../assets/xv-bodas/485313147_1190149039781343_5405174762637289571_n.jpg';
import xb5 from '../assets/xv-bodas/485370868_1190148973114683_2525130612023836856_n.jpg';
import xb6 from '../assets/xv-bodas/489109515_1203356238460623_9021033165438429165_n.jpg';
import xb7 from '../assets/xv-bodas/489138665_1207405581389022_2782937714876801664_n.jpg';
import xb8 from '../assets/xv-bodas/489249750_1207405634722350_3767669347274383275_n.jpg';
import xb9 from '../assets/xv-bodas/512963224_1276147461181500_8099535804358208068_n.jpg';
import xb10 from '../assets/xv-bodas/513888737_1276138957849017_3006080543129931258_n.jpg';

import bc1 from '../assets/bautizos-comunion/484809173_1188005316662382_6128239820364813366_n.jpg';
import bc2 from '../assets/bautizos-comunion/484846521_1189028603226720_7970408105299339787_n.jpg';
import bc3 from '../assets/bautizos-comunion/484963974_1188005629995684_6809357380603773770_n.jpg';
import bc4 from '../assets/bautizos-comunion/484978011_1189028523226728_779419550782313186_n.jpg';
import bc5 from '../assets/bautizos-comunion/487700247_1203356408460606_4413521037083871677_n.jpg';
import bc6 from '../assets/bautizos-comunion/487793002_1201296255333288_2765805876785726794_n.jpg';
import bc7 from '../assets/bautizos-comunion/487796585_1201296338666613_8595664907789554523_n.jpg';
import bc8 from '../assets/bautizos-comunion/488215246_1201296405333273_2623202543543684963_n.jpg';
import bc9 from '../assets/bautizos-comunion/488314840_1203356158460631_3355236995277027776_n.jpg';
import bc10 from '../assets/bautizos-comunion/489343433_1207639164698997_7705360253663943921_n.jpg';

import ma1 from '../assets/maternidad/468518372_1094662462325131_2257021883112219985_n.jpg';
import ma2 from '../assets/maternidad/469911789_1102998854824825_1646946237876817593_n.jpg';
import ma3 from '../assets/maternidad/470815364_1111495713975139_6234568077902450008_n.jpg';
import ma4 from '../assets/maternidad/471049531_1111495767308467_6052458922422447649_n.jpg';
import ma5 from '../assets/maternidad/494993278_1230277015768545_6703627319088649537_n.jpg';
import ma6 from '../assets/maternidad/495057582_1230276509101929_5920728976624905223_n.jpg';
import ma7 from '../assets/maternidad/495658680_1230275869101993_1217173630130594457_n.jpg';

import gr1 from '../assets/graduaciones/205195813_320382633086455_5298688158251983437_n.jpg';
import gr2 from '../assets/graduaciones/206768316_320382799753105_2809846590433460760_n.jpg';
import gr3 from '../assets/graduaciones/207047309_320382343086484_4744165001694871322_n.jpg';
import gr4 from '../assets/graduaciones/208859864_320382596419792_1044486485417256590_n.jpg';
import gr5 from '../assets/graduaciones/208900919_320381376419914_3517625776276752790_n.jpg';
import gr6 from '../assets/graduaciones/468436511_1094639588994085_4684751679998505862_n.jpg';
import gr7 from '../assets/graduaciones/468534943_1094636468994397_2989594651616760598_n.jpg';
import gr8 from '../assets/graduaciones/468597504_1094639655660745_2198378095427618733_n.jpg';
import gr9 from '../assets/graduaciones/468668408_1094636475661063_3452397912380978160_n.jpg'

const carousels = [
  { title: 'Sesiones Individuales', images: [in1, in2, in3, in4, in5, in6, in7, in8, in9, in10] },
  { title: 'Sesiones de Pareja', images: [pa1, pa2, pa3, pa4, pa5, pa6, pa7, pa8] },
  { title: 'Sesiones Familiares', images: [fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9] },
  { title: 'XV / Bodas', images: [xb1, xb2, xb3, xb4, xb5, xb6, xb7, xb8, xb9, xb10] },
  { title: 'Bautizos / 1er Comunion', images: [bc1, bc2, bc3, bc4, bc5, bc6, bc7, bc8, bc9, bc10] },
  { title: 'Maternidad', images: [ma1, ma2, ma3, ma4, ma5, ma6, ma7] },
  { title: 'Graduaciones', images: [gr1, gr2, gr3, gr4, gr5, gr6, gr7, gr8, gr9] },
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
      <h2>Nuestro Trabajo</h2>

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