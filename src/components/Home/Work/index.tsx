"use client";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { DataType } from "@/app/api/data";
import { getImagePath } from "@/utils/basePath";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

const Work = () => {
  const elipseImagePath = getImagePath('/images/wework/elipse.svg');
  const vectorImagePath = getImagePath('/images/wework/vector.svg');
  
  return (
    <section 
      className="relative py-4 bg-cover bg-center overflow-hidden before:absolute before:w-full before:h-full before:bg-no-repeat before:bg-center after:absolute after:w-1/3 after:h-1/3 after:bg-no-repeat after:top-28 after:-right-12 after:-z-10"
      style={{
        '--before-bg-image': `url('${elipseImagePath}')`,
        '--after-bg-image': `url('${vectorImagePath}')`,
      } as React.CSSProperties}
    >
      <style jsx>{`
        section::before {
          background-image: var(--before-bg-image);
        }
        section::after {
          background-image: var(--after-bg-image);
        }
      `}</style>
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)">
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-black  my-2">
            We work in several verticals.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black/50 lg:mr-48 my-2">
            We work in several verticals.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black/25 lg:-mr-32 my-2">
            We work in several verticals.
          </h3>
        </div>
      </div>

      <Slider {...settings}>
        {DataType.map((items, i) => (
          <div key={i}>
            <div className="bg-white dark:bg-darkHeroBg m-3 py-14 my-10 text-center shadow-xl rounded-3xl">
              <div className="relative">
                <Image
                  src={getImagePath(items.imgSrc)}
                  alt="gaby"
                  width={182}
                  height={182}
                  className="inline-block m-auto"
                />
                <div className="absolute right-16 bottom-0 bg-white shadow-linckedin p-5 rounded-full">
                  <Image
                    src={getImagePath("/images/wework/linkedin.svg")}
                    alt="greenbg"
                    width={30}
                    height={30}
                    className="  inline-block "
                  />
                </div>
              </div>
              <h4 className="text-32 text-black font-bold pt-14">
                {items.name}
              </h4>
              <h3 className="text-30 font-normal pt-4 pb-2">
                {items.profession}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default Work;
