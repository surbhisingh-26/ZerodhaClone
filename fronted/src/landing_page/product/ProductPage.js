import React from 'react'
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import Universe from './Universe';
import Hero from './Hero';
function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftImage  
          imageUrl ="media/image/Kite.png" 
         productName="kite"
         productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
         tryDemo=""
         learnMore=""
         googlePlay=""
         appStore=""
        />
         <RightImage 
          imageUrl ="media/image/console.png" 
         productName="Console"
         productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
        
         />
        <LeftImage  
          imageUrl ="media/image/coin.png" 
         productName="Coin"
         productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
         tryDemo=""
         learnMore=""
         googlePlay=""
         appStore=""
        />
         <RightImage
          imageUrl ="media/image/Kiteconnect.png" 
         productName="Kite connect API"
         productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
         learnMore=""
         />
        <LeftImage  
          imageUrl ="media/image/varsity.png" 
         productName="Versity mobile"
         productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
         tryDemo=""
         learnMore=""
         googlePlay=""
         appStore=""
        />
        <p className='text-center mb-5 mt-5'>want to know more about our technology stack ? check out the Zerodha .tech blog.</p>
        <Universe/>
        </>
     );
}

export default ProductPage;