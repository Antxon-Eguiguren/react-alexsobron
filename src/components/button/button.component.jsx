import React from 'react';

import './button.styles.scss';

const ButtonComponent = ({ text, action }) => (
    <button className='btn' onClick={action}>
        <span className='btn__visible'>{text}</span>
        <span className='btn__invisible'>{text}</span>
    </button>
);

export default ButtonComponent;