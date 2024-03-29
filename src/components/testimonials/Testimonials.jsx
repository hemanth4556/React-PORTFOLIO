import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'






// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';







// Generating data Dynamically through Array.


const data = [
{
  avatar: AVTR1,
  name: 'Tina Snow',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatum quas possimus, veniam assumenda quod repellat eum voluptatem optio quos. Consequuntur earum consequatur quam doloribus nulla minima quidem, excepturi non.'
},
{
  avatar: AVTR2,
  name: 'Tina Snow',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatum quas possimus, veniam assumenda quod repellat eum voluptatem optio quos. Consequuntur earum consequatur quam doloribus nulla minima quidem, excepturi non.'
},
{
  avatar: AVTR3,
  name: 'Tina Snow',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatum quas possimus, veniam assumenda quod repellat eum voluptatem optio quos. Consequuntur earum consequatur quam doloribus nulla minima quidem, excepturi non.'
},
{
  avatar: AVTR4,
  name: 'Tina Snow',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatum quas possimus, veniam assumenda quod repellat eum voluptatem optio quos. Consequuntur earum consequatur quam doloribus nulla minima quidem, excepturi non.'
},
]










const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      

      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}


      >
        {
          data.map(({avatar, name, review}) => {
            return(
              <SwiperSlide className="testimonial">
             <div className="client__avatar">
               <img src={avatar} alt="Avatar one" />
             </div>
             <h5 className='client__name'>{name}</h5>
               <small className="client__review">
                {review}
              </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials