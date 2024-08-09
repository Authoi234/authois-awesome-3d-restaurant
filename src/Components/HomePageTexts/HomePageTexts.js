import React from 'react';
import '../../css/mainStyle.css';

const HomePageTexts = () => {
    return (
        <div>
            <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold gradient-text" data-text="Welcome to Authoi's Resturant">Welcome to Authoi's Resturant</h1>
            <p className="py-6 md:text-white text-black text-2xl">
                We are one of the largest Online food delivery network Over <br /> The World. We have trained Cheifs and We are trusted by  <br /> many people over the world.
            </p>
        </div>
    );
};

export default HomePageTexts;