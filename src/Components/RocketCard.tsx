import React from 'react'
import Rocket from '../Interfaces/Rocket'

interface RocketCardProps {
  rockets: Rocket[],
    modal: boolean,
    toggleModal: Function
}


const RocketCard: React.FC<RocketCardProps> = (props) => {
  return (
  <>
    {props.rockets.map((rocket: Rocket, index: number) => {
      return <div key={index} className="column is-one-half-desktop is-half-tablet slide-in-left" onClick={() => props.toggleModal(rocket)}>
        <h1 className="spacex-title">{rocket.rocket_name}</h1>
        <div className="card-image">
          <figure className='image is-1by1 is-centered'>
            <img src={rocket.flickr_images[0]} alt={`${rocket.rocket_name} rocket`} />
          </figure>
        </div>
      </div>
    })}
  </>
  )
}
export default RocketCard


