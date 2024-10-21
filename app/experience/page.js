"use client";

import React, { useEffect, useState } from "react";
import { fetchExperiences } from "../../utils/api";

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadExperiences() {
      try {
        const data = await fetchExperiences();
        console.log("Fetched experiences:", data);
        setExperiences(data);
      } catch (err) {
        console.error("Error fetching experiences:", err);
        setError("Failed to load experiences");
      } finally {
        setLoading(false);
      }
    }

    loadExperiences();
  }, []);

  if (loading)
    return <div className="container py-5 text-center">Loading...</div>;
  if (error)
    return <div className="container py-5 text-center">Error: {error}</div>;

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Mi Experiencia Laboral</h1>
      {experiences.length > 0 ? (
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp._id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{exp.role}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{exp.company}</h6>
                <p className="card-text">{exp.description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    {new Date(exp.startDate).toLocaleDateString()} -
                    {exp.endDate
                      ? new Date(exp.endDate).toLocaleDateString()
                      : "Presente"}
                  </small>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">
          No hay experiencias disponibles en este momento.
        </p>
      )}
    </div>
  );
}
