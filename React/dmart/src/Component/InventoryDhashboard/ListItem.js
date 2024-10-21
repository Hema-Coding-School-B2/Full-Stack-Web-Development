

import React from 'react';

import list from '../item.js'

function ListItem() {
    console.log(list)
  return (
    <div>
        <div>{list.map((item)=>{
            console.log(item.name)
           
            return(
                <div>
                <div>{item.name}</div>
                <img src={item.image} width="200px" height="200px"/>
                </div>
            )
        })}</div>

    </div>
  )
}

export default ListItem