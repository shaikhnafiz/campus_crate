import { useMemo, useState } from "react";
import { Building2, Check, Filter, Search, ShoppingBag } from "lucide-react";
import { listings, moduleLabel } from "@/lib/campus-data";
import { ListingCard } from "@/components/listing-card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const config = {
  lost: { eyebrow: "RECONNECT WITH WHAT MATTERS", title: "Lost & Found", copy: "A trusted space to report missing items and return what you've found.", icon: Search },
  market: { eyebrow: "BUY SMART. PASS IT ON.", title: "Campus Marketplace", copy: "Useful things from students you can trust, right around campus.", icon: ShoppingBag },
  housing: { eyebrow: "YOUR NEXT PLACE, NEARBY", title: "Campus To-Let", copy: "Student-friendly rooms and flats, shared by the campus community.", icon: Building2 },
};

export function FeedPage({ module }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const content = config[module];
  const Icon = content.icon;
  const base = listings.filter((item) => item.module === module);
  const filtered = useMemo(() => base.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) && (!active.length || active.some((filter) => `${item.status} ${item.tag} ${item.meta}`.toLowerCase().includes(filter.toLowerCase())))), [active, base, query]);
  const groups = module === "lost" ? [{ title: "Type", options: ["Lost", "Found"] }, { title: "Category", options: ["Electronics", "Bags", "Keys", "Documents"] }, { title: "Status", options: ["Active", "Resolved"] }] : module === "market" ? [{ title: "Category", options: ["Books", "Electronics", "Furniture", "Cycles"] }, { title: "Condition", options: ["New", "Like new", "Used"] }, { title: "Listing type", options: ["Sell", "Exchange", "Donate"] }] : [{ title: "Type", options: ["Flat", "Room", "Mess seat"] }, { title: "Target gender", options: ["Male", "Female", "Any"] }];
  const toggle = (value) => setActive((old) => old.includes(value) ? old.filter((item) => item !== value) : [...old, value]);
  return <main>
    <section className="border-b border-border bg-surface-subtle"><div className="container-shell py-10 sm:py-14"><div className="flex max-w-2xl items-start gap-4"><span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary"><Icon/></span><div><p className="eyebrow">{content.eyebrow}</p><h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{content.title}</h1><p className="mt-3 text-muted-foreground">{content.copy}</p></div></div></div></section>
    <section className="container-shell py-8"><div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-display text-xl font-semibold">Browse listings</h2><p className="text-sm text-muted-foreground">{filtered.length} community posts</p></div><div className="flex gap-2"><div className="relative flex-1 sm:w-72"><Search className="absolute left-3 top-2.5 size-4 text-muted-foreground"/><Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={`Search ${moduleLabel[module].toLowerCase()}…`} className="pl-9"/></div><Button variant="outline" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}><Filter/>Filters</Button></div></div>
      <div className="grid gap-8 lg:grid-cols-[220px_1fr]"><aside className={`${showFilters ? "block" : "hidden"} lg:block`}><div className="space-y-6 lg:sticky lg:top-24">{module !== "lost" && <div><div className="mb-3 flex justify-between text-sm font-semibold"><span>{module === "housing" ? "Monthly rent" : "Price range"}</span><span className="text-primary">Any</span></div><Slider defaultValue={[20, 80]} max={100} step={1}/></div>}{groups.map((group) => <fieldset key={group.title}><legend className="mb-3 text-sm font-semibold">{group.title}</legend><div className="space-y-2.5">{group.options.map((option) => <label key={option} className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground"><Checkbox checked={active.includes(option)} onCheckedChange={() => toggle(option)}/>{option}</label>)}</div></fieldset>)}{active.length > 0 && <Button variant="ghost" size="sm" onClick={() => setActive([])}><Check/>Clear filters</Button>}</div></aside>
        <div>{filtered.length ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{filtered.map((item) => <ListingCard key={item.id} listing={item}/>)}</div> : <div className="rounded-xl border border-dashed border-border py-20 text-center text-muted-foreground">No matching listings found.</div>}</div>
      </div>
    </section>
  </main>;
}
