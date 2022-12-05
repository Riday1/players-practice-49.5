import React, { useEffect, useState } from 'react';
import './Home.css'
import '../Players/Players'
import Players from '../Players/Players';
import Cart from '../Cart/Cart'
const Home = () => {


    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => setPlayers(data.player))
    }, [search])



    // console.log(players) 


    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    // console.log(search)
    // console.log(players)
    return (
        <div className='home-container'>
            <div className="left-side">
                <div className='search-section'>
                    <input onChange={(e) => handleSearch(e)} className='search-input' type="text" placeholder='Search player' />
                    <button className='btn-search'>Search</button>
                </div>
                {/* <h2>This is from left side</h2> */}
                <Players players={players} setPlayers={setPlayers} cart={cart} setCart={setCart}></Players>
            </div>
            <div className="right-side">
                <Cart cart={cart} setCart={setCart}></Cart>
            </div>
        </div>
    );
};

export default Home;