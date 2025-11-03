import React from "react";
import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";
import flatImage from "../assets/flat-modern.jpg";
import shopImage from "../assets/shop-commercial.jpg";
import officeImage from "../assets/office-modern.jpg";

const propertyCategories = [
	{
		title: "Flats for Rent",
		short: "1/2/3 BHK • Furnished & semi-furnished • From ₹8,000/mo",
		image: flatImage,
		link: "/flats/rent",
	},
	{
		title: "Flats for Sale",
		short: "New & resale flats • Financing support • From ₹35 Lakh",
		image: flatImage,
		link: "/flats/sale",
	},
	{
		title: "Shops & Commercial",
		short: "Retail & commercial units • High footfall locations • Enquire for rates",
		image: shopImage,
		link: "/shops",
	},
	{
		title: "Offices",
		short: "Ready-to-use & shell offices • Parking & amenities • From ₹20 Lakh",
		image: officeImage,
		link: "/offices",
	},
];

export default function Index() {
	return (
		<div className="min-h-screen bg-background">
			<Hero />

			<section className="py-16 bg-muted/30">
				<div className="container mx-auto px-4">
					<div className="text-center mb-10">
						<h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
							Explore Our Property Categories
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Click any card to view full listings and details for that category.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{propertyCategories.map((c) => (
							<PropertyCard
								key={c.link}
								id={c.link}
								title={c.title}
								price={""}
								img={c.image}
								location=""
								description={c.short}
								link={c.link}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="text-center mb-10">
						<h2 className="text-4xl font-serif font-bold mb-3 text-foreground">
							Why Choose Ulwe Real Estate
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Local expertise, verified listings and end-to-end support to make
							your move simple and safe.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 bg-white rounded-lg shadow">
							<img
								src={flatImage}
								alt="Verified listings"
								className="w-full h-36 object-cover rounded-md mb-4"
							/>
							<h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
							<p className="text-sm text-muted-foreground">
								Inspected properties with title checks and accurate photos.
							</p>
						</div>

						<div className="p-6 bg-white rounded-lg shadow">
							<img
								src={officeImage}
								alt="Expert negotiation"
								className="w-full h-36 object-cover rounded-md mb-4"
							/>
							<h3 className="text-xl font-semibold mb-2">Expert Negotiation</h3>
							<p className="text-sm text-muted-foreground">
								Negotiation and paperwork support for best outcomes.
							</p>
						</div>

						<div className="p-6 bg-white rounded-lg shadow">
							<img
								src={shopImage}
								alt="End-to-end support"
								className="w-full h-36 object-cover rounded-md mb-4"
							/>
							<h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
							<p className="text-sm text-muted-foreground">
								Marketing, legal coordination and handover assistance.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="py-12 bg-muted/10">
				<div className="container mx-auto px-4 max-w-3xl">
					<h3 className="text-2xl font-semibold mb-6 text-foreground">
						Frequently Asked Questions
					</h3>
					<div className="space-y-4">
						<details className="bg-white rounded-lg p-4 border">
							<summary className="font-medium cursor-pointer">
								How do I schedule a visit?
							</summary>
							<p className="mt-2 text-muted-foreground">
								Use the Call button on any detail page or contact us at +91 98765
								43210.
							</p>
						</details>

						<details className="bg-white rounded-lg p-4 border">
							<summary className="font-medium cursor-pointer">
								Do you assist with finance and legal checks?
							</summary>
							<p className="mt-2 text-muted-foreground">
								Yes — we help with lender introductions, documentation and legal
								coordination.
							</p>
						</details>
					</div>
				</div>
			</section>

			{/* Footer (blue theme) */}
			<footer className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-12">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div>
							<h4 className="text-2xl font-semibold mb-2">Ulwe Real Estate</h4>
							<p className="text-sm opacity-90">
								Local experts with 15+ years experience across Navi Mumbai.
							</p>
						</div>

						<div>
							<h4 className="text-lg font-semibold mb-2">Quick Links</h4>
							<ul className="space-y-2 text-sm opacity-90">
								<li>
									<a href="/about" className="hover:underline">
										About
									</a>
								</li>
								<li>
									<a href="/services" className="hover:underline">
										Services
									</a>
								</li>
								<li>
									<a href="/gallery" className="hover:underline">
										Gallery
									</a>
								</li>
								<li>
									<a href="/contact" className="hover:underline">
										Contact
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-lg font-semibold mb-2">Contact</h4>
							<p className="text-sm opacity-90">Ulwe, Navi Mumbai</p>
							<p className="text-sm opacity-90">
								Phone:{" "}
								<a
									href="tel:+919876543210"
									className="underline"
								>
									+91 98765 43210
								</a>
							</p>
						</div>
					</div>

					<div className="border-t border-white/20 mt-8 pt-6 text-center text-white/90">
						<p>
							&copy; {new Date().getFullYear()} Ulwe Real Estate Agency. All rights
							reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
