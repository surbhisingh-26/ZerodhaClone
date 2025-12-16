import React from 'react'

function Stats() {
    return ( 
        <div className='container p-5'>
         <div className='row p-5'>
            <div className='col-6 p-5'>
                <h1 className='mb-5 fs-2'>Trust with confidence</h1>
                
                <h2 className='fs-4'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with $3.5 +
                    lakh crore  worth of equity investments
                  </p>

                  <h2 className='fs-4'>No spam or gimmicks</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with $3.5 +
                    lakh crore  worth of equity investments
                  </p>

                  <h2 className='fs-4' >The Zerodha universe</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with $3.5 +
                    lakh crore  worth of equity investments
                  </p>

                  <h2 className='fs-4'>Do better with money</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with $3.5 +
                    lakh crore  worth of equity investments
                  </p>
            </div>
            <div  className='col-6 p-5' >
                <img src='media/image/ecosystem.png' style={{width:'95%'}}/>
                <div className='text-center'>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>expore our product <i class="fa-solid fa-arrow-right"></i></a>
                    <a href='' style={{textDecoration:"none"}}>Try kite <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            </div>   
        </div>
        
     );
}

export default Stats;