import React, { Fragment } from 'react'

const Sushi = (props) => {
  let {name, price, img_url} = props.sushi
  return (
    <Fragment>
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.handleEating(props.sushi)}>
        { 
          props.eatenSushi.includes(props.sushi) ?
            null
          :
            <img src={img_url} width="100%" alt = "sushi"/>
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
    </Fragment>
  )
}

export default Sushi