import React from 'react'
import Dragon from '../Interfaces/Dragon'

interface DragonCardProps {
  dragons: {
    name: string,
    description: string,
    flickr_images: string[]
  }[],
  modal: boolean,
  toggleModal: Function
}

const DragonCard: React.FC<DragonCardProps> = (props) => {

  return (
  <>
    {props.dragons.map((dragon: Dragon, index: number) => {
      return <div key={index} className="column is-half slide-in-right" onClick={() => props.toggleModal(dragon)}>
        <h1 className="spacex-title">{dragon.name}</h1>
        <div className="card-image">
          <figure className='image is-1by1 is-centered'>
            <img src={dragon.flickr_images[0]} alt={`${dragon.name} dragon`}></img>
          </figure>
        </div>
      </div>
    })}
  </>
  )
}

export default DragonCard