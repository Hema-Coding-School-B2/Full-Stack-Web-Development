import React from 'react'

const Amount = (props) => {
    console.log(`This is Amount component ${props.item}`)

  return (
    <div>
        <h2>{props.item}</h2>
    </div>
  )
}

export default React.memo(Amount)