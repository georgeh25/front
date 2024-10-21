"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  fetchAboutMe,
  fetchProjects,
  fetchSocialNetworks,
  fetchTechnologies,
  getFullImageUrl,
} from "../utils/api";

export default function Home() {
  const [data, setData] = useState({
    aboutMe: {},
    projects: [],
    socialNetworks: [],
    technologies: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [aboutMe, projects, socialNetworks, technologies] =
          await Promise.all([
            fetchAboutMe(),
            fetchProjects(),
            fetchSocialNetworks(),
            fetchTechnologies(),
          ]);
        console.log("Fetched data:", {
          aboutMe,
          projects,
          socialNetworks,
          technologies,
        });
        setData({ aboutMe, projects, socialNetworks, technologies });
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading)
    return <div className="container py-5 text-center">Loading...</div>;
  if (error)
    return <div className="container py-5 text-center">Error: {error}</div>;

  const { aboutMe, projects, socialNetworks, technologies } = data;

  return (
    <div className="container py-5">
      {/* About Me Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold">Hola, soy Jorge Home</h1>
          <p className="lead mb-4">
            {aboutMe.aboutMe || "Bienvenido a mi portafolio"}
          </p>
          <div className="d-flex gap-3">
            <Link href="/projects" className="btn btn-primary">
              Ver Proyectos
            </Link>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <img
            src={getFullImageUrl(aboutMe.profilePhotoUrl)}
            alt="Foto de perfil"
            className="rounded-circle shadow"
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Technologies Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Tecnologías que manejo</h2>
        {technologies.length > 0 ? (
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
            {technologies.map((tech) => (
              <div key={tech._id} className="col">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <img
                      src={tech.iconUrl}
                      alt={tech.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain",
                      }}
                      className="mb-3"
                    />
                    <h5 className="card-title">{tech.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">
            No hay tecnologías disponibles en este momento.
          </p>
        )}
      </section>

      {/* Projects Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Algunos Proyectos</h2>
        {projects.length > 0 ? (
          <div className="row g-4">
            {projects.slice(0, 3).map((project) => (
              <div key={project._id} className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={getFullImageUrl(project.imageUrl)}
                    alt={project.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="mb-2">
                      {project.technologies &&
                        project.technologies.map((tech) => (
                          <span
                            key={tech._id}
                            className="badge bg-secondary me-1"
                          >
                            {tech.name}
                          </span>
                        ))}
                    </div>
                    <Link
                      href={`/projects/${project._id}`}
                      className="btn btn-primary"
                    >
                      Ver Proyecto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">
            No hay proyectos disponibles en este momento.
          </p>
        )}
      </section>

      {/* Social Networks Section */}
      <section className="text-center">
        <h2 className="mb-4">Conectemos</h2>
        {socialNetworks && socialNetworks.length > 0 ? (
          <div className="d-flex justify-content-center gap-4">
            {socialNetworks.map((network) => (
              <a
                key={network._id}
                href={network.url}
                className="text-dark fs-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={network.iconUrl}
                  alt={network.name}
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            ))}
          </div>
        ) : (
          <p>
            No hay redes sociales disponibles en este momento. (Total:{" "}
            {socialNetworks ? socialNetworks.length : 0})
          </p>
        )}
      </section>
    </div>
  );
}
