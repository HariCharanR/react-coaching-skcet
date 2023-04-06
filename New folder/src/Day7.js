import React from 'react'
import user from "./data.json"
function Day7() {
  // const [data,setData] = useState([]);

  // const fetchData = async () => {
  //     await axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //         setData(res.data);
  //     })
  // }
  // useEffect(() => {
  //     fetchData();
  // },[])
 
  return(
  <table>
      {user.user.map((item) => {
          return (
              <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.author}</td>
                  
              </tr>
          )
      })}
  </table>
)
}

export default Day7
