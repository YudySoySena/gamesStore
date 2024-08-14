import React from 'react'
import './gameCard.css'

function GameCard({ game }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <img src={game.img} alt={game.title} className="img-fluid" />
    </div>
  )
}
import './gameCard.css'

export default GameCard
