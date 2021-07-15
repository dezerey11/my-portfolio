import React from "react";

const Contact = () => {
  return (
    <div className="contacts-container">
      <h1 className="header">CONTACT ME AT:</h1>
      <h3>
        <strong>Email</strong>
      </h3>
      <h4 className="contact">dezerey11@gmail.com</h4>
      <h3>
        <strong>GitHub</strong>
      </h3>
      <h4 className="contact">
        <a href="https://github.com/dezerey11" target="_blank">
          https://github.com/dezerey11
        </a>
      </h4>
      <h3>
        <strong>LinkedIn</strong>
      </h3>
      <h4 className="contact">
        <a
          href=" https://www.linkedin.com/in/dezerey-esca%C3%B1uelas-a6b9bb210/"
          target="_blank"
        >
          https://www.linkedin.com/in/dezerey-esca%C3%B1uelas-a6b9bb210/
        </a>
      </h4>
    </div>
  );
};

export default Contact;
