import React from 'react'

function Educatin() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img  src='media/image/education.svg'/>
                </div>
                  <div className='col-6 mt-5'>
                    <h1 className='mb-5 fs-2'>Free and open market education</h1>
                    <div className='mb-5' style={{textDecoration:"none"}}>
                        <p>Varsity ,the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
                        <a href=''>Versity <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                      <div>
                            <p> TradingQ&A , the most active trading and investment community in india for all your market realted queries.</p>
                            <a href='' style={{textDecoration:"none"}} >TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
                  </div>
                      </div>
                    
            </div>
        </div>
     );
}

export default Educatin;