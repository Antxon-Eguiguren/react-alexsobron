import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleHeaderHidden } from '../../redux/header/header.actions';
import { Link } from 'react-router-dom';

import './menu.styles.scss';

const MenuComponent = ({ headerHidden }) => {
    const dispatch = useDispatch();

    return (
        <div className={`container ${headerHidden ? 'container--visible' : 'container--invisible'}`} >
            <Link to='/projects' className='container__box container__box--1' onClick={() => dispatch(toggleHeaderHidden())}>Projects</Link>
            <Link to='/jewellery' className='container__box container__box--2' onClick={() => dispatch(toggleHeaderHidden())}>Jewellery</Link>
            <Link to='/photo' className='container__box container__box--3' onClick={() => dispatch(toggleHeaderHidden())}>Photo</Link>
            <Link to='/styling' className='container__box container__box--4' onClick={() => dispatch(toggleHeaderHidden())}>Styling</Link>
            <Link to='/dj' className='container__box container__box--5' onClick={() => dispatch(toggleHeaderHidden())}>DJ</Link>
            <Link to='/about' className='container__box container__box--6' onClick={() => dispatch(toggleHeaderHidden())}>About</Link>
            <Link to='/shop' className='container__box container__box--7' onClick={() => dispatch(toggleHeaderHidden())}>Shop</Link>
            <Link to='/' className='container__box container__box--8' onClick={() => dispatch(toggleHeaderHidden())}>Home</Link>
        </div>
    );
};

export default MenuComponent;