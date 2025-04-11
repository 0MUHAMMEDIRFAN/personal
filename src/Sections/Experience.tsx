import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import "react-vertical-timeline-component/style.min.css";

import contents from '../../contents.json';

const ExperienceCard: React.FC<{ title: string, company: string, duration: string, tenure: string, description: string[], icon?: string }> = ({ title, company, duration, tenure, description, icon }) => (
    <VerticalTimelineElement
        contentStyle={{ background: "#ff00ff", color: '#fff' }}
        contentArrowStyle={{ borderRight: "solid 1px #000" }}
        date={duration}
        iconStyle={{}}
        icon={""}
    >
        <div>
            {title}
            {company}
            {tenure}
            {description}
            {icon}
        </div>
    </VerticalTimelineElement>
)

const Experience: React.FC = () => {
    return (
        <section className="" id="">
            <div className="">
                <h1 className="">Experience</h1>
                <div className="">
                    <VerticalTimeline>
                        {contents.experience.map((exp, index) => (
                            <ExperienceCard key={index}
                                title={exp.role}
                                company={exp.company}
                                description={exp.responsibilities}
                                duration={exp.duration}
                                tenure={exp.tenure}
                            />
                        ))}
                    </VerticalTimeline>

                </div>
            </div>
        </section>
    );
};

export default Experience;