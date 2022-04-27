import React from 'react';
import pfp from '../assets/awsImage.jpg';
import ProjectCard from '../Helpers/ProjectCard';

const WebDev = () => {
  return (
    <>
      <div className="info">
        <section className="skills-container">
          <h3>Built With</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Docker</li>
            <li>Elastic Container Service</li>
          </ul>
        </section>
        <section className="projects-container">
          <h3>Brought to You By...</h3>
          <ul>
            <li>
              <ProjectCard
                class="web-project"
                imgSource={pfp}
                title="AWS TECH U"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                links={[]}
              ></ProjectCard>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default WebDev;
