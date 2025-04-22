import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion'
import "react-vertical-timeline-component/style.min.css";

import contents from '../../contents.json';


const ExperienceCard = ({ title, company, duration, tenure, description, icon }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#093820",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={tenure}
            iconStyle={{ background: "#000" }}
            icon={
                <div className='flex text-[#1d1836] justify-center items-center w-full h-full rounded-full overflow-hidden'>
                    <img
                        src={icon}
                        alt={company}
                        className='w-[100%] h-[100%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {company}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {description.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

// const ExperienceCard: React.FC<{ title: string, company: string, duration: string, tenure: string, description: string[], icon?: string }> = ({ title, company, duration, tenure, description, icon }) => (
//     <VerticalTimelineElement
//         contentStyle={{ background: "#ff00ff", color: '#fff' }}
//         contentArrowStyle={{ borderRight: "solid 1px #000" }}
//         date={duration}
//         iconStyle={{}}
//         icon={""}
//     >
//         <div>
//             {title}
//             {company}
//             {tenure}
//             {description}
//             {icon}
//         </div>
//     </VerticalTimelineElement>
// )
const textVariant = (delay) => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay,
            },
        },
    };
};

const Experience: React.FC = () => {
    return (
        <section className="" id="">
            <motion.div variants={textVariant()}>
                <p className={"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center"}>
                    What I have done so far
                </p>
                <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>
                    Work Experience.
                </h2>
            </motion.div>
            <div className="">
                <VerticalTimeline>
                    {contents.experience.map((exp, index) => (
                        <ExperienceCard key={index}
                            title={exp.role}
                            company={exp.company}
                            description={exp.responsibilities}
                            duration={exp.duration}
                            tenure={exp.tenure}
                            icon={exp.icon}
                        />
                    ))}
                </VerticalTimeline>

            </div>
        </section>
    );
};

export default Experience;