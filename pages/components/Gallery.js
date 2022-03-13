import Image from 'next/image'
import React from 'react'
import GalleryImg from './GalleryImg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default function Gallery() {
  const text1 ="היי שלום כסא ליד חלון";
 function onHover(){
   console.log(text1);
 } 
  return (
    <div className="bg-white bg-opacity-30 m-2  p-2 rounded-lg xl:m-5 xl:p-10">
  
  <div className="space-x-1">
   <Carousel className="space-x-40"
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={40000}
  centerMode={false}
  containerClass="container-with-dots"
  dotListClass=""
  draggable={false}
  focusOnSelect={false}
  

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
      partialVisibilityGutter: 60
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

  <div className="pr-5 pl-5 " placeholder="hello" onMouseEnter={onHover}><Image 
      className="rounded-lg hover:h-40"
      src='/../public/images/image1.jpg'
        width={500}
        height={500}
      >

      </Image>
      </div>
  <div className="pr-5 pl-5">
     <Image 
      className="rounded-lg "
      src='/../public/images/image2.jpg'
        width={500}
        height={500}
        
      ></Image>
      </div>
  <div className="pr-5 pl-5"><Image 
      className="rounded-lg "
      src='/../public/images/image3.jpg'
        width={500}
        height={500}
      >
        </Image></div>
  <div className="pr-5 pl-5"><Image 
      className="rounded-lg "
      src='/../public/images/image1.jpg'
        width={500}
        height={500}
      ></Image></div>
      <div className="pr-5 pl-5"><Image 
      className="rounded-lg "
      src='/../public/images/image5.jpg'
        width={500}
        height={500}
      ></Image></div>
      <div className="pr-5 pl-5"><Image 
      className="rounded-lg "
      src='/../public/images/image6.jpg'
        width={500}
        height={500}
      ></Image></div>
</Carousel>

</div>
        
    </div>
    
  )
}
