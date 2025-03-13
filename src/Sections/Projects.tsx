import React from 'react';
import Card from '../Components/Card';
import { projects } from '../../contents.json'

const Projects: React.FC = () => {
    return (
        <section className="" id="services-section">
            <div className="flex flex-col gap-5">
                <h1 className="text-center text-3xl font-semibold">Projects</h1>
                <div className="flex justify-center gap-10 overflow-yscroll">
                    {projects.map((project) => {
                        return <Card heading={project.name} descriptions={project.description} />
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;