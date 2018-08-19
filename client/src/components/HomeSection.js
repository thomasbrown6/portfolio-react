import React from "react";

export const HomeSection = () => (
  <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div className="my-auto">
      <h1 className="mb-0">
        Thomas {" "}
        <span className="text-primary">Brown</span>
      </h1>
      <div className="subheading mb-5">
        Charlotte, NC 28213{" "}|{" "} (864) 324-7107 {" "}|{" "}
        <a href="mailto:Thomas.brown1125@gmail.com">
          Thomas.brown1125@gmail.com
        </a>
      </div>

      <p className="lead mb-5">
        I'm a full stack developer. I have a strong understanding of Java,
        HTML5, CSS3, JavaScript, jQuery, Bootstrap, React.js, Node.js, AJAX,
        JSON, RESTful APIs, Sequelize Git, Firebase, Heroku, C#, .Net, Database
        Theory, Bookshelf.js, MongoDB, MySQL, Command Line, and Git.
      </p>

      <p className="lead mb-5">
        My focus of study is Computer Science and Business Administration. I
        attended Furman University where I received a Bachelor of Arts Degree in
        Information Technology with a minor in Business Administration. I'm
        currently taking the UNC Charlotte Coding Bootcamp. I've learned some
        new technologies and gained more tools to sharpen my curent coding
        skills. My ultimate goal is to become a highly-experienced software
        developer with hopes of owning my own business one day.{" "}
      </p>
      
      <p className="lead mb-5">
        I’m passionate and amazed by the continued growth of technology over the
        years. Technology is the centerpiece of our daily dynamics and I've
        chosen to be a part of its continued growth. I am young, creative, and
        my love of technology only pushes my creative thinking.{" "}
      </p>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/thomas-brown-a8005413b/">
          <i className="fab fa-linkedin-in" />
        </a>
        <a href="https://github.com/thomasbrown6">
          <i className="fab fa-github" />
        </a>
        <a href="https://twitter.com/ThomasAbrown_6">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://www.facebook.com/thomas.brown.3511">
          <i className="fab fa-facebook-f" />
        </a>
      </div>
    </div>
  </section>
);
