import Head from "next/head";
import Image from "next/image";
import * as Components from "../components";
import Link from "next/link";
import Layout from "../components/Layout";
import img from "../assets/portfolio1.png";

//import image from "../assets/port.jpg"

import styles from "../styles/Home.module.css";

import { skills, experiences, projects } from "../profile";

export default function Index() {
  return (
    <Layout>
      
      <Components.Navbar />
     
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-md-4">
                <br></br>
                <Image src={img} alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Marina López</h1>
                <h3>Full Stack Developer</h3>
                <br></br>
                <br></br>
                <h3>
                  I started in the world of programming more than a year ago, I
                  am very curious and studious, I am really interested in
                  knowing a little more every day. and know what's behind the
                  scenes. Before starting my career as a programmer, I dedicated
                  myself to study and work in visual arts. I have a t-shirt firm
                  where I make exclusive designs in prints, sublimation and
                  plotting. I really have a lot of ease when it comes to
                  creating and designing.
                </h3>
                <br></br>
                <br></br>
                <Link href="/contactMe" className="btn btn-outline-light">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Second section */}

      <section className="row">
        <div className="col-md-4 py-3">
          <div className="card bg-light animate__animated animate__fadeInLeft">
            <div className="card-body">
              <br></br>

              <h1>Skills</h1>
              <br></br>

              {/* Skill Progress  */}
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <br></br>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8 py-3" id="Experience">
          {/* Experience */}
          <div className="card bg-light animate__animated animate__fadeInRight">
            <div className="card-body py-2">
              <br></br>

              <h1>Experience</h1>
              <br></br>
              <ul>
                {/* List Item Experience */}
                {experiences.map(({ title, from, to, description }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from} {to ? `- ${to}` : "- current"}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
              <br></br>

              <br></br>
              <button className="bg-primary py-1">More</button>
              <br></br>
            </div>
          </div>
        </div>
        <br></br>
      </section>
      {/* Porfolio */}
      <section>
        <div className="row" id="Projects">
          <div className="col-md-12">
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-12 my-2">
                  <h1 className="text-center text-light">Projects</h1>
                </div>
                {projects.map(({ name, image,view }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="overflow">
                        
                      </div>
                      <div className="card border-primary mb-8">
                        <h3 className="card-title">{name}</h3>
                        <img className="img-fluid"
                          src={`/${image}`}
                          alt=""
                         
                        />

                       {/*  <p>{description}</p> */}
                       <br></br>
                        <a href={view}>View</a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-md-12 mt-4">
                  <div className="text-center">
                    <Link href="/portfolio" className="btn btn-outline-light">
                      More Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
