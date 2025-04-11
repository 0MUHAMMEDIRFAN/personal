// import

import { motion } from "framer-motion"
import React from "react";

const SectionWrapper = (Component: React.FC, idName: string) =>
    function HOC() {
        return (
            <motion.section
                // variants={}
                // animate={{ scale: 1.1, transition: { duration: 2 } }}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className="relative z-0 sm:px-16 px-6 sm:py-16 py-10"
            >
                <span className='' id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        );
    }

export default SectionWrapper;