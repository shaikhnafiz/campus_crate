import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-C0l3U_YE.mjs";
import { t as Input } from "./input-Drd4JUO3.mjs";
import { t as Label } from "./label-BsPZHm4o.mjs";
import { t as Textarea } from "./textarea-BAjNaazS.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowLeft, S as LoaderCircle, j as Camera, l as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/edit-profile-FE2YKscL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EditProfilePage() {
	const navigate = useNavigate();
	const [avatar, setAvatar] = (0, import_react.useState)(null);
	const [values, setValues] = (0, import_react.useState)({
		name: "Nafiz Barakah",
		email: "nafiz@university.edu",
		phone: "+880 1712 345678",
		department: "Computer Science & Engineering",
		address: "Dhanmondi, Dhaka",
		bio: "Third-year CSE student. Usually around the Central Library."
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [saving, setSaving] = (0, import_react.useState)(false);
	const pickAvatar = (event) => {
		const file = event.target.files?.[0];
		if (file) setAvatar(URL.createObjectURL(file));
	};
	const save = (event) => {
		event.preventDefault();
		const next = {};
		if (values.name.trim().length < 2) next["name"] = "Please enter your full name.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next["email"] = "Enter a valid email address.";
		if (values.phone.replace(/\D/g, "").length < 8) next["phone"] = "Enter a reachable phone number.";
		if (values.bio.length > 200) next["bio"] = "Keep your bio under 200 characters.";
		setErrors(next);
		if (Object.keys(next).length) return;
		setSaving(true);
		setTimeout(() => {
			setSaving(false);
			toast.success("Profile updated");
			navigate({ to: "/my-listings" });
		}, 600);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-shell max-w-3xl py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/my-listings",
				className: "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Back to my listings"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-3xl font-bold",
				children: "Edit profile"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-muted-foreground",
				children: "Keep your contact details current so students can reach you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 space-y-8",
				onSubmit: save,
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-5 rounded-xl border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-20 items-center justify-center overflow-hidden rounded-full bg-primary text-xl font-bold text-primary-foreground",
								children: avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: avatar,
									alt: "Profile preview",
									className: "size-full object-cover"
								}) : "NB"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "absolute -bottom-1 -right-1 flex size-8 cursor-pointer items-center justify-center rounded-full border border-border bg-background shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Upload profile photo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: "image/*",
										className: "hidden",
										onChange: pickAvatar
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1.5 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-success" }), "Verified Student"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "JPG or PNG, square images look best."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "name",
										children: "Full name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "name",
										value: values.name,
										onChange: (e) => setValues({
											...values,
											name: e.target.value
										}),
										"aria-invalid": !!errors["name"]
									}),
									errors["name"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium text-danger",
										children: errors["name"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										type: "email",
										value: values.email,
										onChange: (e) => setValues({
											...values,
											email: e.target.value
										}),
										"aria-invalid": !!errors["email"]
									}),
									errors["email"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium text-danger",
										children: errors["email"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "phone",
										children: "Phone"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "phone",
										value: values.phone,
										onChange: (e) => setValues({
											...values,
											phone: e.target.value
										}),
										"aria-invalid": !!errors["phone"]
									}),
									errors["phone"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium text-danger",
										children: errors["phone"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "department",
									children: "Department"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "department",
									value: values.department,
									onChange: (e) => setValues({
										...values,
										department: e.target.value
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "address",
									children: "Address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "address",
									value: values.address,
									onChange: (e) => setValues({
										...values,
										address: e.target.value
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 sm:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "bio",
										children: "About you"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "bio",
										rows: 4,
										value: values.bio,
										onChange: (e) => setValues({
											...values,
											bio: e.target.value
										}),
										"aria-invalid": !!errors["bio"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [values.bio.length, "/200"]
									}),
									errors["bio"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium text-danger",
										children: errors["bio"]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							disabled: saving,
							children: [saving && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), "Save changes"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => navigate({ to: "/my-listings" }),
							children: "Cancel"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { EditProfilePage as component };
