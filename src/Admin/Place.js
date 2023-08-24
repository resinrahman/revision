import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './table.css'
const Place = () =>{
  const [place,setPlace] = useState("")
  const [showPlace, setShowPlace]= useState([])
  const inputData = () =>{
    const data = {
      name : place,
    }
    axios.post('http://localhost:4000/place',data).then((response)=>{
      console.log(response.data);
      Fetchplace();
    })
  }
  const clear = (id) =>{
    console.log(id);
    axios.delete(`http://localhost:4000/place/${id}`).then((response) =>{
      Fetchplace();
      console.log(response.data);
    })
  }

  const Fetchplace = () => {
    axios.get('http://localhost:4000/place').then((response)=>{
      console.log(response.data.place);
      setShowPlace(response.data.place)
    })
  }

  useEffect(()=>{
    Fetchplace();
   
  },[])

  return (
    <div>
        <div>
            <input type='text' onChange={(e)=>setPlace(e.target.value)}/>
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
            showPlace.map((place,index) =>(
              <tr key={index}>
              <td>{index+1}</td>
               <td>{place.place_name}</td>
               <td><button onClick={()=>{clear(place.place_id)}}>delete</button></td>
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

export default Place