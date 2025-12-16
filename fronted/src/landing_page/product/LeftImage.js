import React from "react";

function LeftImage({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
     <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageUrl} />
        </div>
    
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
             <a href={tryDemo}>Try Demo</a>
        <a href={learnMore} style={{marginLeft:"50px"}}>
          Learn More
        </a>
      </div>
            
             
           <div className="mt-3">
                <a href={googlePlay}>
            <img src="media/image/googlePlayBadge.svg" />
          </a>
          <a href={appStore}>
            <img 
            style={{width:"160px", height:"48px"}}
             src="https://freepngimg.com/thumb/iphone/68600-play-google-apple-app-iphone-store.png" />
          </a>
         </div>
      </div>
    </div>
  </div> 

    </>
   
  );
}

export default LeftImage;
