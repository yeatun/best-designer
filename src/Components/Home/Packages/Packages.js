import React from 'react';
import { Col ,Row,Card } from 'tailwind-react-ui'
const Packages = () => {
    return (
        <Row gutter className='m-10' >
     
        <Col w="1/3" >
          <Card bg="grey-dark"p="4" rounded="none" className= 'shadow-md border-2'>
          <h3 style={{color:'#9255cb'}}> <b>get started</b></h3>
           <h1>Sigularity</h1>
           <p>  <b>Lorem ipsum, dolor sit amet . <br /> Pariatur laboriosam,<br /> iure  tempore itaque libero officiis.</b></p>
           <button style={{color:'#9255cb'}}  className='pt-10'> 
           <button class=" md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">see more</button>

            
               </button>
          </Card>
        </Col>
        <Col w="1/3">
          <Card bg="grey" p="4" rounded="none" className= 'shadow-md border-2'>
          <h3 style={{color:'#9255cb'}}> <b>get started</b></h3>
           <h1>Sigularity</h1>
           <p>  <b>Lorem ipsum, dolor sit amet . <br /> Pariatur laboriosam,<br /> iure  tempore itaque libero officiis.</b></p>
           <button style={{color:'#9255cb'}}  className='pt-10'> 
           <button class=" md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">see more</button>

            
               </button>
           
          </Card>
        </Col>
        <Col w="1/3">
          <Card bg="grey-light"  p="4" rounded="none" className= 'shadow-md border-2'>
          <h3 style={{color:'#9255cb'}}> <b>get started</b></h3>
           <h1>Sigularity</h1>
           <p>  <b>Lorem ipsum, dolor sit amet . <br /> Pariatur laboriosam,<br /> iure  tempore itaque libero officiis.</b></p>
           <button style={{color:'#9255cb'}}  className='pt-10'> 
           <button class=" md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">see more</button>

            
               </button>
          </Card>
        </Col>
      
      
       
     
      </Row>
    );
};

export default Packages;