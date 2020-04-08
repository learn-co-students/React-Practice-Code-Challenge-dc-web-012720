import React from 'react'

const MoreButton = (props) => {
  console.log("props in more button")
  console.log(props)
    return <button onClick={props.handleMoreButton}>
            More sushi!
          </button>
}

export default MoreButton