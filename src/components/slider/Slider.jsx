import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'


import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'

const images = [image1, image2, image3, image4]

const Carousel = styled(motion.div)`
  cursor: grab;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Inner_Carousel = styled(Swiper)`
  width: 100%;
  max-width: 1200px;
`

const Carousel_Img = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;

  .item {
    width: 100%;
    height: 600px;
    border-radius: 12px;
    object-fit: cover;
  }
`
const Slider = ({ settings }) => {
    
  return (
    <Carousel>
      <Inner_Carousel
        {...settings}
        spaceBetween={2}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {images.map((item, index) => (
          <Carousel_Img key={index}>
            <img src={item} alt={`Slide ${index + 1}`} className='item' />
          </Carousel_Img>
        ))}
      </Inner_Carousel>
    </Carousel>
  )
}

export default Slider


