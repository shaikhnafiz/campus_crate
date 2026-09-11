//#region node_modules/.nitro/vite/services/ssr/assets/campus-data-DfHBFken.js
var getListing = (id) => listings.find((item) => item.id === id);
var listingOwner = (listing) => ({
	name: listing.owner ?? "Nafiz Barakah",
	role: listing.module === "housing" ? "Landlord · Verified" : listing.module === "market" ? "Student seller · Verified" : "Student · Verified",
	phone: listing.contact ?? "+880 1712 345678",
	email: "campuscrate@university.edu"
});
var listingDescription = (listing) => listing.description ?? (listing.module === "lost" ? `${listing.title} was reported at ${listing.detail} on ${listing.meta}. Please describe an identifying detail when you get in touch so the item goes back to the right person. Meetups happen on campus during daytime hours.` : listing.module === "market" ? `${listing.title} in ${listing.meta.toLowerCase()} condition, offered at ${listing.detail}. Handover on campus is preferred, and you're welcome to inspect it before deciding. Message the seller to arrange a time that suits you.` : `${listing.title} available at ${listing.detail}. Located in ${listing.meta}, with easy transport to campus. Includes essential furniture, reliable water and electricity, and a quiet environment suited to studying.`);
var listings = [
	{
		id: 1,
		module: "lost",
		title: "Black wireless earbuds",
		detail: "Central Library, 2nd floor",
		meta: "Today, 10:30 AM",
		tag: "Electronics",
		status: "LOST",
		image: 0
	},
	{
		id: 2,
		module: "lost",
		title: "Navy blue backpack",
		detail: "Found near Arts Building",
		meta: "Yesterday",
		tag: "Bags",
		status: "FOUND",
		image: 1
	},
	{
		id: 3,
		module: "market",
		title: "Casio scientific calculator",
		detail: "৳1,200",
		meta: "Like new",
		tag: "Sell",
		status: "AVAILABLE",
		image: 2,
		owner: "Adnan R."
	},
	{
		id: 4,
		module: "market",
		title: "Campus commuter bicycle",
		detail: "৳8,500",
		meta: "Used · Great condition",
		tag: "Sell",
		status: "AVAILABLE",
		image: 3,
		owner: "Maliha S."
	},
	{
		id: 5,
		module: "housing",
		title: "Furnished room near campus",
		detail: "৳6,500 / month",
		meta: "Dhanmondi · 0.8 km away",
		tag: "Room",
		status: "FEMALE",
		image: 4
	},
	{
		id: 6,
		module: "housing",
		title: "Bright shared apartment",
		detail: "৳9,000 / month",
		meta: "Mohammadpur · 1.2 km away",
		tag: "Flat",
		status: "ANY",
		image: 5
	},
	{
		id: 7,
		module: "lost",
		title: "Keys with navy keychain",
		detail: "Science Annex cafeteria",
		meta: "Sep 8",
		tag: "Keys",
		status: "FOUND",
		image: 6
	},
	{
		id: 8,
		module: "market",
		title: "Semester textbook bundle",
		detail: "Free",
		meta: "Good condition",
		tag: "Donate",
		status: "AVAILABLE",
		image: 7,
		owner: "Nafiz B."
	},
	{
		id: 9,
		module: "lost",
		title: "Student ID card",
		detail: "Business Faculty lobby",
		meta: "Sep 7",
		tag: "Documents",
		status: "LOST",
		image: 1
	},
	{
		id: 10,
		module: "market",
		title: "Study desk lamp",
		detail: "৳750",
		meta: "Like new",
		tag: "Exchange",
		status: "AVAILABLE",
		image: 0,
		owner: "Rafi A."
	},
	{
		id: 11,
		module: "housing",
		title: "Quiet mess seat",
		detail: "৳4,200 / month",
		meta: "Lalmatia · 1.5 km away",
		tag: "Mess seat",
		status: "MALE",
		image: 4
	}
];
var moduleLabel = {
	lost: "Lost & Found",
	market: "Marketplace",
	housing: "To-Let"
};
//#endregion
export { moduleLabel as a, listings as i, listingDescription as n, listingOwner as r, getListing as t };
