import React from 'react';
import Card from '../Components/Card';
import { projects } from '../../contents.json'
import { SectionWrapper } from '../hoc';

const Projects: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="text-3xl font-semibold">Projects</h1>
            <div className="flex justify-start gap-10 w-full overflow-x-scroll">
                {projects.map((project, index) => {
                    return <Card key={index} heading={project.name} descriptions={project.description} />
                })}
            </div>
        </div>
    );
};

export default SectionWrapper(Projects, "projects");