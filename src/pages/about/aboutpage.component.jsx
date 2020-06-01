import React, { useEffect } from 'react';

import hoverEffect from 'hover-effect';

import './aboutpage.styles.scss';

const AboutPageComponent = ({ headerHidden }) => {
    useEffect(() => {
        new hoverEffect({
            parent: document.querySelector('.about__image'),
            intensity: 0.1,
            angle2: Math.PI / 2,
            imagesRatio: 1,
            image1: 'hover-effect/images/about1.jpg',
            image2: 'hover-effect/images/about1.jpg',
            displacementImage: 'hover-effect/distortion/6.jpg'
        });
    }, []);

    return (
        headerHidden ? null :
            <div>
                <section className='about'>
                    <div className='about__image'></div>
                    <div className='about__text'>
                        <h2>BIO</h2>
                        <p>Ut volutpat sodales urna vel maximus. Suspendisse potenti. Etiam placerat metus at nisi tempor faucibus suscipit nec augue. Donec consectetur pretium nisi scelerisque faucibus. Integer dolor nunc, pharetra sed molestie id, dictum ut dui. Donec viverra euismod pellentesque. Fusce consequat orci ac mauris consequat fringilla. Nullam fermentum arcu a turpis convallis malesuada. In hac habitasse platea dictumst. In fringilla congue posuere. Pellentesque aliquam dolor a turpis laoreet efficitur. Sed et iaculis ante, ac tincidunt lacus. Quisque eu mi id quam laoreet volutpat a interdum nisl. Vivamus maximus velit sed velit dapibus fermentum. Etiam urna nibh, tincidunt ac velit sit amet, vehicula egestas purus. Donec ante ipsum, pharetra congue dolor a, iaculis pellentesque metus.</p>

                        <p>Morbi mollis nisi nec lobortis facilisis. Sed auctor tellus nunc, quis dictum leo suscipit nec. Donec varius libero vitae nulla vestibulum auctor. Nullam sollicitudin pharetra sapien, non blandit massa cursus sed. Aenean id aliquet sem. Mauris diam sapien, venenatis ut lacinia a, pharetra imperdiet justo. Integer viverra mi vitae augue tempor, ac lacinia arcu pretium. Vestibulum posuere convallis velit vel rutrum.</p>

                        <p>Aenean venenatis neque ac orci aliquet mattis. Nunc ac turpis viverra leo gravida dignissim. Donec ac porta magna. Duis sapien turpis, faucibus quis finibus et, lacinia vitae turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus accumsan fermentum neque, et lobortis sapien lobortis at. Ut tempus arcu et egestas suscipit. Pellentesque accumsan nunc at nulla facilisis, eu bibendum neque placerat. Aliquam vitae elit euismod, cursus risus ac, sollicitudin urna. Nam dignissim laoreet quam sit amet laoreet. In quis malesuada lacus. Donec risus lorem, laoreet vestibulum justo id, molestie vehicula libero. Mauris varius viverra lectus eget elementum. Donec lobortis ex nec quam mattis ornare. Fusce non elementum velit.</p>

                        <p>Aenean accumsan sapien id nisi consectetur, at tempor lectus congue. Donec pulvinar convallis vehicula. Maecenas mattis quam tortor, non suscipit nisl ultricies vitae. Sed elementum tortor non odio cursus, vitae molestie lacus gravida. Proin sollicitudin nunc non sagittis lobortis. Quisque viverra nec justo non accumsan. Nulla vitae ante ut nisi pellentesque egestas sed ut urna. Vivamus eget purus pharetra, efficitur sapien a, semper tortor. Curabitur felis arcu, dignissim et auctor id, porttitor ac mi. In nec nisl rhoncus turpis eleifend bibendum. Mauris hendrerit tempus dignissim. Quisque imperdiet leo et metus pretium vestibulum. Cras at dignissim diam. Phasellus lorem arcu, ultrices eget convallis at, condimentum vel sapien. Ut id sem vitae felis varius elementum. Vivamus vitae scelerisque urna.</p>
                    </div>
                </section>
                <div className='contact'>
                    <a className='contact__email' href='mailto:axlsobron@gmail.com'>Email</a>
                    <a className='contact__phone' href='tel:618888703'>Phone</a>
                </div>
            </div>
    );
};

export default AboutPageComponent;