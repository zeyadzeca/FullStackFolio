import React, {useContext, useEffect, useState} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  educationInfo,
  bigProjects
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [activeSection, setActiveSection] = useState("greeting");
  const [menuOpen, setMenuOpen] = useState(false);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;
  const viewEducation = educationInfo.display;
  const viewProjects = bigProjects.display;

  useEffect(() => {
    const ids = [
      "greeting",
      "skills",
      "education",
      "experience",
      "opensource",
      "projects",
      "achievements",
      "blogs",
      "talks",
      "resume",
      "contact"
    ];
    const nodes = ids.map(id => document.getElementById(id)).filter(Boolean);

    if (!nodes.length || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && visible.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {rootMargin: "-35% 0px -50% 0px", threshold: [0.15, 0.35, 0.6]}
    );

    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navItem = (href, label, icon, id) => (
    <li key={id}>
      <a
        href={href}
        className={activeSection === id ? "active-nav" : ""}
        onClick={closeMenu}
        aria-current={activeSection === id ? "location" : undefined}
      >
        <i className={`fas ${icon}`} aria-hidden="true"></i>
        <span>{label}</span>
      </a>
    </li>
  );

  return (
    <header
      className={isDark ? "dark-menu header space-nav" : "header space-nav"}
    >
      <a href="#greeting" className="logo" onClick={closeMenu}>
        <span className="logo-mark" aria-hidden="true">
          <i className="fas fa-rocket"></i>
        </span>
        <span className="grey-color">&lt;</span>
        <span className="logo-name">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </a>
      <input
        className="menu-btn"
        type="checkbox"
        id="menu-btn"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />
      <label
        className="menu-icon"
        htmlFor="menu-btn"
        aria-label="Toggle navigation"
      >
        <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
      </label>
      <nav aria-label="Spaceship control panel">
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {navItem("#greeting", "Base", "fa-home", "greeting")}
          {viewSkills && navItem("#skills", "Skills", "fa-atom", "skills")}
          {viewEducation &&
            navItem("#education", "Education", "fa-book", "education")}
          {viewExperience &&
            navItem("#experience", "Experience", "fa-rocket", "experience")}
          {viewOpenSource &&
            navItem(
              "#opensource",
              "Open Source",
              "fa-code-branch",
              "opensource"
            )}
          {viewProjects &&
            navItem("#projects", "Projects", "fa-globe", "projects")}
          {viewAchievement &&
            navItem("#achievements", "Achievements", "fa-star", "achievements")}
          {viewBlog && navItem("#blogs", "Blogs", "fa-satellite", "blogs")}
          {viewTalks &&
            navItem("#talks", "Talks", "fa-broadcast-tower", "talks")}
          {viewResume && navItem("#resume", "Resume", "fa-file-alt", "resume")}
          {navItem("#contact", "Contact", "fa-paper-plane", "contact")}
          <li className="theme-toggle-item">
            <ToggleSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
