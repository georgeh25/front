"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProjects, getFullImageUrl } from "../../utils/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProjects();
        setProjects(data);
        console.log("Fetched projects:", data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Mis Proyectos</h1>

      {projects.length > 0 ? (
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project._id} className="col-md-6 col-lg-4">
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
    </div>
  );
}
