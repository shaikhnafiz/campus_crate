import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-C0l3U_YE.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as CircleCheck, T as Ellipsis, h as PenLine, i as Trash2, l as ShieldCheck } from "../_libs/lucide-react.mjs";
import { i as listings } from "./campus-data-DfHBFken.mjs";
import { n as ListingImage } from "./listing-card-E3pEwhAN.mjs";
import { n as TabsList, r as TabsTrigger, t as Tabs } from "./tabs-CdRWkLwa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-listings-B3OhcB2L.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MyListings() {
	const [tab, setTab] = (0, import_react.useState)("all");
	const [done, setDone] = (0, import_react.useState)([]);
	const [removed, setRemoved] = (0, import_react.useState)([]);
	const mine = listings.filter((item) => [
		3,
		5,
		7,
		8
	].includes(item.id) && !removed.includes(item.id) && (tab === "all" || item.module === tab));
	const action = {
		lost: "Mark resolved",
		market: "Mark sold",
		housing: "Mark rented"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-shell py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground",
					children: "NB"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-bold",
						children: "Nafiz Barakah"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1 rounded-full bg-success-soft px-2 py-1 text-xs font-semibold text-success",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), "Verified Student"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Member since January 2026 · University community"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/edit-profile",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, {}), "Edit profile"]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: "My listings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Manage everything you've shared with campus."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-xl border border-border bg-card",
				children: [mine.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid gap-4 border-b border-border p-4 last:border-0 sm:grid-cols-[88px_1fr_auto] sm:items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-20 overflow-hidden rounded-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingImage, { listing: item })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-accent-foreground",
									children: item.tag
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									item.detail,
									" · ",
									item.meta
								]
							}),
							done.includes(item.id) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 flex items-center gap-1 text-xs font-semibold text-success",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" }), "Completed"]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "outline",
									disabled: done.includes(item.id),
									onClick: () => setDone([...done, item.id]),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}), action[item.module]]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "ghost",
									"aria-label": "Edit listing",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "ghost",
									"aria-label": "Delete listing",
									onClick: () => setRemoved([...removed, item.id]),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "ghost",
									"aria-label": "More options",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {})
								})
							]
						})
					]
				}, item.id)), mine.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-16 text-center text-muted-foreground",
					children: "No listings in this category."
				})]
			})]
		})]
	});
}
//#endregion
export { MyListings as component };
