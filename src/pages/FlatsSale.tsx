import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import flatImage from "@/assets/flat-modern.jpg";
import PropertyCard from "@/components/PropertyCard";

const sample = [
	{
		id: "sale-1",
		title: "3 BHK – Ready Possession",
		price: "₹65 Lakh",
		img: flatImage,
		location: "Ulwe Sector 20",
		contact: "+919768774217",
		description:
			"Premium 3 BHK with modern fittings, two terraces, reserved parking, and close to schools & metro. Clear title, immediate handover.",
	},
	{
		id: "sale-2",
		title: "2 BHK – Investment Deal",
		price: "₹42 Lakh",
		img: flatImage,
		location: "Ulwe Sector 15",
		contact: "+919768774217",
		description:
			"Well-priced 2 BHK in a developing project. Good rental yield potential. Assistance available for bank financing and documentation.",
	},
];

const FlatsSale = () => {
	return (
		<div className="min-h-screen bg-background">
			<Navigation />

			<section className="pt-32 pb-16 bg-gradient-primary text-primary-foreground">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center animate-fade-in">
						<h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
							Flats for Sale
						</h1>
						<p className="text-xl opacity-90">
							Own your dream home in Ulwe. Explore premium flats with excellent
							investment potential and modern amenities.
						</p>
					</div>
				</div>
			</section>

			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
						{sample.map((category, index) => {
							return <PropertyCard key={category.id} {...category} />;
						})}
					</div>

					<div className="bg-muted/50 rounded-2xl p-8 md:p-12">
						<h2 className="text-3xl font-serif font-bold mb-8 text-center text-foreground">
							Why Buy With Us
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="text-center">
								<div className="text-4xl mb-4">📋</div>
								<h3 className="font-semibold mb-2 text-foreground">
									Legal Assistance
								</h3>
								<p className="text-sm text-muted-foreground">
									Complete support with documentation and legal processes
								</p>
							</div>
							<div className="text-center">
								<div className="text-4xl mb-4">🏦</div>
								<h3 className="font-semibold mb-2 text-foreground">
									Loan Assistance
								</h3>
								<p className="text-sm text-muted-foreground">
									Help with home loan applications and approvals
								</p>
							</div>
							<div className="text-center">
								<div className="text-4xl mb-4">✅</div>
								<h3 className="font-semibold mb-2 text-foreground">
									RERA Approved
								</h3>
								<p className="text-sm text-muted-foreground">
									All properties are RERA certified and verified
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-card border-t border-border">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
						Ready to Invest in Your Dream Home?
					</h2>
					<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
						Schedule a site visit and explore the best properties in Ulwe with our
						expert guidance.
					</p>
					<Button asChild size="lg" className="gradient-luxury">
						<Link to="/contact">Schedule a Visit</Link>
					</Button>
				</div>
			</section>
		</div>
	);
};

export default FlatsSale;
