import React, { useEffect, useState } from "react";

function Day8() {
  const [message , setMessage] = useState("")
  useEffect(() => {
    console.log('use effect hook called');
    setTimeout(() =>{
      setMessage("Great... This is time to learn about HOOK")
    }, 3000)
  })

  return (
    <div>
      <h1>Day 8: </h1>
      <h1>{message}</h1>
    </div>
  );
}

export default Day8;
