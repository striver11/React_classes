import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const FetchOmdbApiSearchingOption = () => {
   
    let [state,setState]=useState([])
    console.log(state)
    let movie="don"

    useEffect(()=>
    {
        axios.get(`https://www.omdbapi.com/?s=${movie}&apikey=3b5ae73e`)
        .then(res=>setState(res.data))
    },[])

  return (
    <>
   

    
    </>
  )
}



export default FetchOmdbApiSearchingOption



// export function StateWise(props){
//   let{state,active,confirmed,deaths,deltaconfirmed,deltadeaths,deltarecovered,lastupdatedtime,migratedother,recovered,statecode}=props.user
//   return(
//       <div className='card text-center' style={{width:"18rem"}}>
//       {/* <img src={state} className='card-img-top' alt="" /> */}
//       <div className='card-body'>
//           {/* <h6 className='card-title' style={{textTransform:"uppercase"}}>{state}</h6> */}
          
           
              
              
//                 <tr>
//                     <td>{state}</td>
                
                
//                   <td>{active}</td>
               
                  
//                   <td>{confirmed}</td>
              
                  
//                   <td>{deaths}</td>
               
                  
//                   <td>{deltaconfirmed}</td>
               
                  
//                   <td>{deltadeaths}</td>
                
                  
//                   <td>{deltarecovered}</td>
           
               
//                   <td>{lastupdatedtime}</td>
             
                  
//                   <td>{migratedother}</td>
              
                 
//                   <td>{recovered}</td>
          
                  
//                   <td>{statecode}</td>
//                 </tr>
               
                
           

           
          
            
//       </div>

//   </div>


//   )
// }

