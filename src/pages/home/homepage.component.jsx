import React from 'react';

import useImportScript from '../../custom-hooks/import-script/import-script';

import './homepage.styles.scss';

const HomePageComponent = ({ headerHidden }) => {

    useImportScript('blotter.min.js');

    // const text = new Blotter.Text("Alex Sobron", {
    //     family: "'EB Garamond', serif",
    //     size: 27,
    //     fill: "#171717",
    //     paddingLeft: 40,
    //     paddingRight: 40
    // });

    // const material = new Blotter.LiquidDistortMaterial();
    // material.uniforms.uSpeed.value = 0.25;

    // const blotter = new Blotter(material, {
    //     texts: text
    // });

    // const elem = document.querySelector(".home__text-distorted");
    // const scope = blotter.forText(text);

    // scope.appendTo(elem);

    return (
        headerHidden ? null :
            <div className='home'>
                <div className='home__text-distorted'></div>
            </div>
    );
};

export default HomePageComponent;