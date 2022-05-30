import React from 'react'
import './PokeCard.css'

const PokeCard = ({id, name, image, type, hp, attack, defence, speed}) => {

    const style = `poke-card ${type}`

  return (
    <div className={style}>
        <div className='poke-header'>
            <p className='poke-id'>#0{id}</p>
            <p className='poke-name'>{name}</p>
        </div>

        <div className='poke-body'>
            <img className='photo' src={image} alt='sex'></img>
            <div className='stat-holder'>
                <p className='poke-stats'>HP: {hp}</p>
                <p className='poke-stats'>ATTACK: {attack}</p>
                <p className='poke-stats'>DEFENCE: {defence}</p>
                <p className='poke-stats'>SPEED: {speed}</p>
            </div>
        </div>

        <div className='poke-footer'>
            <p className='poke-type'>Type: {type}</p>
        </div>

    </div>
  )
}

export default PokeCard