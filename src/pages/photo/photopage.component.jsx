import React from 'react';

import './photopage.styles.scss';

const PhotoPageComponent = ({ headerHidden }) => {
    return (
        headerHidden ? null : <div>PHOTO</div>
    );
};

export default PhotoPageComponent;