import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Players.css'
const Players = ({ players, setPlayers, setCart ,cart }) => {
    // console.log(players, setPlayers)
    return (
        <div className='players-container'>

            {
                players.map(player => <SinglePlayer
                    player={player}
                    setCart={setCart}
                    cart={cart}
                    key={player.idPlayer}
                ></SinglePlayer>)
            }

        </div>
    );
};

export default Players;