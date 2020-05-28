import React from 'react';

import './jewellerypage.styles.scss';

const JewelleryPageComponent = ({ headerHidden }) => {
    return (
        headerHidden ? null : <div>JEWELLERY</div>
    );
};

export default JewelleryPageComponent;