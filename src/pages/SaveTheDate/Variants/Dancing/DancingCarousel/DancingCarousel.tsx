import React from 'react'

import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import portrait from 'assets/portrait.jpg'
import portraitAlt from 'assets/portrait-alt.jpg'
import { Image } from 'components/Image/Image'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const IMAGES = [portrait, portraitAlt, portrait, portraitAlt, portrait]

export const DancingCarousel = () => {
  return (
    <Swiper
      effect="fade"
      modules={[Autoplay, EffectFade, Pagination]}
      autoplay={{
        delay: 1500, // 1.5 secs
        stopOnLastSlide: true,
        disableOnInteraction: true,
      }}
    >
      {IMAGES.map((image, i) => (
        <SwiperSlide key={`${image}-${i}`}>
          <Image
            src={image}
            sx={{
              height: '100vh',
              margin: 'auto',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
