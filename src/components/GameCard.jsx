import React from 'react';
import './gameCard.css';
import GameRating from './GameRating';

function GameCard({ game }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard">
      <img src={game.img} alt={game.nombre} className="img-fluid" />
      <a href="#" className="like">
        <i className="bi bi-heart-fill"></i>
      </a>
      <div className="gameFeature">
        <span className="gameType">{game.level}</span>
        <GameRating rating={game.rating}/>
      </div>
      <div className="gameTitle mt-4 mb-3">{game.nombre}</div>
      <div className="gamePrice">
        {
          game.dicount !=0 && (
            <>
              <span className="discount"></span>
              <span className="prevPrice">
                ${game.precio.toFixed(2)} COL
              </span>
            </>
          )
        }
      </div>
      <a href="#" className="addBag">
      <i className="bi bi-bag-plus-fill"></i>
      </a>
      </div>
    </div>
  );
}

export default GameCard;
