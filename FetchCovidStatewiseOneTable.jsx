import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const FetchCovidStatewiseOneTable = () => {
   
    let [state,setState]=useState([])
    console.log(state)

    useEffect(()=>
    {
        axios.get("https://data.covid19india.org/data.json")
        .then(res=>setState(res.data.statewise))
    },[])

  return (
    <>
    <h1 style={{textAlign:"center",padding:"20px"}}>STATE WISE COVID19 DETAILS</h1>
   
    <table className="table  table-bordered table-hover table-striped">
        <thead className='table-dark'>
        <tr>
            <th>State</th>
            <th>Active</th>
            <th>Confirmed Cases</th>
            <th>Death</th>
            <th>deltaconfirmed</th>
            <th>deltadeaths</th>
            <th>deltarecovered</th>
            <th>lastupdatedtime</th>
            <th>migratedother</th>
            <th>recovered</th>
            <th>statecode</th>
        </tr>
        </thead>
        <tbody>
    
        {/* {
            state.map((user,i)=>{
               return <StateWise key={i} user={user}/>
            })
        } */}
       {
        state.map((user)=>{
            return <tr>
                <td>{user.state}</td>
                <td>{user.active}</td>
                <td>{user.confirmed}</td>
                <td>{user.deaths}</td>
            </tr>
        })
       }

        </tbody>

    </table>


    
    </>
  )
}



export default FetchCovidStatewiseOneTable



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

