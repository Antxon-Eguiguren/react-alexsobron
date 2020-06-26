import React from 'react';

import './homepage.styles.scss';

const HomePageComponent = ({ headerHidden }) => {
    return (
        headerHidden ? null :
            <div className='home'>
                <div className='home__letters'>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex'>ALEX SOBRON</div>
                    <div className='home__alex home__last'>ALEX SOBRON</div>
                </div>
                <div className='home__image'></div>
            </div >
    );
};

export default HomePageComponent;