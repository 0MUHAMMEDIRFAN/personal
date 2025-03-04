import React from 'react';

const Banner: React.FC = () => {
    return (

        <section style={{ paddingTop: "6em" }} id="Home-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="https://i.sstatic.net/tzNXF.jpg?s=256&g=1" alt="Image" className=" image-fluid rounded-circle p-2  border border-dark" />
                    </div>
                    <div className="col-md-6">
                        <h3>FULL STACK Web Developer </h3>
                        <h5> Calicut,Kerala,India</h5>
                        <div>
                            <p>"You are the average of 5 people you hang around"
                                <h5>-irfan</h5>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;