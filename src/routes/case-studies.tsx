import { createFileRoute } from "@tanstack/react-router";
import { Boxes, ChartNoAxesCombined, Store, Workflow } from "lucide-react";

import { BusinessPage } from "@/components/business-page";

const visualSections = [
	{
		title: "From friction to a measurable operating rhythm",
		copy: "When a team is overwhelmed, the right fix is rarely more volume. It is a clearer operating system and cleaner decision flow.",
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
		items: ["Workflow clarity", "Priority control", "Support flow"],
		tint: "from-white/5 via-white/2 to-transparent",
	},
	{
		title: "Global launch planning built around sequence",
		copy: "Cross-border readiness depends on layering infrastructure, legal structure, and operational decisions in the right order.",
		image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
		items: ["Launch sequence", "Access planning", "Market rollout"],
		tint: "from-white/5 via-white/2 to-transparent",
	},
	{
		title: "Inventory strategy that protects the customer experience",
		copy: "A better logistics footprint lowers risk, improves timing, and reduces the cost of working around poor fulfillment decisions.",
		image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
		items: ["Inventory flow", "Fulfillment logic", "Delivery certainty"],
		tint: "from-white/5 via-white/2 to-transparent",
	},
];

export const Route = createFileRoute("/case-studies")({
	head: () => ({
		meta: [
			{ title: "Commerce Operating Scenarios | GlobalDealzLLC" },
			{
				name: "description",
				content: "See representative ways GlobalDealzLLC combines store operations, infrastructure, and fulfillment to solve commerce challenges.",
			},
			{ property: "og:title", content: "Commerce Operating Scenarios | GlobalDealzLLC" },
			{
				property: "og:description",
				content: "Representative growth scenarios across marketplaces, infrastructure, and fulfillment.",
			},
			{ property: "og:type", content: "website" },
			{ name: "twitter:card", content: "summary" },
		],
	}),
	component: CaseStudiesPage,
});

function CaseStudiesPage() {
	return (
		<BusinessPage
			eyebrow="Case Studies"
			title="How connected commerce systems solve practical growth constraints."
			intro="These representative scenarios show how our capabilities can be combined. They illustrate operating models, not claims about a named client or guaranteed results."
			features={[
				{
					icon: Store,
					eyebrow: "Scenario 01",
					title: "From owner bottleneck to managed store",
					copy: "An owner with limited operating bandwidth moves product research, listings, and customer support into one managed workflow.",
					points: [
						"Constraint: fragmented daily execution",
						"Approach: centralized operating ownership",
						"Outcome focus: consistency and capacity",
					],
				},
				{
					icon: Workflow,
					eyebrow: "Scenario 02",
					title: "Building a cross-border foundation",
					copy: "A partner preparing for international marketplaces coordinates entity, payment, and secure access requirements.",
					points: [
						"Constraint: disconnected setup tasks",
						"Approach: sequenced infrastructure plan",
						"Outcome focus: launch readiness",
					],
				},
				{
					icon: Boxes,
					eyebrow: "Scenario 03",
					title: "Inventory closer to customers",
					copy: "A growing catalog uses regional warehousing to create a more resilient fulfillment footprint.",
					points: [
						"Constraint: long-distance fulfillment",
						"Approach: selective inventory placement",
						"Outcome focus: service and delivery reliability",
					],
				},
				{
					icon: ChartNoAxesCombined,
					eyebrow: "Scenario 04",
					title: "An operator-investor partnership",
					copy: "Capital and operating capabilities are aligned through defined roles, milestones, and reporting.",
					points: [
						"Constraint: capability imbalance",
						"Approach: structured joint venture",
						"Outcome focus: accountable execution",
					],
				},
			]}
			closingTitle="Your situation deserves its own operating plan."
			closingCopy="Results depend on market conditions, platform rules, product economics, and execution. We begin by understanding those variables clearly."
		>
			<section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
				<div className="flex flex-col gap-6">
					{visualSections.map((section, index) => (
						<article
							key={section.title}
							className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 text-foreground shadow-[0_30px_90px_rgba(15,23,42,0.14)]"
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
										Scenario highlight
									</p>
									<h3 className="mt-4 text-3xl font-light">{section.title}</h3>
									<p className="mt-4 text-sm leading-7 text-muted-foreground">{section.copy}</p>
									<div className="mt-7 grid gap-3 sm:grid-cols-3">
										{section.items.map((item) => (
											<div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs font-medium text-slate-100">
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
							Commercial pattern
						</p>
						<h3 className="mt-4 text-4xl font-light text-foreground">The point is not one tactic — it is the system.</h3>
					</div>
					<p className="max-w-xl text-sm leading-7 text-muted-foreground">
							Growth becomes more durable when the operational, financial, and fulfillment layers are constructed around each other instead of independently.
						</p>
					</div>

					<div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
					<div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_40px_100px_rgba(15,23,42,0.14)]">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.08),transparent_35%)]" />
							<video
								className="h-[420px] w-full object-cover opacity-90"
								autoPlay
								muted
								loop
								playsInline
								poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
							>
								<source
									src="https://cdn.coverr.co/videos/coverr-people-working-in-an-office-1562230215343/1080p.mp4"
									type="video/mp4"
								/>
							</video>
						</div>

						<div className="grid gap-5">
							{[
								"Integrated operating workflow",
								"Infrastructure matched to scale",
								"Warehouse alignment and fulfillment clarity",
								"Commercial accountability and reporting",
							].map((item) => (
							<div key={item} className="rounded-[22px] border border-white/10 bg-white/5 p-5 text-sm text-muted-foreground shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
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
