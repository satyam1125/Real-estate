import React from "react";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-2 text-foreground">Contact Us</h1>
            <p className="text-muted-foreground">
              Let's discuss your requirements — buy, sell or rent. Our team will guide you end-to-end.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Office & Contact Info</h3>

              <div className="space-y-4 text-muted-foreground">
                <p><strong>Address:</strong> Ulwe, Navi Mumbai</p>
                <p><strong>Phone:</strong> <a className="hover:underline" href="tel:+919876543210">+91 98765 43210</a></p>
                <p><strong>Email:</strong> <a className="hover:underline" href="mailto:info@ulwerealestate.com">info@ulwerealestate.com</a></p>
                <p>We are available Monday–Saturday, 9:30 AM – 7:00 PM. Prefer a callback? Submit your details and we will call you.</p>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2 text-foreground">Visit Us</h4>
                <div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center text-muted-foreground">
                  Map placeholder (replace with embedded map)
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
