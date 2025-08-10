import React from 'react';

function Skills() {
  return (
    <>
      <div className="container my-5">
        <h2 className="text-center fw-bold">My Skills</h2>
        <p className="text-center text-muted">Technologies I'm comfortable with</p>

        <div className="row g-4 mt-4">
          <div className="col-md-4">
            <div className="card shadow-sm border-0 text-center p-4 h-100">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
                width="50"
                className="mx-auto mb-3"
              />
              <h5 className="fw-bold">HTML</h5>
              <p className="text-muted">Structure for modern websites</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 text-center p-4 h-100">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
                width="50"
                className="mx-auto mb-3"
              />
              <h5 className="fw-bold">CSS</h5>
              <p className="text-muted">Styling and layouts for web pages</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 text-center p-4 h-100">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                width="50"
                className="mx-auto mb-3"
              />
              <h5 className="fw-bold">JavaScript</h5>
              <p className="text-muted">Interactive and dynamic websites</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 text-center p-4 h-100">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
                width="50"
                className="mx-auto mb-3"
              />
              <h5 className="fw-bold">Python</h5>
              <p className="text-muted">Versatile programming language</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 text-center p-4 h-100">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                width="50"
                className="mx-auto mb-3"
              />
              <h5 className="fw-bold">React</h5>
              <p className="text-muted">JavaScript library for UI</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 text-center p-4 h-100">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap"
                width="50"
                className="mx-auto mb-3"
              />
              <h5 className="fw-bold">Bootstrap</h5>
              <p className="text-muted">Quick UI with components and grid</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
