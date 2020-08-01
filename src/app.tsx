import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './style.scss'
import 'bulma'

// Commenting the below out and replacing with an external link as it didn't work on deployment
// const spaceXLogo: string = './assets/spacex-logo.jpg'

// Interfaces
import Rocket from './Interfaces/Rocket'
import Dragon from './Interfaces/Dragon'

// Checkers
import isRocket from './Checkers/RocketChecker'
import isDragon from './Checkers/DragonChecker'

// Components
import RocketCard from './Components/RocketCard'
import DragonCard from './Components/DragonCard'
import RocketModal from './Components/RocketModal'
import DragonModal from './Components/DragonModal'
import { Toggle } from '@mrshmllw/smores-react';


const App: React.FC = () => {
  const [rockets, setRockets] = useState<Rocket[] | []>([])
  const [dragons, setDragons] = useState<Dragon[] | []>([])
  const [detailView, setDetailView] = useState<Rocket | Dragon | null>(null)
  const [toggle, setToggle] = useState(true)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    Promise.all([axios.get('https://api.spacexdata.com/v3/rockets'), axios.get('https://api.spacexdata.com/v3/dragons')])
      .then(resp => {
        setRockets(resp[0].data)
        setDragons(resp[1].data)
      })
      .catch(errors => {
        console.log(errors)
      })
  }, [])


  const toggleModal = (spaceCraft?: Rocket | Dragon) => {
    setModal(!modal)
    setDetailView(spaceCraft)
  }

  return <div data-test="component-app">
    <div className="toggle-container">
      <img src="https://www.metri-tech.com/wp-content/uploads/2017/01/spacex-logo.jpg" className="space-x-logo"  alt="space x logo"/>
      <span className="logo-and-toggle">
        <h2>Toggle to see {toggle ? 'Dragons 🛰  ' : 'Rockets 🚀 '}</h2>
        <Toggle id="toggle" checked={toggle} onToggle={() => setToggle(!toggle)} />
      </span>
    </div>
    <div className="section card-section">
      <div className="container card-container">
        <div className="columns is-multiline">
          {/* Shows rockets if toggle state is true,
          otherwise shows dragons */}
          {toggle ?
            <RocketCard rockets={rockets} modal={modal} toggleModal={toggleModal} />
            :
            <DragonCard dragons={dragons} modal={modal} toggleModal={toggleModal} />
          }
        </div>
      </div>
    </div>


    <div id="searchbar" className={modal === true ? 'modal is-active' : 'modal'}>
      <div className="modal-background" onClick={() => setModal(!modal)}></div>
      <div className="modal-content modal-stats" id="modal">

        {/* This checks if the clicked on element is a rocket or dragon 
        and returns the appropriate modal accordingly */}
        {detailView ? isRocket(detailView) ? <RocketModal rocket={detailView}/> : isDragon(detailView) ? <DragonModal dragon={detailView}/> : '' : ''}

      </div>
      <button className="modal-close is-large" aria-label="close" onClick={() => setModal(!modal)}></button>
    </div>



  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App