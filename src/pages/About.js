import React from "react";

import about from './../assets/images/about.jpg';

const About = () => {
  return (
    <div className='pt-5 pb-5 bg-info text-white'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className='p-3 bg-white shadow img-fluid' src={about} alt="" />
          </div>
          <div className="col-md-6 pt-3 ps-4">
            <h6 className='text-warning'>ABOUT US</h6>
            <h1>About Us Our History Mission & Vision</h1>
            <p className='text-secondary mt-2'>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed. </p>
            <button className='btn btn-warning fs-5 fw-bold px-4 py-2'>REQUEST CUSTOM PRICE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
