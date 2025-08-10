import React from "react";

function About() {
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="col-lg-10">

        <div className="d-flex align-items-center my-4">
          <div className="flex-grow-1 border-top" ></div>
          <h2 className="mx-3 fw-bold text-uppercase" style={{ color: "#0f9d58" }}>About Me</h2>
          <div className="flex-grow-1 border-top"></div>
        </div>

        <h1 className="fw-bold text-center">I'm Arul Dhas</h1>
        <p className="text-muted text-center">
          A passionate React.js frontend developer with expertise in HTML, CSS, JavaScript, Python, and Canva,
          focused on building responsive, user-friendly web experiences.
        </p>



        {/* Internship */}
        <div className="row g-4 justify-content-center mb-5">
          <div className="col-md-5">
            <div className="card shadow-sm border-0 rounded-4 h-100 text-center p-4">
               <h3 className="text-center fw-bold mb-4" style={{ color: "#0f9d58" }}>Internship</h3>
              <h6 className="fw-bold">ICANIO TECHNOLOGY - Tirunelveli</h6>
              <p className="text-muted mb-1">
                Front-End Development Intern
              </p>
              <p className="text-muted">JavaScript, ReactJS</p>
              <p className="mb-1 text-muted">2024</p>

            </div>
          </div>
        </div>

        {/* Education */}
        <h3 className="text-center fw-bold mb-4" style={{ color: "#0f9d58" }}>
          Education
        </h3>
        <div className="row g-4 justify-content-center">
          <div className="col-md-5">
            <div className="card shadow-sm border-0 rounded-4 h-100 text-center p-4">
              <h5 className="fw-bold">Secondary Education</h5>
              <h6 className="text-success">Sivanthi Matriculation Higher Secondary School</h6>
              <p className="mb-1 text-muted">2018</p>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card shadow-sm border-0 rounded-4 h-100 text-center p-4">
              <h5 className="fw-bold">Higher Secondary Education</h5>
              <h6 className="text-success">Sivanthi Matriculation Higher Secondary School</h6>
              <p className="mb-1 text-muted">2020</p>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card shadow-sm border-0 rounded-4 h-100 text-center p-4">
              <h5 className="fw-bold">Bachelor of Computer Application</h5>
              <h6 className="text-success">Muslim Arts College</h6>
              <p className="mb-1 text-muted">2020 – 2023</p>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card shadow-sm border-0 rounded-4 h-100 text-center p-4">
              <h5 className="fw-bold">Master of Computer Application</h5>
              <h6 className="text-success">PET Engineering College</h6>
              <p className="mb-1 text-muted">2024 – 2026</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
