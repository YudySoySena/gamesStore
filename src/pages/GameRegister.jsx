import React from 'react'
import './gameRegister.css'

function GameRegister() {
  return (
    <div className="gameRegister">
        <h1>Registrar Nuevo Juego</h1>
        <form action="">
            <label>
                Nombre:
                <input type="text" name="nombre"/>
            </label>
        </form>
    </div>
  )
}

export default GameRegister