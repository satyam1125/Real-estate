import React from "react";
import PropertyCard from "@/components/PropertyCard";
import officeImage from "@/assets/office-modern.jpg";

const sample = [
  {
    id: "office-1",
    title: "Open-plan Office",
    price: "₹45 Lakh (Sale) / Enquire for rent",
    img: officeImage,
    location: "Ulwe Business Park",
    contact: "+919876543210",
    description:
      "Flexible open-plan office with fitted MEP, conferencing area, dedicated parking. Good for startups and SME HQs.",
  },
];

export default function Offices() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold mb-4">Offices</h1>
        <p className="text-muted-foreground mb-6">Professional office spaces with fit-out support and parking options.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sample.map((p) => (
            <PropertyCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </main>
  );
}