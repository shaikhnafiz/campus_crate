import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { r as cn, t as Button } from "./button-C0l3U_YE.mjs";
import { t as Input } from "./input-Drd4JUO3.mjs";
import { A as Check, N as Building2, c as ShoppingBag, f as Search, w as Funnel } from "../_libs/lucide-react.mjs";
import { a as moduleLabel, i as listings } from "./campus-data-DfHBFken.mjs";
import { t as ListingCard } from "./listing-card-E3pEwhAN.mjs";
import { t as Checkbox } from "./checkbox-B85j75X-.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/feed-page-DuJw7-QM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
var config = {
	lost: {
		eyebrow: "RECONNECT WITH WHAT MATTERS",
		title: "Lost & Found",
		copy: "A trusted space to report missing items and return what you've found.",
		icon: Search
	},
	market: {
		eyebrow: "BUY SMART. PASS IT ON.",
		title: "Campus Marketplace",
		copy: "Useful things from students you can trust, right around campus.",
		icon: ShoppingBag
	},
	housing: {
		eyebrow: "YOUR NEXT PLACE, NEARBY",
		title: "Campus To-Let",
		copy: "Student-friendly rooms and flats, shared by the campus community.",
		icon: Building2
	}
};
function FeedPage({ module }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [active, setActive] = (0, import_react.useState)([]);
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const content = config[module];
	const Icon = content.icon;
	const base = listings.filter((item) => item.module === module);
	const filtered = (0, import_react.useMemo)(() => base.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) && (!active.length || active.some((filter) => `${item.status} ${item.tag} ${item.meta}`.toLowerCase().includes(filter.toLowerCase())))), [
		active,
		base,
		query
	]);
	const groups = module === "lost" ? [
		{
			title: "Type",
			options: ["Lost", "Found"]
		},
		{
			title: "Category",
			options: [
				"Electronics",
				"Bags",
				"Keys",
				"Documents"
			]
		},
		{
			title: "Status",
			options: ["Active", "Resolved"]
		}
	] : module === "market" ? [
		{
			title: "Category",
			options: [
				"Books",
				"Electronics",
				"Furniture",
				"Cycles"
			]
		},
		{
			title: "Condition",
			options: [
				"New",
				"Like new",
				"Used"
			]
		},
		{
			title: "Listing type",
			options: [
				"Sell",
				"Exchange",
				"Donate"
			]
		}
	] : [{
		title: "Type",
		options: [
			"Flat",
			"Room",
			"Mess seat"
		]
	}, {
		title: "Target gender",
		options: [
			"Male",
			"Female",
			"Any"
		]
	}];
	const toggle = (value) => setActive((old) => old.includes(value) ? old.filter((item) => item !== value) : [...old, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface-subtle",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-shell py-10 sm:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex max-w-2xl items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: content.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
						children: content.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: content.copy
					})
				] })]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-shell py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: "Browse listings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [filtered.length, " community posts"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 sm:w-72",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: `Search ${moduleLabel[module].toLowerCase()}…`,
						className: "pl-9"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "lg:hidden",
					onClick: () => setShowFilters(!showFilters),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, {}), "Filters"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[220px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: `${showFilters ? "block" : "hidden"} lg:block`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 lg:sticky lg:top-24",
					children: [
						module !== "lost" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex justify-between text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: module === "housing" ? "Monthly rent" : "Price range" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Any"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							defaultValue: [20, 80],
							max: 100,
							step: 1
						})] }),
						groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "mb-3 text-sm font-semibold",
							children: group.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2.5",
							children: group.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
									checked: active.includes(option),
									onCheckedChange: () => toggle(option)
								}), option]
							}, option))
						})] }, group.title)),
						active.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => setActive([]),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), "Clear filters"]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: filtered.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-3",
				children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingCard, { listing: item }, item.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-dashed border-border py-20 text-center text-muted-foreground",
				children: "No matching listings found."
			}) })]
		})]
	})] });
}
//#endregion
export { FeedPage as t };
