import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, Search, ShieldCheck, ShoppingBag, Sparkles, CircleCheck } from "lucide-react";
import { listings } from "@/lib/campus-data";
import { ListingCard } from "@/components/listing-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Campus Crate — Your Campus, Connected" }, { name: "description", content: "Find lost items, student deals, and trusted housing in one campus community." }, { property: "og:title", content: "Campus Crate — Your Campus, Connected" }, { property: "og:description", content: "Find lost items, student deals, and trusted housing in one campus community." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Index,
});

const features = [
  { title: "Lost & Found", copy: "Lost something? Found something? Help it find its way home.", action: "Browse Lost & Found", to: "/lost-and-found", icon: Search, tone: "feature-white" },
  { title: "Campus Marketplace", copy: "Buy smart, sell easily, and give useful things a second life.", action: "Explore Marketplace", to: "/marketplace", icon: ShoppingBag, tone: "feature-white" },
  { title: "Campus To-Let", copy: "Discover student-friendly rooms and trusted housing near campus.", action: "Find Housing", to: "/to-let", icon: Building2, tone: "feature-green" },
];

function Index() {
  const [tab, setTab] = useState("all");
  const visible = listings.filter((item) => tab === "all" || item.module === tab).slice(0, 8);
  return <main>
    <section className="hero-grid border-b border-border"><div className="container-shell grid min-h-[410px] items-center gap-10 py-14 lg:grid-cols-[1.2fr_.8fr]">
      <div className="max-w-3xl"><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary"><CircleCheck className="size-3.5" />Built for students, By student</div><h1 className="font-display1 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"><i>Everything your campus life needs,</i> <span className="text-primary">in one place.</span></h1><p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Find what you've lost, get a great deal, or discover your next place—all through people from your campus.</p><div className="mt-7 flex flex-wrap gap-3"><Button size="lg" asChild><Link to="/marketplace">Explore Campus Crate<ArrowRight /></Link></Button><Button size="lg" variant="outline" asChild><Link to="/lost-and-found">Browse lost items</Link></Button></div></div>
      <div className="hidden lg:block"><div className="relative mx-auto aspect-square max-w-[330px]"><div className="absolute inset-5 rotate-6 rounded-[2rem] border border-primary/15 bg-primary-soft" /><div className="absolute inset-10 -rotate-3 rounded-[2rem] border border-border bg-card shadow-card"><div className="flex h-full flex-col items-center justify-center p-10 text-center"><span className="flex size-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-brand"><ShieldCheck className="size-10" /></span><p className="mt-6 font-display text-2xl font-bold">A safer campus circle</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Student-first listings from the people and places around you.</p></div></div></div></div>
    </div></section>
    <section className="container-shell py-16"><div className="mb-8"><p className="eyebrow">ONE COMMUNITY. THREE ESSENTIALS.</p><h2 className="mt-2 font-display text-3xl font-bold">What do you need today?</h2></div><div className="grid gap-5 md:grid-cols-3">{features.map((feature) => <article key={feature.title} className={`rounded-xl border border-border p-6 shadow-soft ${feature.tone}`}><span className="flex size-11 items-center justify-center rounded-xl bg-card text-primary shadow-sm"><feature.icon /></span><h3 className="mt-8 font-display text-xl font-bold">{feature.title}</h3><p className="mt-2 min-h-12 text-sm leading-relaxed text-muted-foreground dark:text-white/80">{feature.copy}</p><Button className="mt-6 w-full justify-between" variant="outline" asChild><Link to={feature.to}>{feature.action}<ArrowRight /></Link></Button></article>)}</div></section>
    <section className="border-y border-border bg-surface-subtle"><div className="container-shell py-16"><div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">FRESH FROM THE COMMUNITY</p><h2 className="mt-2 font-display text-3xl font-bold">Recent highlights</h2><p className="mt-2 text-sm text-muted-foreground">See what's happening around campus right now.</p></div><Tabs value={tab} onValueChange={setTab}><TabsList><TabsTrigger value="all">All</TabsTrigger><TabsTrigger value="lost">Lost & Found</TabsTrigger><TabsTrigger value="market">Marketplace</TabsTrigger><TabsTrigger value="housing">To-Let</TabsTrigger></TabsList></Tabs></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{visible.map((item) => <ListingCard key={item.id} listing={item} compact />)}</div></div></section>
    <footer className="container-shell flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-2 font-display font-bold text-foreground"><span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Building2 className="size-4" /></span>Campus Crate</div><p>Made for campus life. Be kind, meet safely, and look out for each other.</p></footer>
  </main>;
}
