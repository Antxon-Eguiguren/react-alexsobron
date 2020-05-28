import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleHeaderHidden } from '../../redux/header/header.actions';
import { Link } from 'react-router-dom';

import ButtonComponent from '../button/button.component';

import Logo from '../../assets/logo.png';
import './header.styles.scss';

const HeaderComponent = () => {
    const headerHidden = useSelector(state => state.headerHidden);
    const dispatch = useDispatch();

    return (
        <div className={`${headerHidden ? 'header--invisible' : 'header--visible'}`}>
            <ButtonComponent text='Menu Principal' action={() => dispatch(toggleHeaderHidden())} />
            <div className='header--visible__logo'>
                <Link to='/'><img src={Logo} alt="Logo" /></Link>
            </div>
            <a className='header--visible__ig' href='https://www.instagram.com/axlsobron/' target='_blank' rel='noopener noreferrer'>Instagram</a>
        </div>
    )
};

export default HeaderComponent;