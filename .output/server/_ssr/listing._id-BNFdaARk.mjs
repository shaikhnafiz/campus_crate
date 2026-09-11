import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-C0l3U_YE.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowLeft, M as CalendarDays, _ as MessageCircle, a as Tag, b as Mail, l as ShieldCheck, m as Phone, u as Share2, y as MapPin } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as moduleLabel, n as listingDescription, r as listingOwner } from "./campus-data-DfHBFken.mjs";
import { t as Route } from "./listing._id-DPgvI_Ke.mjs";
import { n as ListingImage } from "./listing-card-E3pEwhAN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listing._id-BNFdaARk.js
var import_jsx_runtime = require_jsx_runtime();
function ListingDetails() {
	const { listing } = Route.useLoaderData();
	const owner = listingOwner(listing);
	const backTo = listing.module === "lost" ? "/lost-and-found" : listing.module === "market" ? "/marketplace" : "/to-let";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-shell py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: backTo,
			className: "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }),
				"Back to ",
				moduleLabel[listing.module]
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-8 lg:grid-cols-[1.6fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72 overflow-hidden rounded-xl border border-border sm:h-96",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingImage, { listing })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground",
						children: listing.tag
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `rounded-full px-2.5 py-1 text-xs font-bold ${listing.status === "FOUND" ? "bg-success-soft text-success" : listing.status === "LOST" ? "bg-danger-soft text-danger" : "bg-primary-soft text-primary"}`,
						children: listing.status
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
					children: listing.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-2xl font-bold text-primary",
					children: listing.detail
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-primary" }), listing.module === "lost" ? listing.detail : listing.meta]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4" }), listing.module === "lost" ? listing.meta : "Posted this week"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "size-4" }),
								moduleLabel[listing.module],
								" · ",
								listing.tag
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 font-display text-lg font-semibold",
					children: "Description"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl leading-relaxed text-muted-foreground",
					children: listingDescription(listing)
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "lg:sticky lg:top-24 lg:self-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-5 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-muted-foreground",
							children: listing.module === "housing" ? "Landlord" : listing.module === "market" ? "Seller" : "Posted by"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground",
								children: owner.name.slice(0, 2).toUpperCase()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: owner.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-1 text-xs text-success",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), owner.role]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), owner.phone]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), owner.email]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => toast.success(`Message sent to ${owner.name}`),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), listing.module === "lost" ? "Contact owner" : "Message"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => toast.success("Listing link copied"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {}), "Share listing"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-muted-foreground",
							children: "Meet in public campus spaces and verify items before any payment."
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { ListingDetails as component };
