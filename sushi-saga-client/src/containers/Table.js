import React, { Fragment } from 'react'

const Table = ({ eatenSushi, total, totalSet }) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} key={index} />
    })
  }



  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${total} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table