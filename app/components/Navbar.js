"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">
          <span className="text-primary">&lt;</span>
          Mi Portafolio
          <span className="text-primary">/&gt;</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/projects"
                className={`nav-link ${
                  pathname === "/projects" ? "active" : ""
                }`}
              >
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/experience"
                className={`nav-link ${
                  pathname === "/experience" ? "active" : ""
                }`}
              >
                Experiencia
              </Link>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
