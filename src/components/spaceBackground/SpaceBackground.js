import React from "react";
import "./spaceTheme.scss";

export default function SpaceBackground() {
  return (
    <div className="space-sky" aria-hidden="true">
      <div className="space-nebula" />
      <div className="space-stars" />
      <div className="space-stars space-stars-2" />
      <div className="space-orbitals">
        <span className="orbital orbital-a" />
        <span className="orbital orbital-b" />
        <span className="orbital orbital-c" />
        <span className="satellite" />
      </div>
    </div>
  );
}
