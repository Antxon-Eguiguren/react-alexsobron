import React from 'react';

import './shoppage.styles.scss';

const ShopPageComponent = ({ headerHidden }) => {
    return (
        headerHidden ? null : <div>SHOP</div>
    );
};

export default ShopPageComponent;