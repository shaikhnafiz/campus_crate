import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as buttonVariants, r as cn } from "./button-C0l3U_YE.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as CalendarDays, _ as MessageCircle, n as UserRound, y as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listing-card-E3pEwhAN.js
var import_jsx_runtime = require_jsx_runtime();
var campus_listings_default = "/assets/campus-listings-0ZouSTjP.jpg";
function ListingImage({ listing }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sprite-frame",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			className: `sprite-image sprite-${listing.image}`,
			src: campus_listings_default,
			alt: listing.title,
			loading: "lazy",
			width: 1600,
			height: 900
		})
	});
}
function ListingCard({ listing, compact = false }) {
	const found = listing.status === "FOUND";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/listing/$id",
		params: { id: String(listing.id) },
		className: "group block overflow-hidden rounded-xl border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative", compact ? "h-40" : "h-48"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingImage, { listing }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide", listing.module === "lost" ? found ? "bg-success-soft text-success" : "bg-danger-soft text-danger" : "bg-card/95 text-foreground shadow-sm"),
				children: listing.module === "housing" ? listing.detail : listing.status
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-accent px-2 py-1 text-[11px] font-semibold text-accent-foreground",
						children: listing.tag
					}), listing.module === "market" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: listing.meta
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "line-clamp-1 font-display text-base font-semibold text-card-foreground",
					children: listing.title
				}),
				listing.module === "market" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-bold text-primary",
						children: listing.detail
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-3.5" }), listing.owner]
					})]
				}) : listing.module === "housing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 flex items-center gap-1.5 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-primary" }), listing.meta]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 space-y-1.5 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-primary" }), listing.detail]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4" }), listing.meta]
					})]
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn(buttonVariants({ variant: listing.module === "lost" ? "outline" : "default" }), "mt-4 w-full"),
					children: [listing.module === "lost" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), listing.module === "lost" ? "Contact" : "View details"]
				})
			]
		})]
	});
}
//#endregion
export { ListingImage as n, ListingCard as t };
