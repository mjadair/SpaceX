import React from 'react'


interface RocketModalProps {
  rocket: {
    rocket_name: string,
    description: string,
    flickr_images: string[],
    cost_per_launch: number,
    wikipedia: string,
    height: {
      meters: number,
      feet: number
    },
    diameter: {
      meters: number,
      feet: number
    },
    mass: {
      kg: number,
      lb: number
    }
  }
}


const RocketModal: React.FC<RocketModalProps> = (props) => {

  return (
  <div className="tile is-ancestor">
    <div className="tile is-vertical is-8">
      <div className="tile">
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification" id="title">
            <p className="title">{props.rocket.rocket_name}</p>
            <p className="subtitle"></p>
          </article>
          <article className="tile is-child notification">
            <p className="subtitle">Cost per launch: ${props.rocket.cost_per_launch}</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <figure className="image is-fullwidth">
            <img src={props.rocket.flickr_images[1]} alt={`${props.rocket.rocket_name} rocket`}/>
            </figure>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification">
          <div className="content">
            {props.rocket.description}
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
              <li>Height (m): {props.rocket.height.meters}</li>
              <li>Diameter (m): {props.rocket.diameter.meters}</li>
              <li>Mass (kg): {props.rocket.mass.kg}</li>
            </ul>
            <a href={props.rocket.wikipedia} target="_blank" className="subtitle" id="link">See more on Wikipedia</a>
          </div>
        </div>
      </article>
    </div>
  </div>
  )
}

export default RocketModal

