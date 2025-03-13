import React from 'react';

const TopBar: React.FC = () => {
    return (
        <header className="fixed z-10 w-full p-4 font-medium">
            <div className="backdrop-blur-md border rounded-md flex justify-between p-4">
                <div className="">
                    <h2>MUHAMMED IRFAN</h2>
                </div>
                <div className="flex gap-4 max-sm:hidden" id="navbarSupportedContent">
                    <div className=""><a className="" href="#Home-section">HOME</a></div>
                    <div className=""><a className="" href="#Experience-section">Experiences</a></div>
                    <div className=""><a className="" href="#services-section">services</a></div>
                    <div className="relative group">
                        <a className="cursor-pointer" href="#" id="navbarDropdown">Available In</a>
                        <div className="hidden group-hover:flex flex-col gap-2 absolute top-[200%] border rounded-md px-4 right-0 backdrop-blur-md">
                            <a className="" href="https://www.facebook.com/0muhammedirfan">Facebook</a>
                            <a className="" href="https://linkedin.com/in/0muhammedirfan">Linked In</a>
                            <a className="" href="https://x.com/0muhammedirfan">Twitter</a>
                            <a className="" href="https://www.instagram.com/0muhammedirfan/">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default TopBar;