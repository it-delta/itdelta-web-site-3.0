// Import Swiper React components
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Img } from '@/components/Img'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

export const SliderImage = ({ images }: { images: [string] }) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      className="h-full w-full"
      spaceBetween={10}
      slidesPerView={'auto'}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {images.map((image) => (
        <SwiperSlide key={image} className="h-full w-full select-none">
          <Img src={image} className="max-sm:mx-0" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
