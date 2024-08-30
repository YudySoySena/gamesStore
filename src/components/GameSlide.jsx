import React from 'react'
import { SwiperSlide } from "swiper/react";

function GameSlide({game, active, toggleVideo}) {
  return (
      <SwiperSlide key={game._id}>
          <div className="gameSlider">
            <img src={game.img} alt="Game Image" />
            <div className={`video ${active ? 'active' : undefined}`}>
            <iframe
                width="771"
                height="434"
                src={game.trailer}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
              ></iframe>
            </div>
            <div className="content">
              <h2>{game.nombre}</h2>
              <p>{game.descripcion}</p>
              <div className="buttons">
                <a href="#" className="orderBtn">
                  Agregar
                </a>
                <a
                  href="#"
                  className={`playBtn ${active ? 'active' : undefined}`}
                  onClick={toggleVideo}
                >
                  <span className="pause">
                    <i className="bi bi-pause-fill"></i>
                  </span>
                  <span className="play">
                    <i className="bi bi-play-fill"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
  )
}

export default GameSlide
