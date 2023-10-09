import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const FetchApiAxiosUseEffectImagesKey = () => {
    let [state,setState]=useState([])
    console.log(state)
    useEffect(()=>{
        axios.get("https://api.github.com/users")
        .then(res=>setState(res.data))
    },[])
  return (
    // <>

    // {
    //     state.map((user)=>
    //     console.log(user.login),
    //     console.log(user.avatar_url)


    //     )
    // }
    // </>
    <>
    <h1 className='text-center py-5' >GITHUB USERS</h1>
    <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto auto ",rowGap:"30px"}}>
        {
            state.map((user)=>{
                return <div className='card text-center' style={{width:"14rem"}}>
                    <img src={user.avatar_url} className='card-img-top' alt="" />
                    <div className='card-body'>
                        <h4 className='card-title' style={{textTransform:"uppercase"}}>{user.login}</h4>
                    </div>

                </div>

            })
        }


    </div>
    
    
    </>
    
  )
}

export default FetchApiAxiosUseEffectImagesKey
