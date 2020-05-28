import React from 'react';

import './aboutpage.styles.scss';

const AboutPageComponent = ({ headerHidden }) => {
    return (
        headerHidden ? null : <div>ABOUT</div>
    );
};

export default AboutPageComponent;