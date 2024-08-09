import React from 'react';
import HomePageTexts from '../../Components/HomePageTexts/HomePageTexts';
import burgerWithMan from '../../assets/burgerWithMan.webp';
import '../../css/mainStyle.css';

const Homepage = () => {
    return (
        <div className='md:m-2 md:p-2 m-1 p-1'>
            <div>
                <div className="md:flex md:justify-center md:items-center hiding-position">
                    <div className='md:w-3/4 md:4/5'>
                        <img className='w-full' src={burgerWithMan} alt="" />
                    </div>
                    <div>
                        <HomePageTexts></HomePageTexts>
                    </div>
                </div>
            </div>
            <div>
                <video style={{ width: '100vw' }} autoPlay loop muted>
                    <source src={require('../../assets/homeVideo.mp4')} type='video/mp4' />
                </video>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Homepage;