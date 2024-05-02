import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [myData,setData] = useState([])
  


  useEffect(()=>{
    axios.get ('https://jsonplaceholder.typicode.com/users/')
    .then((res)=> {
      setData(res.data)
    })
      
  },[])

  console.log(myData,'mydata');
  return (
    
    <div>
      
      {myData.map((item)=>{
        item.email
      })}
      
    </div>
  )
}

export default Home
