import Head from 'next/head'
import Image from 'next/image'
import Gallery from './components/Gallery'

import Navbar from './components/Navbar'


export default function Home() {
  return (
<div>
      <Navbar/>
      <div className="max-w-screen bg-center h-screen w-screen snap-x bg-tamir bg-no-repeat xl:bg-cover sm:bg-auto">
    <body>
      <h1>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven,</h1>
      <br/><br/><br/><br/>
      lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven 
      <Gallery />
      </body>

      <footer className="position: absolute left-0 bottom-0 h-100 w-100 overflow-hidden">
      hello
      </footer>
      {/* <Image
      className="opacity-80 object-center "
      src="/../public/images/demo2.jpeg"
      alt="Picture of the author"
      width="100%"
      height="100%"
      background={true}
    />
    <Image
      class="opacity-80 object-center w-1/2 h-1/2"
      src="/../public/images/demo2.jpeg"
      alt="Picture of the author"
      width={500}
      height={500}
    />

<Image
      class="opacity-80 object-center w-1/2 h-1/2"
      src="/../public/images/demo2.jpeg"
      alt="Picture of the author"
      width={500}
      height={500}
    />
    <br></br>
    <br></br>
    <Image
      class="opacity-80 object-center w-1/2 h-1/2"
      src="/../public/images/demo2.jpeg"
      alt="Picture of the author"
      width={500}
      height={500}
    /> */}
    
    {/* <div className="bg-[url('../../public/images/demo.jpeg">
      <img className="object-contain h-48 w-96" />
    </div> */}

    </div>
    </div>    
  )
}
