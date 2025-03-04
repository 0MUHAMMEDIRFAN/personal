import React from 'react';

const TopBar: React.FC = () => {
    return (
        <header className="bg-success sticky-top">
            <div className="row text-white">
                <div className="col-9 col-md-6 p-2 pl-5">
                    <h2>MUHAMMED IRFAN</h2>
                </div>
                <div className="col-3 col-md-6 my-auto">
                    <nav className="navbar navbar-expand-lg navbar-light text-white">
                        <button className="navbar-toggler ml-auto" id="navbtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#Home-section">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#Experience-section">Experiences</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#services-section">services</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Available In
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="https://www.facebook.com/0muhammedirfan">Facebook</a>
                                            <a className="dropdown-item" href="https://linkedin.com/in/0muhammedirfan">Linked In</a>
                                            <a className="dropdown-item" href="https://x.com/0muhammedirfan">Twitter</a>
                                            <a className="dropdown-item" href="https://www.instagram.com/0muhammedirfan/">Instagram</a>
                                        </div>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header >
    );
};

export default TopBar;