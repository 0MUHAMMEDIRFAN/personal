import React from 'react';
import Card from './card';

const Services: React.FC = () => {
    return (
        <section className="bg-light" id="services-section">
            <div className="container pt-3">
                <h1 className="text-center" style={{ marginTop: '1em' }}>
                    <span className="text-center">Services</span>
                </h1>
                <div className="row">
                    <Card heading='check' description='teswt' />
                </div>
            </div>
        </section>
    );
};

export default Services;