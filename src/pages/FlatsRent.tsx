import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import flatImage from "@/assets/flat-modern.jpg";
import PropertyCard from "@/components/PropertyCard";
import type { HTMLAttributes } from "react";

const sample = [
	{
		id: "rent-1",
		title: "2 BHK – Park View",
		price: "₹18,000 / month",
		img: flatImage,
		location: "Ulwe Sector 18",
		contact: "+919768774217",
		description:
			"Spacious 2 BHK with park-facing balcony, modular kitchen, covered parking, 24/7 security. Available furnished. Minimum 6-month lease.",
	},
	{
		id: "rent-2",
		title: "1 BHK – Compact & Modern",
		price: "₹9,500 / month",
		img: flatImage,
		location: "Ulwe Sector 12",
		contact: "+919768774217",
		description:
			"Well-lit 1 BHK ideal for professionals. Gated community with gym and lift. Utilities not included.",
	},
];
const categories = [
	{
		title: "1 BHK – Compact & Modern",
		description: "Well-lit 1 BHK ideal for professionals, close to transit and essentials.",
		priceRange: "₹8,000 - ₹12,000",
		available: "12",
		icon: (props: HTMLAttributes<HTMLSpanElement>) => <span {...props}>🏠</span>,
	},
	{
		title: "2 BHK – Park View",
		description: "Spacious 2 BHK with park-facing balcony and covered parking.",
		priceRange: "₹12,000 - ₹20,000",
		available: "6",
		icon: (props: HTMLAttributes<HTMLSpanElement>) => <span {...props}>🏢</span>,
	},
];


const FlatsRent = () => {
	return (
		<div className="min-h-screen bg-background">
			<Navigation />

			{/* Page Header */}
			<section className="pt-32 pb-16 bg-gradient-primary text-primary-foreground">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center animate-fade-in">
						<h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
							Flats for Rent
						</h1>
						<p className="text-xl opacity-90">
							Discover your ideal rental home in Ulwe. Browse through our
							collection of verified flats across different configurations.
						</p>
					</div>
				</div>
			</section>

			{/* Categories Grid */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
						{categories.map((category, index) => {
							const Icon = category.icon;
							return (
								<Card
									key={category.title}
									className="group overflow-hidden hover-lift border-border bg-card animate-scale-in"
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<div className="relative h-48 overflow-hidden">
										<img
											src={flatImage}
											alt={category.title}
											className="w-full h-full object-cover transition-smooth group-hover:scale-110"
										/>
										<div className="absolute inset-0 gradient-hero opacity-60" />
										<div className="absolute top-4 left-4">
											<div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
												<Icon className="w-6 h-6 text-secondary-foreground" />
											</div>
										</div>
									</div>

									<CardContent className="p-6">
										<h3 className="text-2xl font-serif font-bold mb-3 text-foreground">
											{category.title}
										</h3>
										<p className="text-muted-foreground mb-4">
											{category.description}
										</p>

										<div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
											<div>
												<div className="text-sm text-muted-foreground mb-1">
													Price Range
												</div>
												<div className="font-semibold text-foreground">
													{category.priceRange}
												</div>
											</div>
											<div className="text-right">
												<div className="text-sm text-muted-foreground mb-1">
													Available
												</div>
												<div className="font-semibold text-primary">
													{category.available}
												</div>
											</div>
										</div>

										<Button
											asChild
											className="w-full gradient-primary text-primary-foreground group-hover:opacity-90 transition-smooth"
										>
											<Link
												to={`/properties/flats-rent/${category.title
													.toLowerCase()
													.replace(/\s+/g, "-")}`}
												className="flex items-center justify-center gap-2"
											>
												View Properties
												<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
											</Link>
										</Button>
									</CardContent>
								</Card>
							);
						})}
					</div>

					{/* Features Section */}
					<div className="bg-muted/50 rounded-2xl p-8 md:p-12">
						<h2 className="text-3xl font-serif font-bold mb-8 text-center text-foreground">
							What You Get With Our Rentals
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="text-center">
								<div className="text-4xl mb-4">🔒</div>
								<h3 className="font-semibold mb-2 text-foreground">
									Verified Properties
								</h3>
								<p className="text-sm text-muted-foreground">
									All properties thoroughly inspected and verified
								</p>
							</div>
							<div className="text-center">
								<div className="text-4xl mb-4">💰</div>
								<h3 className="font-semibold mb-2 text-foreground">
									Transparent Pricing
								</h3>
								<p className="text-sm text-muted-foreground">
									No hidden charges or surprise costs
								</p>
							</div>
							<div className="text-center">
								<div className="text-4xl mb-4">🤝</div>
								<h3 className="font-semibold mb-2 text-foreground">
									Quick Process
								</h3>
								<p className="text-sm text-muted-foreground">
									Fast documentation and move-in assistance
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Listings Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-serif font-bold mb-8 text-center text-foreground">
						Featured Listings
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{sample.map((p) => (
							<PropertyCard key={p.id} {...p} />
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-card border-t border-border">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
						Need Help Finding the Perfect Flat?
					</h2>
					<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
						Our expert team is ready to assist you in finding a rental property
						that matches your requirements and budget.
					</p>
					<Button asChild size="lg" className="gradient-luxury">
						<Link to="/contact">Contact Our Team</Link>
					</Button>
				</div>
			</section>
		</div>
	);
};

export default FlatsRent;
