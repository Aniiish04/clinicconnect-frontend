import React from "react";
import g1 from "../assets/images/gallery-1.jpg";
import g2 from "../assets/images/gallery-2.jpg";
import g3 from "../assets/images/gallery-3.jpg";
import g4 from "../assets/images/gallery-4.jpg";
import SectionHeader from "../components/ui/SectionHeader.jsx";

const images = [g1, g2, g3, g4];

function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <SectionHeader
        align="left"
        title="Smile gallery"
        subtitle="Sample clinic interior and smile shots to enrich the UI of this demo project."
      />
      <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <img
              src={img}
              alt={`Clinic gallery ${idx + 1}`}
              className="h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
