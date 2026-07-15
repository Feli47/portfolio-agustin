import React from 'react';
import './App.css';

import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const App = () => {
  return (
    <div className="portfolio-container">

      <header className="header">
        <h1>Agustín Rodríguez</h1>
        <img src="/logo.jpg" alt="Logo" className="img" />

        <p>
          Me desarrollo en Diseño 3D y edición de video, dos áreas que realmente me apasionan y disfruto. Me interesa crear contenido visual de calidad,
           aprender nuevas herramientas y mejorar proyecto a proyecto.
        </p>
      </header>

      <div className="divider"></div>

      <section className="skills-section">
        <h2>Herramientas</h2>

        <div className="skills-grid">
          <span>After Effects</span>
          <span>Premiere Pro</span>
          <span>DaVinci Resolve</span>
          <span>Blender</span>
          <span>Photoshop</span>
        </div>
      </section>

  <section className="youtube-carousel-section">

  <h2>Edits & Videos</h2>

  <div className="youtube-carousel">

    <div className="youtube-card">
      <iframe
        src="https://www.youtube-nocookie.com/embed/-CFMfDk7F3I"
        title="Video 1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="youtube-card">
      <iframe
        src="https://www.youtube-nocookie.com/embed/Ew7h2l5gKrg"
        title="Video 2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="youtube-card">
      <iframe
        src="https://www.youtube-nocookie.com/embed/pfaU8rBII6c"
        title="Video 3"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

        <div className="youtube-card">
      <iframe
        src="https://www.youtube-nocookie.com/embed/UnLLEfqnt4s"
        title="Video 4"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

  </div>

</section>

      <div className="divider"></div>


        <section className="animation-section">

          <h2>Algunas Animaciones</h2>

          <div className="animation-grid">

            <video
              className="animation-video"
              controls
              muted
              loop
            >
              <source src="/videos/animacion-pc.mp4" type="video/mp4"/>
            </video>

            <video
              className="animation-video"
              controls
              muted
              loop
            >
              <source src="/videos/animacion-2.mp4" type="video/mp4"/>
            </video>

            <video
              className="animation-video"
              controls
              muted
              loop
            >
              <source src="/videos/animacion-personaje.mp4" type="video/mp4"/>
            </video>

          </div>

        </section>

        <div className="divider"></div>
      
      <main className="main-content">

        <section className="socials-section">
          <h2>Redes sociales</h2>

          <div className="socials">

            <a
              href="https://www.instagram.com/not_awstin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@not_awstin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>

            <a
              href="https://www.youtube.com/@awstin.mp4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>

          </div>
        </section>

        <section className="links-section">
          <a
            href="https://vimeo.com/agustinportfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="linktree-link"
          >
            Más de mí
          </a>
        </section>

      </main>

      <footer className="footer">
        <p>&copy; 2026 Agustín Rodriguez. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
};

export default App;