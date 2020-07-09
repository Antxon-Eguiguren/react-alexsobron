import React from 'react';
import { useHistory } from 'react-router-dom';

import StylingOverviewComponent from '../../components/styling-overview/styling-overview.component';

import './stylingpage.styles.scss';

import Volver from '../../assets/images/volver-home.jpg';
import Villa from '../../assets/images/villa-les-roses-home.jpg';

const StylingPageComponent = ({ headerHidden }) => {
    // const history = useHistory();

    // const handleClick = (route) => {
    //     history.push(`/styling/${route}`);
    // }

    return (
        headerHidden ? null :
            <div className='styling'>
                <StylingOverviewComponent img={Volver} title='Volver' />
                <StylingOverviewComponent img={Villa} title='Villa Les Roses' />
            </div>
    );
};

export default StylingPageComponent;