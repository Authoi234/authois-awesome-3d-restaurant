import React from 'react';
import HomePageTexts from '../../Components/HomePageTexts/HomePageTexts';
import burgerWithMan from '../../assets/burgerWithMan.webp';

const Homepage = () => {
    return (
        <div>
            <div className='absolute'>
                <div className="w-full md:flex md:justify-center md:items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    <img src={burgerWithMan} alt="" />
                    <HomePageTexts></HomePageTexts>
                </div>

            </div>
            <div>
                <video style={{ width: '100vw' }} height={1000} autoPlay loop muted>
                    <source src={require('../../assets/homeVideo.mp4')} type='video/mp4' />
                </video>
            </div>
        </div>
    );
};

export default Homepage;