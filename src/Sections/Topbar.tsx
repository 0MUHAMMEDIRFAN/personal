import React, { useState } from 'react';

const TopBar: React.FC = () => {
    const [isCollapse, setIsCollapse] = useState(true)
    const items = [
        { heading: "Home", icon: "", href: "#Home-section", subItems: [] },
        { heading: "Experiences", icon: "", href: "#Experience-section", subItems: [] },
        { heading: "services", icon: "", href: "#services-section", subItems: [] },
        {
            heading: "Available In", icon: "", href: "#", subItems: [
                { heading: "Facebook", href: "https://www.facebook.com/0muhammedirfan" },
                { heading: "Linked In", href: "https://linkedin.com/in/0muhammedirfan" },
                { heading: "Twitter", href: "https://x.com/0muhammedirfan" },
                { heading: "Instagram", href: "https://www.instagram.com/0muhammedirfan/" }
            ]
        }
    ];
    return (
        <header className="fixed z-10 w-full p-4 font-medium">
            <div className="backdrop-blur-md border rounded-md flex justify-between items-center p-4">
                <div className="">
                    <img src=''/>
                    <h2>MUHAMMED IRFAN</h2>
                </div>
                <div className="flex gap-4 max-sm:hidden" id="navbarSupportedContent">
                    {items.map((item, index) => (
                        <div className="relative group" key={index}>
                            <a className="" href={item.href}>{item.heading}</a>
                            {item.subItems ?
                                <div className="hidden group-hover:flex flex-col gap-2 absolute top-[200%] border rounded-md px-4 right-0 backdrop-blur-md">
                                    {item.subItems.map((subItem, index) => (
                                        <a className="cursor-pointer" key={index} href={subItem.href}>{subItem.heading}</a>
                                    ))}
                                </div>
                                : ""}
                        </div>

                    ))}
                </div>
                <div className='sm:hidden cursor-pointer p-2' onClick={() => { setIsCollapse(!isCollapse) }}>
                    <div className='burger_icon' />
                    <div className={`${isCollapse ? "opacity-0 top-1 overflow-hidden" : "top-16"} transition-all  right-0 absolute flex flex-col  rounded-md border backdrop-blur-md z-[5]`}>
                        {items.map((item, index) => (
                            <div className="relative group p-2 px-4 not-last:border-b" key={index}>
                                <a className="" href={item.href}>{item.heading}</a>
                                {item.subItems ?
                                    <div className="hidden group-hover:flex flex-col gap-2 px-4">
                                        {item.subItems.map((subItem, index) => (
                                            <a className="cursor-pointer" key={index} href={subItem.href}>{subItem.heading}</a>
                                        ))}
                                    </div>
                                    : ""}
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </header >
    );
};

export default TopBar;