import React from 'react';
import Card from '../Components/Card';
import contents from '../../contents.json';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion'

const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

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


const ProjectCard = ({
    index,
    name,
    description,
    technologies,
    image,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            {/* <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
                > */}
            <div className='bg-primary-alt p-5 rounded-2xl sm:w-[360px] w-full'>

                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6DXuvit57V1DmjnlLcwst4O-sTL5D37gIQ&s"}
                                alt='source code'
                                className='w-1/2 h-1/2 rounded-full object-contain'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px] h-40 overflow-auto'>
                        {description.map((point, index) => (
                            <li
                                key={`experience-point-${index}`}
                                className='text-white-100 text-[14px] pl-1 tracking-wider'
                            >
                                {point}
                            </li>
                        ))}
                    </p>
                </div>

                <div className='mt-4 flex flex-wrap gap-x-2'>
                    {technologies.map((technology) => (
                        <p
                            key={`${name}-${technology}`}
                            className={`text-[14px]`}
                        >
                            #{technology}
                        </p>
                    ))}
                </div>
            </div>

            {/* </Tilt> */}
        </motion.div>
    );
};

const Projects: React.FC = () => {
    return (
        // <div className="flex flex-col items-center gap-5">
        //     <h1 className="text-3xl font-semibold">Projects</h1>
        //     <div className="flex justify-start gap-10 w-full overflow-x-scroll">
        //         {projects.map((project, index) => {
        //             return <Card key={index} heading={project.name} descriptions={project.description} />
        //         })}
        //     </div>
        // </div>

        <>
            <motion.div variants={textVariant()}>
                <p className={"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center"}>
                    My work</p>
                <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>
                    Projects.</h2>
            </motion.div>

            <div className='w-full flex justify-center text-center'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7 justify-center'>
                {contents.projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Projects, "projects");