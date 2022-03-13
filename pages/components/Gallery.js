import Image from 'next/image'
import React from 'react'
import GalleryImg from './GalleryImg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Gallery() {
  return (
    <div className="bg-white bg-opacity-30">
  <h1 className="text-4xl position: relative text-center right-0 p-10 top-0 h-100 w-100 overflow-hidden ">הגלריה שלנו</h1><br/><br/>
  <div className="space-x-1 ">
   <Carousel className="space-x-40"
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={40000}
  centerMode={true}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable={false}
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
  ssr={true}
  
  
>

  <div className="p-5"><Image 
      className="rounded-lg"
      src='/../public/images/demo.jpeg'
        width={500}
        height={500}
      ></Image></div>
  <div className="p-5"> <Image 
      className="rounded-lg"
      src='/../public/images/demo2.jpeg'
        width={500}
        height={500}
        
      ></Image></div>
  <div className="p-5"><Image 
      className="rounded-lg "
      src='/../public/images/demo.jpeg'
        width={500}
        height={500}
      ></Image></div>
  <div className="p-5"><Image 
      className="rounded-lg "
      src='/../public/images/garden-background.jpeg'
        width={500}
        height={500}
      ></Image></div>
</Carousel>

</div>
        
    </div>
    
  )
}
