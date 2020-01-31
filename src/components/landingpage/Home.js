import React from 'react';
import HomeHead from './HomeHead';
import HomeFooter from './HomeFooter';
import HomeBody from './HomeBody';

const Home = () => {
    return (
        <div className="flex-column">
                <HomeHead />
                <HomeBody />
                <HomeFooter />
        </div>
    );
};

export default Home;