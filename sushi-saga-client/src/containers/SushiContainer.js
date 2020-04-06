import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderMoreSushi = () => {
    return props.sushi.map(s => {
      return <Sushi sushi={s} key={s.id} eat={props.eat} taken={props.eaten.includes(s)}/>
    })
  }
  return (
    <Fragment>
      <div className="belt">
        { renderMoreSushi() }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
