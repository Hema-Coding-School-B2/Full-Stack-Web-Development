import React from 'react'

const Title = () => {
    console.log("This is Title component")
  return (
    <div>Title</div>
  )
}

export default React.memo(Title)