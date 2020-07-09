import React from 'react';

import Carousel from 'nuka-carousel';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import './photopage.styles.scss';

const PhotoPageComponent = ({ headerHidden, mediaFromWP }) => {
    return (
        headerHidden ? null :
            <div className='carousel'>
                <Carousel
                    transitionMode='fade'
                    slidesToShow={2}
                    dragging={true}
                    renderBottomCenterControls={null}
                    renderCenterLeftControls={({ previousSlide }) => (
                        <button className='carousel__arrow' onClick={previousSlide}>
                            <FiArrowLeft strokeWidth='0.3' size={100} />
                        </button>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <button className='carousel__arrow' onClick={nextSlide}>
                            <FiArrowRight strokeWidth='0.3' size={100} />
                        </button>
                    )}
                >
                    {
                        mediaFromWP.map(item => {
                            return item.alt_text === 'polaroid' ?
                                <img src={item.source_url} alt={item.title.rendered} key={item.id}></img> : null
                        })
                    }
                </Carousel>
            </div >
    );
};

export default PhotoPageComponent;