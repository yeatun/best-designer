import React from 'react';
import './ProjectPart.css'
const ProjectPart = () => {
    return (
        <main style={{height:'400px'}} className ="project-container ">
        <div className="text-center mt-10 p-32"  >
           
         <h1 className="  text-center   " style ={{fontSize:'20px',color:'#ffffff'}}> <b>Start A Project With Me</b></h1>
         <p className ="text-secondary" style ={{fontSize:'15px',color:'#ffffff'}}>  <b>Lorem ipsum, dolor sit amet . <br /> Pariatur laboriosam, iure  tempore itaque libero officiis.</b></p>
         <button style={{color:'#9255cb'}}  className='pt-10'> 
           <button class=" md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">Hire me</button>

            
               </button>
        
        </div>
        
      
    </main>
    );
};

export default ProjectPart;