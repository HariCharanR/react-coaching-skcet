import React from 'react'

function Item({product}) {
  return (
    <div>
      {product.map((item) => {
        return <div>
                    <p>id : {item.id}</p>
                     <img src={item.imageUrl} alt=""  width="100px" height="140px"/>
                     <p> name : {item.name}</p>
                     <p> price : {item.price }</p>

            </div>
      })}
    </div>
  )
}

export default Item
