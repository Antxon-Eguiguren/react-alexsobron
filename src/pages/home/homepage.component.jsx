import React from 'react';

import './homepage.styles.scss';

const HomePageComponent = ({ headerHidden }) => {
    return (
        headerHidden ? null : <div>HOME</div>
    );
};

export default HomePageComponent;