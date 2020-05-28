import React from 'react';

import './canvaspage.styles.scss';

const CanvasPageComponent = ({ mediaFromWP }) => {
    const imagesUrl = [];
    mediaFromWP.map(item => imagesUrl.push(item.guid.rendered));

    const placeImage = (x, y, imagesUrl) => {
        const image = document.createElement('img');
        image.classList.add('canvas__image');
        image.setAttribute('src', imagesUrl[Math.round(Math.random() * imagesUrl.length)]);
        image.style.left = x + 'px';
        image.style.top = y + 'px';
        document.body.appendChild(image);
    }

    document.addEventListener('click', (event) => {
        event.preventDefault();
        placeImage(event.pageX, event.pageY, imagesUrl);
    });

    return (
        <div className='canvas'>
            <p className='canvas__text'>Click to find out my Artwork</p>
        </div>
    );
};

export default CanvasPageComponent;