import React from 'react';
import './Cart.css'
const Cart = ({ cart, setCart }) => {
    // console.log(cart);
    const handleDeleteFromCart = (id) => {
        const rest = cart.filter(player => player.idPlayer !== id);
        setCart(rest);

    }
    return (
        <div className='cart-section'>
            <p>This is Cart Cointainer</p>

            {
                cart.map(player => <div>

                    {player.strPlayer}<button onClick={() => handleDeleteFromCart(player.idPlayer)}>X</button>
                </div>)
            }
        </div>
    );
};

export default Cart;