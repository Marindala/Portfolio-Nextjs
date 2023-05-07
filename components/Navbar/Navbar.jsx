import Link from "next/link";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import img from "../../assets/mandala.png";
import Image from "next/image";
import cv from "../../assets/CV.pdf";

const NavBar = () => {
  /*   const [click, setClick] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const handleClick = () => setClick(!click);  */

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">
        <Link
          href="/"
          className="navbar-brand text-primary text-white fs-3 text"
        >
          My Portfolio
        </Link>

        <div className="navbar ml-auto" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active ml-auto">
              <Link
                href="#"
                className="nav-link active text-primary text-white fs-4 text"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#About"
                className="nav-link text-primary text-white fs-4 text"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#Projects"
                className="nav-link text-primary text-white fs-4 text"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item active ml-auto">
              <Link
                href="#Contacts"
                className="nav-link active text-primary text-white fs-4 text"
                aria-current="page"
              >
                Contacts
              </Link>
            </li>
            <li className="nav-item active ml-auto">
              <Link
                href="#CV"
                className="nav-link active text-primary text-white fs-4 text"
                aria-current="page"
              >
                Download-CV
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled bg-white">Disabled</a>
            </li> */}
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fs-4 text btn btn-primary btn-white"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
