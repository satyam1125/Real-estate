import React from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const placeholders = Array.from({ length: 8 }).map((_, i) => `/assets/placeholder-${i + 1}.jpg`);

  return (
    <main className="min-h-screen pt-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Gallery</h1>
        <p className="text-muted-foreground mb-8">Browse recent properties and interiors from our portfolio.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {placeholders.map((src, idx) => (
            <div key={idx} className="h-40 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
              {/* If you have images, replace src with an <img> tag. placeholder shown as text */}
              <span className="text-sm text-muted-foreground">Image {idx + 1}</span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/contact" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Started — Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}