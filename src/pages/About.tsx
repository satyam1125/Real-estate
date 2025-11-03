import React from "react";
import Navigation from "@/components/Navigation";
import { Building2, Users, Award, Target, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Intro / Hero */}
      <section className="pt-28 pb-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">
            About Ulwe Real Estate
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Local property experts helping people buy, sell and rent in Ulwe and
            Navi Mumbai. Clear advice, verified listings and full transaction
            support — made simple.
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
                    <div className="text-sm text-muted-foreground">
                      Properties Listed
                    </div>
                    <div className="text-2xl font-bold">500+</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Curated residential & commercial listings across Ulwe.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Happy Clients
                    </div>
                    <div className="text-2xl font-bold">1000+</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Long-term relationships built on trust and results.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                    <div className="text-2xl font-bold">15+</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Experienced local team guiding every step of the process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-12 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center text-white">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Our Mission</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Make property decisions easy and fair — with verified data and
                clear advice.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-indigo-600 flex items-center justify-center text-white">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Our Approach</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Local research, honest pricing and hands-on support from listing to
                handover.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-emerald-600 flex items-center justify-center text-white">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Our Promise</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Transparent fees, verified documentation and a single point of
                contact for each client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6">Meet the Team</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white flex items-center justify-center font-bold">
                AS
              </div>
              <div className="mt-4">
                <div className="font-semibold">Amit Sharma</div>
                <div className="text-sm text-muted-foreground">
                  Founder & Lead Broker
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="mx-auto w-20 h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                RK
              </div>
              <div className="mt-4">
                <div className="font-semibold">Rita Kapoor</div>
                <div className="text-sm text-muted-foreground">Sales Head</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="mx-auto w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                SS
              </div>
              <div className="mt-4">
                <div className="font-semibold">Sunil S.</div>
                <div className="text-sm text-muted-foreground">
                  Client Relations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-3">
            Ready to talk about properties?
          </h3>
          <p className="mb-6 text-sm opacity-90">
            Schedule a free consultation — we’ll guide you with a clear plan and
            next steps.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-blue-700 rounded font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
