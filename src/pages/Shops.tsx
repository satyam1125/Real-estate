import React from "react";
import PropertyCard from "@/components/PropertyCard";
import shopImage from "@/assets/shop-commercial.jpg";

const sample = [
  {
    id: "shop-1",
    title: "Retail Shop – Main Street",
    price: "₹55,000 / month",
    img: shopImage,
    location: "Ulwe Market Road",
    contact: "+919876543210",
    description:
      "Ground-floor retail unit with full glass frontage, high footfall, 300 sq.ft approx. Ideal for cafe, retail or services.",
  },
];

export default function Shops() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold mb-4">Shops & Commercial</h1>
        <p className="text-muted-foreground mb-6">Commercial listings with footfall estimates and ROI guidance.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sample.map((p) => (
            <PropertyCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </main>
  );
}