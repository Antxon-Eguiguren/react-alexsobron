import React from 'react';

import './projectspage.styles.scss';

const ProjectsPageComponent = ({ headerHidden }) => {
    return (
        headerHidden ? null : <div>PROJECTS</div>
    );
};

export default ProjectsPageComponent;