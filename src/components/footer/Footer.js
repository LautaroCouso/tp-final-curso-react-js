import React from 'react';
import { Image } from 'react-bootstrap';
import inIcon from '../../assets/images/linkedinIcon.svg';
import wappIcon from '../../assets/images/wappIcon.svg';
import faceIcon from '../../assets/images/faceIcon.svg';
import twitIcon from '../../assets/images/twitIcon.svg';
import instIcon from '../../assets/images/instIcon.svg';
import gooIcon from '../../assets/images/gooIcon.svg';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white mt-auto">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Image src={faceIcon} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Image src={twitIcon} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Image src={gooIcon} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Image src={instIcon} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Image src={inIcon} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Image src={wappIcon} />
          </a>
        </section>
        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat
            quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum
            corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>

        <section className="">
          <div className="row">
            <div>
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="/home" className="text-white">
                    Home
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/sign-up" className="text-white">
                    Registro
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/sign-in" className="text-white">
                    Login
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/new/modify/:id" className="text-white">
                    Novedades
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/add" className="text-white">
                    Agregar Consola
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
