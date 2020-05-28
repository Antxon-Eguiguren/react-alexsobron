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
            <div>
                <ButtonComponent text='Menu' action={() => dispatch(toggleHeaderHidden())} />
            </div>
            <div>
                <Link to='/'>
                    <img className='header--visible__logo' src={Logo} alt="Logo" />
                </Link>
            </div>
            <div>
                <a className='header--visible__ig' href='https://www.instagram.com/axlsobron/' target='_blank' rel='noopener noreferrer'>Instagram</a>
            </div>
        </div>
    )
};

export default HeaderComponent;