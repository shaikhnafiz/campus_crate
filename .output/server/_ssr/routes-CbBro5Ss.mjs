import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-C0l3U_YE.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ArrowRight, N as Building2, c as ShoppingBag, f as Search, l as ShieldCheck, s as Sparkles } from "../_libs/lucide-react.mjs";
import { i as listings } from "./campus-data-DfHBFken.mjs";
import { t as ListingCard } from "./listing-card-E3pEwhAN.mjs";
import { n as TabsList, r as TabsTrigger, t as Tabs } from "./tabs-CdRWkLwa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CbBro5Ss.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var features = [
	{
		title: "Lost & Found",
		copy: "Lost something? Found something? Help it find its way home.",
		action: "Browse Lost & Found",
		to: "/lost-and-found",
		icon: Search,
		tone: "feature-coral"
	},
	{
		title: "Campus Marketplace",
		copy: "Buy smart, sell easily, and give useful things a second life.",
		action: "Explore Marketplace",
		to: "/marketplace",
		icon: ShoppingBag,
		tone: "feature-mint"
	},
	{
		title: "Campus To-Let",
		copy: "Discover student-friendly rooms and trusted housing near campus.",
		action: "Find Housing",
		to: "/to-let",
		icon: Building2,
		tone: "feature-indigo"
	}
];
function Index() {
	const [tab, setTab] = (0, import_react.useState)("all");
	const visible = listings.filter((item) => tab === "all" || item.module === tab).slice(0, 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "hero-grid border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-shell grid min-h-[410px] items-center gap-10 py-14 lg:grid-cols-[1.2fr_.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), "Built for students, powered by community"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl",
							children: ["Everything your campus life needs, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "in one place."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Find what you've lost, get a great deal, or discover your next place—all through people from your campus."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/marketplace",
									children: ["Explore Campus Crate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "outline",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/lost-and-found",
									children: "Browse lost items"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto aspect-square max-w-[330px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-5 rotate-6 rounded-[2rem] border border-primary/15 bg-primary-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-10 -rotate-3 rounded-[2rem] border border-border bg-card shadow-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-full flex-col items-center justify-center p-10 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-brand",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-10" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 font-display text-2xl font-bold",
										children: "A safer campus circle"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: "Student-first listings from the people and places around you."
									})
								]
							})
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-shell py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "ONE COMMUNITY. THREE ESSENTIALS."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-bold",
					children: "What do you need today?"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-3",
				children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `rounded-xl border border-border p-6 shadow-soft ${feature.tone}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-11 items-center justify-center rounded-xl bg-card text-primary shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 font-display text-xl font-bold",
							children: feature.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 min-h-12 text-sm leading-relaxed text-muted-foreground",
							children: feature.copy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-6 w-full justify-between",
							variant: "outline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: feature.to,
								children: [feature.action, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})
					]
				}, feature.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface-subtle",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-shell py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "FRESH FROM THE COMMUNITY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-bold",
							children: "Recent highlights"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "See what's happening around campus right now."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
						value: tab,
						onValueChange: setTab,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "all",
								children: "All"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "lost",
								children: "Lost & Found"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "market",
								children: "Marketplace"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "housing",
								children: "To-Let"
							})
						] })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: visible.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingCard, {
						listing: item,
						compact: true
					}, item.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "container-shell flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 font-display font-bold text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4" })
				}), "Campus Crate"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Made for campus life. Be kind, meet safely, and look out for each other." })]
		})
	] });
}
//#endregion
export { Index as component };
