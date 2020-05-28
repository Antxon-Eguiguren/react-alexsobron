import React from 'react';

import './djpage.styles.scss';

const DjPageComponent = ({ headerHidden }) => {
    return (
        headerHidden ? null : <div>DJ</div>
    );
};

export default DjPageComponent;