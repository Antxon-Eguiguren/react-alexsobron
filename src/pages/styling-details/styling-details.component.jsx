import React from 'react';

import './styling-details.styles.scss';

const StylingDetailsPageComponent = ({ headerHidden }) => {
    return (
        headerHidden ? null : <div>STYLING DETAILS</div>
    );
};

export default StylingDetailsPageComponent;