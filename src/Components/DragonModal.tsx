import React from 'react'

interface DragonModalProps {
  dragon: {
    name: string,
    description: string,
    flickr_images: string[],
    thrusters: object[],
    active: boolean,
    wikipedia: string,
    dry_mass_kg: number,
    launch_payload_mass: {
      kg: number,
      lb: number
    }
    return_payload_mass: {
      kg: number,
      lb: number
    }
  }
}

const DragonModal: React.FC<DragonModalProps> = (props) => {

  return (
  <div className="tile is-ancestor">
    <div className="tile is-vertical is-8">
      <div className="tile">
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification" id="title">
            <p className="title">{props.dragon.name}</p>
            <p className="subtitle"></p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <figure className="image is-fullwidth">
              <img src={props.dragon.flickr_images[1]} alt={`${props.dragon.name} dragon`} />
            </figure>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification">
          <div className="content">
            {props.dragon.description}
          </div>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification">
        <div className="content">
          <p className="title">Quick Facts</p>
          <div className="content">
            <ul>
              <li>Dry mass (kh): {props.dragon.dry_mass_kg}</li>
              <li>Launch payload mass (kg): {props.dragon.launch_payload_mass.kg}</li>
              <li>Return payload mass (kg): {props.dragon.return_payload_mass.kg}</li>
            </ul>
            <a href={props.dragon.wikipedia} target="_blank" className="subtitle" id="link">See more on Wikipedia</a>
          </div>
        </div>
      </article>
    </div>
  </div>
  )
}

export default DragonModal