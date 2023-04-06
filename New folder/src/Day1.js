import React from 'react'
function Day1() {
 
const alertBox=()=>{
    alert('Message from Javascript Developer');
}
const presence =()=>{
    console.log("Message to Developer");
}
const myarray=['a','e','i','o','u'];
const check=()=>{
    alert("Check console");
    myarray.push('u');
    console.log(myarray);
}
  return (
    <div>
       <div >
    <button  id="b1" onClick={alertBox}>Click Me</button>

    <button  id="b2" onClick={presence}>Click Me</button>

    <button  id="b3" onClick={check}>click me</button>
    </div>
    </div>
  )
}

export default Day1
