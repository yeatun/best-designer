import React from 'react';
import image from '../../../UI/image_01.png';
import './Header.css'
const Header = () => {
    return (

        <div style={{height:'600px'}} className ="header-container flex justify-evenly  bg-gradient-to-r from-#d585cf-400 to-rgba(213,133,207,255)-500  flex flex-row  ">
 <div className="pt-20">
 <h1 style ={{color:'#ffffff'}}><b>Business workflow</b> </h1>
 <h1 className ="text-secondary" style ={{fontSize:'20px',color:'#ffffff'}}>  <b>Lorem ipsum, dolor sit amet . <br /> Pariatur laboriosam,<br /> iure  tempore itaque libero officiis.</b></h1>
 <button style={{color:'#9255cb'}}  className='pt-4'> 
                <a class="  px-4 py-2 text-right bg-white hover:bg-blue-500  md:rounded" href="/contact">Hire me</a>

            <a class=" px-4 py-2 ml-2  text-right border border-white-500 hover:bg-blue-500  md:rounded"style={{color:'white'}} href="/">Portfolio</a>
             </button>
 </div>
  <div class="">  <img style={{height:'350px'}} src={image} alt="" className ="img-fluid sm:text-left "/></div>
</div>



        // <main style={{height:'600px'}} className ="header-container bg-gradient-to-r from-#d585cf-400 to-rgba(213,133,207,255)-500  flex flex-row  ">
        //     <div className="pl-20 py-20 ml-10 text-center sm:text-left">
        //         <h1 style ={{color:'#ffffff'}}><b>Business workflow</b> </h1>
        //         <h1 className ="text-secondary" style ={{fontSize:'20px',color:'#ffffff'}}>  <b>Lorem ipsum, dolor sit amet . <br /> Pariatur laboriosam,<br /> iure  tempore itaque libero officiis.</b></h1>
        //        <div className='flex flex-row'>
        //        <button style={{color:'#9255cb'}}  className='pt-4'> 
        //          <a class="  px-4 py-2 text-right bg-white hover:bg-blue-500  md:rounded" href="/contact">Hire me</a>

        //      <a class=" px-4 py-2 ml-2  text-right border border-white-500 hover:bg-blue-500  md:rounded"style={{color:'white'}} href="/">Portfolio</a>
        //        </button>
        //        </div>
            
        //     </div>
            
        //     <div className="pl-20  ml-32 text-center sm:text-left" >
        //         <img style={{height:'350px'}} src={image} alt="" className ="img-fluid sm:text-left "/>
        //     </div>
        // </main>
    );
};

export default Header;