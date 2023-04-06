import React from 'react'
import { Link } from 'react-router-dom'

function Day9() {
  return (
    <div>
      <div style={{backgroundColor:"blue" , color:"white",display:"flex" }}>
         <Link to="/singers" >
              Singers
         </Link>
         <Link to="/albums">
          Albums
         </Link>
      </div>

      <h1>Welcome to the  music player app </h1>


    </div>
  )
}

export default Day9
