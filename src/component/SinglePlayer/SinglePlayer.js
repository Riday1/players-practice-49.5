import React from 'react';
import { useState } from 'react';
import './SinglePlayer.css'
const SinglePlayer = ({ player, setCart, cart }) => {
    // console.log(player)
    const [bookMark, setBookMark] = useState([])
    const { idPlayer, strCutout, strHeight, strNationality, strPlayer } = player;
    const info = {
        idPlayer,
        strCutout,
        strPlayer,

    };

    // Add to Cart section 
    const handleAddToCart = () => {
        if (cart.length < 5) {
            const isExist = cart.find(player => player.idPlayer === info.idPlayer)
            if (!isExist) {

                const newCart = [...cart, info]
                setCart(newCart)
            }
            else {
                alert('it already exist');
            }
        }
        else {
            alert('you cannot add more than 5 people');
        }
    }

    // Bookmark section 


    const handleAddToBookMark = () => {
        const bookMark = [];
        const storedBookMark = JSON.parse(localStorage.getItem('book-mark'))
        if (storedBookMark) {
            const isExists = storedBookMark.find(id => id === idPlayer)
            if (isExists) {

                const rest = storedBookMark.filter(id => id !== idPlayer)
                alert('removed from book marked')
                localStorage.setItem('book-mark', JSON.stringify(rest))

            }
            else {
                alert('Book Marked')
                const newBookMark = [...storedBookMark, idPlayer];
                localStorage.setItem('book-mark', JSON.stringify(newBookMark))
            }
        }
        else {
            alert('book-marked')
            bookMark.push(idPlayer)

            localStorage.setItem('book-mark', JSON.stringify(bookMark))
        }
    }
    return (
        <div className='single-player'>
            <img src={strCutout} alt="" />
            <h3>{strPlayer}</h3>
            <p><small>{strHeight} {strNationality}</small></p>
            <div className='btn-section'>
                <button onClick={() => handleAddToCart()} className='btn-add'>Add To Cart</button>
                <button onClick={() => handleAddToBookMark()} className='btn-bookMark'>BookMark</button>
            </div>
        </div>
    );
};

export default SinglePlayer;