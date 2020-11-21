import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import banner from '../assets/images/banner.jpg';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

const sections = [
  { id: 'one', name: 'About' },
  { id: 'two', name: 'Technologies' },
  { id: 'three', name: 'Projects' },
  { id: 'four', name: 'Contact' },
];
const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />
    <div id="wrapper">
      <div id="main">
        <section id="one">
          <div className="image main" data-position="center">
            <img src={banner} alt="" />
          </div>
          <div className="container">
            <header className="major">
              <h2>Hello, I'm Pharia</h2>
              <p>
                A web developer & programmer from San Jose, CA. 
              </p>
            </header>
            <p>

            </p>
          </div>
        </section>

        <section id="two">
          <div className="container">
            <h3>Technologies</h3>
            <p>
              I primarily use <b>JavaScript</b>, but have familiarity and fun with various other languages, tools, and frameworks.
            </p>
            <ul className="feature-icons">
              <li className="fa-code">JavaScript</li>
              <li className="fa-cubes">React</li>
              <li className="fa-book">Redux</li>
              <li className="fa-coffee">Ruby on Rails</li>
              <li className="fa-bolt">HTML5</li>
              <li className="fa-users">CSS</li>
            </ul>
          </div>
        </section>

        <section id="three">
          <div className="container">
            <h3>Works</h3>
            <p>
              I love building applications. Below are a few of my accomplishments.
            </p>
            <div className="features">
              <article>
                <a href="/#" className="image">
                  <img src={pic1} alt="" />
                </a>
                <div className="inner">
                  <h4><a href='https://github.com/pharia-le/type-it-front-end'>Type It</a></h4>
                  <p>
                  A typing web application built with JS & Ruby on Rails.
                  </p>
                </div>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic2} alt="" />
                </a>
                <div className="inner">
                  <h4><a href='https://github.com/pharia-le/done_and_done'>Done & Done</a></h4>
                  <p>
                    A project & task management web application built with Rails.
                  </p>
                </div>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic3} alt="" />
                </a>
                <div className="inner">
                  <h4><a href='https://github.com/pharia-le/momentum-front-end'>Momentum</a></h4>
                  <p>
                    A habit tracking web application built with React, Redux & Rails.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="four">
          <div className="container">
            <h3>Contact Me</h3>
            <p>
            Let's connect! I would love to hear of any project ideas or opportunities! :) 
            </p>
            <form method="post" action="#">
              <div className="row gtr-uniform">
                <div className="col-6 col-12-xsmall">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="6"
                  />
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        className="primary"
                        value="Send Message"
                      />
                    </li>
                    <li>
                      <input type="reset" value="Reset Form" />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
    <section id="footer">
      <PageFooter />
    </section>
  </Layout>
);

export default IndexPage;
