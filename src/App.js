import React, { useEffect } from "react";
import "./style/section/Header.css";
import "./style/section/Hero.css";
import "./style/style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  toggleMenu,
  handleRedirect,
  github,
  facebookLink,
  instagramLink,
  twitterLink,
  LinkedInLink,
} from "./script.js";
import vector from "./assets/Vector.png";
import whatsap from "./assets/WhatsApp Image 2025-01-14 at 18.11.17_7b3ae670.jpg";
import whatsap2 from "./assets/WhatsApp Image 2025-01-15 at 10.18.18_c3c5a8d7.jpg";
import cloud from "./assets/cloud_circle_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";
import arrow from "./assets/north_east_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";
import star from "./assets/Stars.png";
import code from "./assets/code.png";
import todo from "./assets/todo.jpg";
import lazy from "./assets/lazy.png";
import adapt from "./assets/adapt.png";
import design from "./assets/design.png";
import twitter from "./assets/Twitter.png";
import linkend from "./assets/LinkedIn.png";
import instagram from "./assets/Instagram.png";
import facebook from "./assets/Facebook.png";
import contextual from "./assets/contextual.png";
import avatar from "./assets/Avatar Image.png";
import solution from "./assets/solution.png";
import contact from "./assets/contacts-app.jpg";
import supermaket from "./assets/supermarket-app2.jpg";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <header
        className="container"
        id="home"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <nav id="desktop-nav">
          <div className="header__nav">
            <div className="header__logo">
              <img src={vector} alt="logo" />
              <h4 data-aos="fade-down">Lumi Tech</h4>
            </div>

            <ul className="header__menu" data-aos="fade-down">
              <li>
                <a href="#home" className="home">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About me</a>
              </li>
              <li>
                <a href="#testimonails">Testimonails</a>
              </li>
            </ul>

            <div>
              <button className="contact-btn" onClick={handleRedirect}>
                Contact Me
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Took out hambuger nav out of the parent element */}
      <nav id="hamburger-nav">
        <div className="header__logo">
          <img src={vector} alt="logo" />
          <h4 data-aos="fade-down">Lumi Tech</h4>
        </div>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu-links">
            <li>
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={toggleMenu}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About me
              </a>
            </li>
            <li>
              <a href="#testimonails" onClick={toggleMenu}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>

      <section
        className="hero container"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="hero-image">
          <img src={whatsap} alt="img" data-aos="zoom-in-up" />
        </div>

        <div className="hero-banner" data-aos="zoom-in-up">
          <div className="hero-text">
            <h4>Hey, I am Stephen</h4>
            <h1>
              I create both <span>client and server</span> software
            </h1>
            <h5>
              I am reponsible for designing and developing websites and
              platforms. Mastering <span>HTML</span> and <span>CSS</span>,
              knowing how to program a browser using Javascript,Angular or Vue.
            </h5>

            <div className="hero-text__button-holder">
              <div className="hero-text__button">
                <button onClick={handleRedirect}>Get in touch</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us container">
        <div className="about-us__text" data-aos="fade-up">
          <h5>my skill</h5>
          <h2>My Expertise</h2>
        </div>

        <div className="about-us__content" data-aos="fade-up">
          <div className="about-us__box">
            <img src={code} alt="img" />
            <h3>Progamming languages & frameworks</h3>
            <h5>
              I am familiar with more complex frameworks for managing front-end
              apps. Two of the most common frameworks include React, a
              JavaScript library for building user interfaces, and Redux, a
              JavaScript library that helps manage application states.
            </h5>
          </div>

          <div className="about-us__box">
            <img src={design} alt="img" />
            <h3>Understanding development</h3>
            <h5>
              I am able to design a clean web page and write streamlined
              server-side code. The other, equally important part is i'm able to
              understand the “why” of it all, the fundamental principles behind
              building websites and web apps.
            </h5>
          </div>

          <div className="about-us__box">
            <img src={adapt} alt="img" />
            <h3>Adapt Quickly</h3>
            <h5>
              Technology advances rapidly in every field but moves especially
              fast for full-stack devs. New frameworks and languages arise
              almost constantly.That means i a fullstack developer have more
              motivation and freedom to try new things.
            </h5>
          </div>

          <div className="about-us__box">
            <img src={solution} alt="img" />
            <h3>Problem-solving</h3>
            <h5>
              Ultimately, a developer’s job is solving problems, and you can’t
              solve a problem you don’t understand. Skills that matter in most
              professional contexts — like communication, empathy, and critical
              thinking. And i can handle that.
            </h5>
          </div>
        </div>
      </section>

      <section className="popular-skills container" id="about">
        <div className="popular-skills__image" data-aos="fade-right">
          <img src={whatsap2} alt="img" />
        </div>

        <div className="popular-skills__border">
          <div className="popular-skills__text" data-aos="fade-up">
            <h5>About</h5>
            <h2>About me</h2>
            <h4>
              i am a fullstack developer with a high level of competency in both
              frontend and backend languages. I am skilled in{" "}
              <span>HTML, CSS</span>, JavaScript, nodeJs, expressJs. equally i
              understand various database management system (DBMS) like mySql,
              mongoDb and more. <br></br>
              <br></br>
              As a full-stack engineer i am proficient in front-end development,
              backend development with devOps and deployment. I build complete
              applications, collaborate with teams freelance and consult
              services to startups.
            </h4>
          </div>
        </div>
      </section>

      <section className="trending container" id="portfolio">
        <div
          className="trending-project"
          data-aos="fade-down"
          // data-aos-duration="10"
        >
          <div className="trending-project__text">
            <h5>Recent projects</h5>
            <h2>My Portfolio</h2>
          </div>

          <div className="trending-project__button">
            <button>
              <img src={cloud} alt="icon" />
              <a href="#github" onClick={github}>
                Visit my github
              </a>
            </button>
          </div>
        </div>

        <div
          className="trending-list"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="trending-list__box edit-box">
            <img src={todo} alt="img" />

            <div className="trending-text edit-text">
              <h3>todo app</h3>
              <h5>
                this App Stores and keep record of what you will do or what you
                intend to do. Built with date and time.
              </h5>

              <div className="trending-text__link">
                <a href="#github" onClick={github}>
                  View in github
                  <img src={arrow} alt="icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="trending-list__box">
            <img src={contact} alt="img" />

            <div className="trending-text">
              <h3>contacts app</h3>
              <h5>
                this App Stores and keep record of what you will do or what you
                intend to do. Built with date and time.
              </h5>

              <div className="trending-text__link">
                <a href="#github" onClick={github}>
                  View in github
                  <img src={arrow} alt="icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="trending-list__box">
            <img src={supermaket} alt="img" />

            <div className="trending-text">
              <h3>supermarket's app</h3>
              <h5>
                this App Stores and keep record of what you will do or what you
                intend to do. Built with date and time.
              </h5>

              <div className="trending-text__link">
                <a href="#github" onClick={github}>
                  View in github
                  <img src={arrow} alt="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subscription container" id="testimonails">
        <div className="subscription-text" data-aos="fade-up">
          <h4>clients feedback</h4>
          <h2>customer testimonials</h2>
        </div>

        <div className="subscription-box" data-aos="fade-up">
          <div className="subscription-box__holder">
            <img src={star} alt="icon" />
            <h4>
              "We had the pleasure of working with mr stephen on several
              projects, your expertise as a full-stack developer truly stands
              out."
            </h4>

            <div className="subscription-picture">
              <img src={avatar} alt="img" />

              <div className="subscription-picture__text">
                <h3>Rboinson Honour</h3>
                <h5>Space x</h5>
              </div>
            </div>
          </div>

          <div className="subscription-box__holder">
            <img src={star} alt="icon" />
            <h4>
              "Working with stephen has been an absolute pleasure. They not only
              delivered our project ahead of schedule but exceed expectation."
            </h4>

            <div className="subscription-picture">
              <img src={lazy} alt="img" />

              <div className="subscription-picture__text">
                <h3>Lazy code</h3>
                <h5>Hospital</h5>
              </div>
            </div>
          </div>

          <div className="subscription-box__holder">
            <img src={star} alt="icon" />
            <h4>
              "What impressed us the most was their ability to communicate
              complex technical concepts in a way that was easy to understand."
            </h4>

            <div className="subscription-picture">
              <img src={contextual} alt="img" />

              <div className="subscription-picture__text">
                <h3>jimmy</h3>
                <h5>contex techs</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact container" id="contacts">
        <div className="contact-text">
          <h5>get in touch</h5>
          <h2>contact me</h2>
          <h4>Let's create something amazing together!</h4>
        </div>

        <div className="contact-form">
          <form>
            <div className="contact-form__input">
              <div className="contact-form__input-holder">
                <label for="fname">First name</label>
                <input type="text" id="fname" required />
              </div>

              <div className="contact-form__input-holder">
                <label for="lname">Last name</label>
                <input type="text" id="lname" required />
              </div>
            </div>

            <div className="contact-form__input">
              <div className="contact-form__input-holder">
                <label for="email">Email</label>
                <input type="email" id="email" required />
              </div>

              <div className="contact-form__input-holder">
                <label for="phone">Phone number</label>
                <input type="tel" id="phone" />
              </div>
            </div>

            <div className="contact-form__message">
              <div className="contact-form__message-select">
                <label for="topic">Choose a topic</label>
                <select id="topic" name="topic">
                  <option value="" disable selected hidden>
                    Select one...
                  </option>
                  <option value="1">Project Development</option>
                  <option value="2">Freelance Opportunities</option>
                  <option value="3">Consulting or Advice</option>
                  <option value="4">Bug Fixes and Maintenance</option>
                  <option value="5">Learning or Mentorship</option>
                  <option value="6"> Creative Ideas</option>
                </select>
              </div>

              <div className="contact-form__message-type">
                <label for="message">Message</label>
                <input
                  type="text"
                  id="message"
                  placeholder="Type your message..."
                  maxLength={200}
                />
              </div>
            </div>

            <div className="contact-form__checkbox">
              <input type="checkbox" id="terms" name="terms" required />
              <label for="terms">i accept the terms</label>
            </div>

            <div className="contact-form__button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="footer container">
        <div className="footer__holder">
          <div className="footer__holder-logo">
            <img src={vector} alt="logo" />
            <h4>Lumi Tech</h4>
          </div>

          <ul className="footer__holder-nav">
            <li>
              <a href="#home" className="home">
                Home
              </a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#contacts">Contact</a>
            </li>
            <li>
              <a href="#testimonails">Testimonails</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
          </ul>

          <ul className="footer__holder-socials">
            <li>
              <img src={facebook} alt="facebook" onClick={facebookLink} />
            </li>
            <li>
              <img src={instagram} alt="instagram" onClick={instagramLink} />
            </li>
            <li>
              <img src={twitter} alt="twitter" onClick={twitterLink} />
            </li>
            <li>
              <img src={linkend} alt="linkind" onClick={LinkedInLink} />
            </li>
          </ul>
        </div>

        <div className="footer__divide">
          <hr />
        </div>

        <div className="footer__end">
          <h4>Made with ❤️ by Stephen</h4>

          <ul>
            <li>Privacy Policy </li>
            <li>Terms of Service </li>
            <li>Cookies Settings </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
