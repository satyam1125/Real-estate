import React from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Home, Repeat, FileText, DollarSign, UserCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Buy",
      icon: Home,
      bullets: [
        "Curated property search tailored to your needs",
        "Price guidance & market comparables",
        "Assistance with bank finance and documentation",
      ],
    },
    {
      title: "Sell",
      icon: Briefcase,
      bullets: [
        "Professional listing & photography",
        "Strategic pricing and negotiation",
        "End-to-end transaction management",
      ],
    },
    {
      title: "Rent",
      icon: Repeat,
      bullets: [
        "Tenant sourcing & background checks",
        "Lease negotiation and agreement drafting",
        "Move-in coordination and inspections",
      ],
    },
    {
      title: "Property Management",
      icon: UserCheck,
      bullets: [
        "Rent collection & maintenance coordination",
        "Regular property inspections",
        "Transparent monthly reporting",
      ],
    },
    {
      title: "Valuation & Advisory",
      icon: FileText,
      bullets: [
        "Market-aware valuations for buying or pricing to sell",
        "Investment yield & ROI analysis",
        "Strategic advice for portfolio owners",
      ],
    },
    {
      title: "Mortgage Assistance",
      icon: DollarSign,
      bullets: [
        "Lender introductions and documentation support",
        "Loan comparison and eligibility checks",
        "Help through approval and disbursement",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-28 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-serif font-bold mb-3 text-foreground">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Simple, practical services to help you move confidently — whether you buy, sell, rent or manage property.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.title} className="p-4">
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{s.title}</h3>
                        <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-1">
                          {s.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">Want bespoke help? Tell us your needs and we’ll propose a plan.</p>
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}