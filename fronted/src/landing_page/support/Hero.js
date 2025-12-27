import React from 'react'

function Hero() {
    return ( 
      <section className='container-fluid' id='supportHero'>
        <div className='p-5' id='supportWrapper'>
            <h5>Support Portal</h5>
            <a href='' style={{textDecoration:"none"}}>Track Tickets</a>
        </div>
         <div className=' row p-5  m-3'>
           <div className='col-6  p-5'>
            <h1 className='fs-3'>Search for an answer or browser help topics to create a ticket</h1>
              <input placeholder='Eg:how do i activate F&O,why is my order getting rejected..'
              style={{}}/><br/>
               <a href=''>Track account opening</a>
               <a href=''>Track segment activation</a>
               <a href=''>Intraday margins</a>
               <a href=''>Kite user mannual</a>
           </div>
           <div className='col-6 p-3'>
            <h1 className='fs-3'>Featured</h1>
            <o className={{lineheight:"3"}}>
                <li><a href=''>Track account opening</a><br/></li>
                <li><a href=''>Track segment activation</a></li>
            </o>
            
               
            </div>
        </div>
      </section> 
    )
    } ;


export default Hero;