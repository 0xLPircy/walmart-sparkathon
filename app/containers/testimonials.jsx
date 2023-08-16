"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="testimonial grid grid-flow-row justify-center items-center">
      {/* <Image
        height={900}
        width={900}
        src={bg}
        className="justify-self-center"
      ></Image> */}
      <div className="innertestimonial grid grid-flow-col grid-cols-5 justify-center items-center ">
        <div className="grid grid-flow-row text-white mx-6 justify-self-center col-span-3">
          <h1 className="text-6xl">Testimonials</h1>
          <p className="text-2xl pt-0">
            We're the best there is etc lorem ipsum dolorwere the best there is
            etc lorem ipsum dolor
          </p>
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-[440px]"
        >
          <SwiperSlide>
            <div className="cards bg-[#ffffffa4] p-3 rounded-md h-80 justify-self-center col-span-2 mx-12 grid grid-flow-row italic">
              <p className="pt-1">
                "Wanderlust Journeys has completely transformed the way I
                travel! I embarked on the Exotic Island Retreat in Bali, and the
                tasks made me explore hidden gems I'd have otherwise missed. The
                NFT rewards were a fantastic addition - they serve as beautiful
                souvenirs of my adventure. Highly recot- this platform to all
                travel enthusiasts!"
              </p>
              <h4 className="justify-self-end content-end -mb-9">
                <span className="flex justify-end font-semibold">
                  - Anna Gerovich (@annExplorer)
                </span>
                <span className="flex"> Novosibirsk, Russia</span>
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cards bg-[#ffffffa4] p-3 rounded-md h-80 justify-self-center col-span-2 mx-12 grid grid-flow-row italic">
              <p className="pt-1">
                "As an adventure seeker, the Himalayan Expedition with
                Wanderlust Journeys was an unforgettable experience. Scaling
                those majestic mountains and immersing myself in Ladakhi culture
                was a dream come true. The NFTs I earned are truly unique tokens
                of my accomplishments. Can't wait to tackle more challenging
                trips and collect more precious memories!"
              </p>
              <h4 className="justify-self-end content-end -mb-9">
                <span className="flex justify-end font-semibold">
                  - Isabella Rosellini (@bellaTravels)
                </span>
                <span className="flex"> Rome, Italy</span>
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cards bg-[#ffffffa4] p-3 rounded-md h-80 justify-self-center col-span-2 mx-12 grid grid-flow-row italic">
              <p className="pt-1">
                "Wanderlust Journeys has been a game-changer for my travel
                experiences. I chose the Coastal Paradise Getaway in Italy, and
                it was a perfect blend of relaxation and cultural immersion. The
                NFT rewards are like my travel trophies, reminding me of the
                amazing time I had. I'm already planning my next trip with this
                incredible platform!"
              </p>
              <h4 className="justify-self-end content-end -mb-9">
                <span className="flex justify-end font-semibold">
                  - Jake Reynolds (@reygningNomad)
                </span>
                <span className="flex"> Edinburgh, Scotland</span>
              </h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
