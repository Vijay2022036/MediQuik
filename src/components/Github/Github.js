import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='flex justify-center'>
            <div className='flex justify-between rounded-md w-5/6 m-4 bg-gray-600 text-white p-4 text-3xl'>
                <img className='rounded-full ml-2' src={data.avatar_url} alt="Git picture" width={180} />
                <div className='flex flex-col items-center mr-8 justify-center'> 
                    <div className='text-center  text-white pr-5 pt-3 text-2xl'>{data.name}</div>
                    <div className='text-center mb-5 text-white pr-5 pt-3 text-2xl'>Followers: {data.followers}</div>
                </div>
            </div>
    </div>

  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Vijay2022036')
    return response.json()
}