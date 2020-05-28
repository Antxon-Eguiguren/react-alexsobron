import React from 'react';

import './stylingpage.styles.scss';

const StylingPageComponent = ({ headerHidden }) => {
    return (
        headerHidden ? null : <div>STYLING</div>
    );
};

export default StylingPageComponent;