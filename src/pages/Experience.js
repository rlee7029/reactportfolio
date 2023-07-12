import React from "react";
import '../styles/Resume.css';


function Experience() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="experience">
      <div className="resume">
        <header>
          <h1>Robert Lee</h1>
          <p>Full stack Developer</p>
        </header>
        <section>
          <h2>Education</h2>
          <div className="education">
            <h3>Bachelor of Science in Kinesiology</h3>
            <p>SFSU 2016-2020
            <p>UCB Full stack Bootcamp</p>
            </p>
          </div>
        </section>
        <section>
          <h2>Experience</h2>
          <div className="experience">
            <h3>Full Stack Developer during the bootcamp course</h3>
            <ul>
              <li>Developed and maintained responsive websites using HTML, CSS, and JavaScript</li>
              <li>Collaborated with the design team to implement user-friendly interfaces</li>
              <li>Optimized websites for performance and accessibility</li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Skills</h2>
          <div className="skills">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>MYSQL</li>
              <li>Node.js</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
        </section>
        <button onClick={handlePrint}>Print</button>
      </div>
    </div>
  );
}

export default Experience;
