import React from 'react';

function Contact() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold">Contact Me</h2>
      <p className="text-center text-muted">
        Get in touch with me to discuss your project or any questions you may have
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 p-4">
            <div className="d-flex align-items-center mb-4">
              <h5 className="mb-0 fw-bold">Send Me a Message</h5>
            </div>

            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <input type="email" className="form-control" id="email" placeholder="your@email.com" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your message here..."></textarea>
              </div>

              <div className="text-end">
                <button type="submit" className="btn btn-success px-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
