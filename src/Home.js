import React from 'react';
import './css/Home.css'

function Home(props) {
    return (
        <div className='body'>
            <div className='grid-container'>
                <div className='grid-item'>
                    <h1>Space Exploration Technologies Corp. trading as SpaceX, is a private American aerospace manufacturer headquartered California.</h1>
                </div>
                <div className='grid-item two'>
                    <img src='./image/Rocket.gif' alt='rocket' />
                </div>

            </div>

        </div>
    );
}

export default Home;