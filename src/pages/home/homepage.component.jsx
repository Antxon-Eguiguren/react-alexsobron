import React, { useEffect } from 'react';

import useImportScript from '../../custom-hooks/import-script/import-script';

import './homepage.styles.scss';

const HomePageComponent = ({ headerHidden }) => {
    useImportScript('https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/blotter.min.js');
    useImportScript('https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/materials/liquidDistortMaterial.min.js');

    useEffect(() => {
        // const text = new window.Blotter.Text('Alex Sobron', {
        //     family: "'EB Garamond', serif",
        //     size: 150,
        //     fill: '#171717',
        //     paddingLeft: 40,
        //     paddingRight: 40
        // });

        // const material = new window.Blotter.LiquidDistortMaterial();
        // material.uniforms.uSpeed.value = 0.25;

        // const blotter = new window.Blotter(material, {
        //     texts: text
        // });

        // const elem = document.querySelector('.home__text-distorted');
        // const scope = blotter.forText(text);

        // scope.appendTo(elem);
    }, []);

    return (
        headerHidden ? null :
            <div className='home'>
                <div className='home__text-distorted'></div>
            </div>
    );
};

export default HomePageComponent;