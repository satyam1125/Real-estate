import React from "react";
import Navigation from "@/components/Navigation";
import { Building2, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Intro / Hero */}
      <section className="pt-28 pb-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">
            About Km Enterprises
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Km Enterprises is a focused, local real-estate agency run by Kamlesh
            Mali. With years of on-ground experience in Ulwe and Navi Mumbai,
            Kamlesh provides personalised, end-to-end support for buyers, sellers
            and landlords.
          </p>
        </div>
      </section>

      {/* Snapshot */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Properties Listed</div>
                    <div className="text-2xl font-bold">500+</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Curated residential & commercial listings across Ulwe.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Verified Service</div>
                    <div className="text-2xl font-bold">Solo-led</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Personal attention from Kamlesh at every step — fast decisions, clear communication.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                    <div className="font-semibold">15+</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                    <div className="text-2xl font-bold">15+</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Deep local knowledge and professional transaction support.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About details */}
      <section className="py-12 bg-muted/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">A personal, practical service</h2>
          <p className="text-muted-foreground mb-4">
            As a solo-run agency, Kamlesh handles client communication, property
            inspections, pricing guidance and coordination with legal and finance
            partners personally. This reduces handoffs, speeds up responses and
            keeps accountability clear.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">What you can expect</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Direct contact with the owner for fast, honest answers.</li>
            <li>Verified listings and transparent pricing guidance.</li>
            <li>Help with documentation, title checks and bank introductions.</li>
            <li>Flexible scheduling for visits and rapid follow-up.</li>
          </ul>
        </div>
      </section>

      {/* Solo Owner card */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white flex items-center justify-center font-bold text-xl">KM</div>
            <div className="mt-4">
              <div className="font-semibold text-lg">Kamlesh Mali</div>
              <div className="text-sm text-muted-foreground">Owner & Principal</div>
              <p className="mt-3 text-sm text-muted-foreground">
                Personal oversight on every listing and transaction. Reach out directly for a focused, reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-3">Ready to talk?</h3>
          <p className="mb-6 text-sm opacity-90">Contact Kamlesh for a free consultation and clear next steps.</p>
          <a href="/contact" className="inline-block px-6 py-3 bg-white text-blue-700 rounded font-semibold">Contact Us</a>
        </div>
      </section>
    </div>
  );
}
