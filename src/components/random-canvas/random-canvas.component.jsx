import React from 'react';

import './random-canvas.styles.scss';

const placeImage = (x, y, imagesUrl) => {
    const image = document.createElement('img');
    image.setAttribute('src', imagesUrl[Math.round(Math.random() * imagesUrl.length)]);
    image.style.left = x + 'px';
    image.style.top = y + 'px';
    document.body.appendChild(image);
}

const RandomCanvas = (mediaFromWP) => {
    const imagesUrl = [];
    for (let i = 0; i < mediaFromWP.mediaFromWP.length; i++) {
        mediaFromWP.mediaFromWP[i].map(item => imagesUrl.push(item.guid.rendered));
    }

    document.addEventListener('click', (event) => {
        event.preventDefault();
        placeImage(event.pageX, event.pageY, imagesUrl);
    });

    return (
        <div className='title'>Click to find out my Artwork</div>
    );
};

export default RandomCanvas;
