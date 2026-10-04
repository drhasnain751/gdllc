import { createFileRoute } from "@tanstack/react-router";
import { Building2, CreditCard, Globe2, Warehouse } from "lucide-react";

import { BusinessPage } from "@/components/business-page";

const visualSections = [
	{
		title: "A foundation built for real global readiness",
		copy: "Strong commerce expansion depends on the financial, legal, and operational pieces being completed in the right sequence — not separately and not late.",
		image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
		items: ["Entity flow", "Banking support", "Operational access"],
		tint: "from-white/5 via-white/2 to-transparent",
	},
	{
		title: "Payments and infrastructure that work together",
		copy: "Before a business can scale internationally, the payment and operating foundation must support the actual channels it depends on.",
		image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
		items: ["Gateway flow", "Finance setup", "Payment control"],
		tint: "from-white/5 via-white/2 to-transparent",
	},
	{
		title: "Logistics pathways designed for continuity",
		copy: "Warehousing and fulfillment are not secondary; they determine how reliably a growing business can deliver when demand rises.",
		image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
		items: ["Regional stock", "Fulfillment logic", "Inventory continuity"],
		tint: "from-white/5 via-white/2 to-transparent",
	},
] as const;

export const Route = createFileRoute("/infrastructure")({
	head: () => ({
		meta: [
			{ title: "Commerce Infrastructure & Warehouses | GlobalDealzLLC" },
			{
				name: "description",
				content: "Build international e-commerce infrastructure with entity setup, payment readiness, and four-market warehousing support.",
			},
			{ property: "og:title", content: "Commerce Infrastructure & Warehouses | GlobalDealzLLC" },
			{
				property: "og:description",
				content: "Connected foundations for international selling and fulfillment.",
			},
			{ property: "og:type", content: "website" },
			{ name: "twitter:card", content: "summary" },
		],
	}),
	component: InfrastructurePage,
});

function InfrastructurePage() {
	return (
		<BusinessPage
			eyebrow="Infrastructure & Warehouses"
			title="A practical foundation for selling across borders."
			intro="Bring the company, payment, access, and fulfillment layers of international commerce into one coordinated setup."
			features={[
				{
					icon: Building2,
					eyebrow: "Entities",
					title: "US and UK company setup",
					copy: "Formation support designed around the practical needs of marketplace operators and international partners.",
					points: [
						"US LLC setup coordination",
						"UK LTD setup coordination",
						"Structured onboarding documentation",
					],
				},
				{
					icon: CreditCard,
					eyebrow: "Payments",
					title: "Gateway readiness",
					copy: "Prepare the operating foundation needed to connect eligible payment services and business banking providers.",
					points: [
						"Provider readiness checks",
						"Account setup coordination",
						"Operational payment workflows",
					],
				},
				{
					icon: Warehouse,
					eyebrow: "Warehousing",
					title: "Four-market fulfillment",
					copy: "Coordinate inventory across key customer markets without managing disconnected providers alone.",
					points: ["United States", "United Kingdom and Germany", "Australia"],
				},
				{
					icon: Globe2,
					eyebrow: "Control",
					title: "Connected operations",
					copy: "Keep access, inventory, and fulfillment processes aligned as the store footprint expands.",
					points: ["Secure remote workflows", "Inventory visibility", "Fulfillment coordination"],
				},
			]}
			closingTitle="Put the right infrastructure beneath every new market."
			closingCopy="We scope the appropriate entity, payment, access, and fulfillment components after understanding your channels and expansion plan."
			theme={{
				page: "bg-background text-foreground",
				hero: "grid-fade border-b border-border",
				heroBorder: "border-border/80",
				eyebrow: "text-accent-strong",
				accent: "text-accent-strong",
				button: "rounded-full",
				buttonSecondary: "rounded-full",
				panel: "bg-dark-panel text-dark-panel-foreground",
				panelBorder: "border-white/10",
				panelForeground: "text-dark-panel-foreground/65",
				card: "bg-card/80",
				cardBorder: "border-border",
			}}
		>
			<section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
				<div className="flex flex-col gap-6">
					{visualSections.map((section, index) => (
						<article
							key={section.title}
							className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(15,23,42,0.14)]"
						>
							<div className={`absolute inset-0 bg-gradient-to-br ${section.tint}`} />
							<div className="relative grid lg:grid-cols-2">
								<div className={index % 2 === 0 ? "order-1" : "order-2 lg:order-1"}>
									<img
										src={section.image}
										alt={section.title}
										className="h-full min-h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
									/>
								</div>
								<div
									className={
										index % 2 === 0
											? "order-2 flex flex-col justify-center p-8 lg:p-12"
											: "order-1 flex flex-col justify-center p-8 lg:p-12"
									}
								>
									<p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-strong">
										Infrastructure layer
									</p>
									<h3 className="mt-4 text-3xl font-light text-white">{section.title}</h3>
									<p className="mt-4 text-sm leading-7 text-muted-foreground">{section.copy}</p>
									<div className="mt-7 grid gap-3 sm:grid-cols-3">
										{section.items.map((item) => (
											<div
												key={item}
												className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs font-medium text-muted-foreground"
											>
												{item}
											</div>
										))}
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="border-y border-white/10 bg-white/2 py-20">
				<div className="mx-auto max-w-7xl px-5 lg:px-8">
					<div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
								Cross-border readiness
							</p>
							<h3 className="mt-4 text-4xl font-light text-foreground">The layers that make global selling workable.</h3>
						</div>
						<p className="max-w-xl text-sm leading-7 text-muted-foreground">
							International commerce still succeeds on operational clarity: the right entity, right access,
							right payments, and a fulfillment model that matches the customer experience.
						</p>
					</div>

					<div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
						<div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_40px_100px_rgba(15,23,42,0.14)]">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.18),transparent_35%)]" />
							<video
								className="h-[420px] w-full object-cover opacity-90"
								autoPlay
								muted
								loop
								playsInline
								poster="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80"
							>
								<source
									src="https://cdn.coverr.co/videos/coverr-warehouse-workers-moving-boxes-1562242987660/1080p.mp4"
									type="video/mp4"
								/>
							</video>
						</div>

						<div className="grid gap-5">
							{[
								"Entity and company structure planning",
								"Payment and banking alignment",
								"Operational access and security",
								"Warehouse sequencing and inventory flow",
							].map((item) => (
								<div
									key={item}
									className="rounded-[22px] border border-white/10 bg-white/5 p-5 text-sm text-muted-foreground shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
								>
									{item}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			
		</BusinessPage>
	);
}
