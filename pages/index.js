import Head from 'next/head'
import Image from 'next/image'
import Details from './components/Details'
import Form from './components/Form'
import Gallery from './components/Gallery'

import Navbar from './components/Navbar'


export default function Home() {
  return (
<div>
      <Navbar/>
      
      <div className="bg-tamir bg-origin-padding bg-center h-full w-full snap-x  xl:bg-cover sm:bg-auto">
    <body>
    <h1 dir='rtl' className="flex justify-center pt-5 pb-5 text-7xl">לוגו</h1><br/>
      <div dir='rtl' className="group flex justify-center pt-5 pb-5 text-7xl">
      
    <h1 className="text-green-800">עץ צל תמיר</h1>
    </div>
      {/* <h1>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven,</h1> */}
      
      
      <Gallery />
      <Details />
      <Form />
      
      </body>
      
      <footer className=" left-0 bottom-0 h-100 w-100 overflow-hidden">
      hello
      </footer>
      
      </div>
    </div>    
  )
}
