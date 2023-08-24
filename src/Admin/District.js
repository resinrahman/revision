import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './table.css'
const District = () => {
    const [district, setDistrict]= useState("")
    const [showDistrict, setShowDistrict]= useState([])
    const inputData = () =>{
      const data = {
        district : district,
      }
      axios.post('http://localhost:4000/district',data).then((response) => {
        
      FetchDistrict();
        console.log(response.data);
      })
    }
    const clear = (id) =>{
      console.log(id);
      axios.delete(`http://localhost:4000/district/${id}`).then((response) =>{
        FetchDistrict();
        console.log(response.data);
      })
    }

    const FetchDistrict = () => {
      axios.get('http://localhost:4000/district').then((response)=>{
        console.log(response.data.District);
        setShowDistrict(response.data.District)
      })
    }

    useEffect(()=>{
      FetchDistrict();
     
    },[])
  return (
    <div>
        <div>
            <input type='text' onChange={(e)=>setDistrict(e.target.value)}/>
            <button onClick={inputData}>Submit</button>
        </div>
        <div>
         { 
         <div>
          <table border={1}>
           
              
           <tr>
               <td>id</td>
               <td>Name</td>
               <td>Action</td>
             
             </tr>
           
           {
            showDistrict.map((district,index) =>(
              <tr key={index}>
              <td>{index+1}</td>
               <td>{district.district_name}</td>
               <td><button onClick={()=>{clear(district.district_id)}}>delete</button></td>
              </tr>
            ))
           }
           
          </table>
         </div>
          }
        </div>
        
    </div>
  )
}

export default District