import React from 'react';

import './styling-overview.styles.scss';

const StylingOverviewComponent = ({ img, title }) => (
    <div className='styling__container'>
        <img src={img} alt={img} className='styling__image' />
        <div className='styling__overlay'>
            <div className='styling__text'>{title}</div>
        </div>
    </div>
);

export default StylingOverviewComponent;