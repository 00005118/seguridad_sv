import React from 'react'
import './LandingCards.css'
import card1 from '../../assets/residential-area.avif'
import card2 from '../../assets/vector1.jpeg'
import card3 from '../../assets/admin.avif'
import card_icon_1 from '../../assets/program-icon-1.png'
import card_icon_2 from '../../assets/program-icon-2.png'
import card_icon_3 from '../../assets/program-icon-3.png'

const LandingCards = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={card1} alt="" />
            <div className="caption">
                <img src={card_icon_1} alt="" />
                <p>Manejo de múltiples hogares</p>
            </div>
        </div>
        <div className="program">
            <img src={card2} alt="" />
            <div className="caption">
                <img src={card_icon_2} alt="" />
                <p>Seguridad asegurada</p>
            </div>
        </div>
        <div className="program">
            <img src={card3} alt="" />
            <div className="caption">
                <img src={card_icon_3} alt="" />
                <p>Panel de administrador</p>
            </div>
        </div>
    </div>
  )
}

export default LandingCards