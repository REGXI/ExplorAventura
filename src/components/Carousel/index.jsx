import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function Carousel({ arrayCarousel, RenderComponent }) {
  const renderNoItem = () => <div>No hay items</div>

  if (!arrayCarousel?.length) return renderNoItem()

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {arrayCarousel?.map((item, index) => (
        <SwiperSlide key={index}>
          <RenderComponent {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
