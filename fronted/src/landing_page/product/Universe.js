import React from 'react'

function Universe() {
    return (  
     <div className='container'>
        <div className='row'>
          <h1>
            The Zerodha Universe
            </h1>
            <p>
               Extend your trading and investment experience even further with our
               partner platforms 
             </p>  

             <div className='col-4 p-3  mt-5 '>
                <img src='media/image/smallcaseLogo.png'/>
                <p className='text-small text-muted'>Thematic investment platform</p>
             </div>
             <div className='col-4  p-3 mt-5 '>
                <img className='mb-1' style={{width:"100px",height:"50px"}} src='media/image/streakLogo.png'/>
                <p className='text-small text-muted'>Algo & strategy platform</p> 
             </div>
              <div className='col-4 p-3  mt-5'>
                 <img className='mb-1' style={{width:"100px",height:"50px"}}
                  src='media/image/goldenpiLogo.png'/>
                <p className='text-small text-muted'>Option trading platform</p>
              </div>
               <div className='col-4 p-3  mt-5'>
                 <img className='mb-1' style={{width:"130px",height:"50px"}} 
                 src='media/image/zerodhaFundhouse.png'/>
                <p className='text-small text-muted'>Asset management</p>
               </div>
                <div className='col-4  p-3  mt-5'>
                     <img className='mb-1' style={{width:"130px",height:"50px"}}
                      src='media/image/goldenpiLogo.png'/>
                <p className='text-small text-muted'>Bonds trading platform</p>
                </div>
                 <div className='col-4 p-3  mt-5'>
                     <img className='mb-1' style={{width:"130px",height:"50px"}}
                     src='media/image/dittoLogo.png'/>
                <p className='text-small text-muted'>insurance</p>
                 </div>

                 <button className='p-2 btn btn-primary fs-5 mb-5'  
            style={{width:"20%", margin:"0 auto"}}
            >
                Signup Now
                </button>
        </div>
     </div>   
    );
}

export default Universe;