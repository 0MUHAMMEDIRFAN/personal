import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="mt-4 ">
            <div className="">
                <div className="flex flex-col gap-1 items-center">
                    <div className="flex gap-1.5">
                        <a href="https://www.facebook.com/muhammedirfan.mhdirfan" className="!text-tertiary text-2xl"><i className="fa-brands fa-facebook mr-1"></i></a>
                        <a href="https://www.instagram.com/m_uhmd_irfan/" className="!text-tertiary text-2xl"><i className="fa-brands fa-instagram mr-1"></i></a>
                        <a href="https://twitter.com/MUHAMME86828964" className="!text-tertiary text-2xl"><i className="fa-brands fa-twitter mr-1"></i></a>
                        <a href="https://linkedin.com/in/muhammed-irfan-b46253240" className="!text-tertiary text-2xl"><i className="fa-brands fa-linkedin-in mr-1"></i></a>
                    </div>
                    <p className='font-medium'>Copyright ©0MUHAMMEDIRFAN | 2025</p>
                    <p className='text-xs'>Crafted by MySelf</p>
                </div>
            </div>
        </footer >

    );
};

export default Footer;