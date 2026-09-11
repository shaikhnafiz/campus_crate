import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Mail, MapPin, MessageCircle, Phone, Share2, ShieldCheck, Tag } from "lucide-react";
import { toast } from "sonner";
import { getListing, listingDescription, listingOwner, moduleLabel } from "@/lib/campus-data";
import { ListingImage } from "@/components/listing-card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/listing/$id")({
  loader: ({ params }) => {
    const listing = getListing(Number(params.id));
    if (!listing) throw notFound();
    return { listing };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Listing unavailable — Campus Crate" }, { name: "robots", content: "noindex" }] };
    const title = `${loaderData.listing.title} — Campus Crate`;
    const description = listingDescription(loaderData.listing).slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ListingDetails,
});

function ListingDetails() {
  const { listing } = Route.useLoaderData();
  const owner = listingOwner(listing);
  const backTo = listing.module === "lost" ? "/lost-and-found" : listing.module === "market" ? "/marketplace" : "/to-let";

  return (
    <main className="container-shell py-8">
      <Link to={backTo} className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" />Back to {moduleLabel[listing.module]}
      </Link>

      <div className="mt-5 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="h-72 overflow-hidden rounded-xl border border-border sm:h-96">
            <ListingImage listing={listing} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">{listing.tag}</span>
            <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${listing.status === "FOUND" ? "bg-success-soft text-success" : listing.status === "LOST" ? "bg-danger-soft text-danger" : "bg-primary-soft text-primary"}`}>{listing.status}</span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{listing.title}</h1>
          <p className="mt-2 font-display text-2xl font-bold text-primary">{listing.detail}</p>
          <div className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <p className="flex items-center gap-2"><MapPin className="size-4 text-primary" />{listing.module === "lost" ? listing.detail : listing.meta}</p>
            <p className="flex items-center gap-2"><CalendarDays className="size-4" />{listing.module === "lost" ? listing.meta : "Posted this week"}</p>
            <p className="flex items-center gap-2"><Tag className="size-4" />{moduleLabel[listing.module]} · {listing.tag}</p>
          </div>
          <h2 className="mt-8 font-display text-lg font-semibold">Description</h2>
          <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{listingDescription(listing)}</p>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
            <p className="text-sm font-semibold text-muted-foreground">{listing.module === "housing" ? "Landlord" : listing.module === "market" ? "Seller" : "Posted by"}</p>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{owner.name.slice(0, 2).toUpperCase()}</div>
              <div>
                <p className="font-semibold">{owner.name}</p>
                <p className="flex items-center gap-1 text-xs text-success"><ShieldCheck className="size-3.5" />{owner.role}</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Phone className="size-4" />{owner.phone}</p>
              <p className="flex items-center gap-2"><Mail className="size-4" />{owner.email}</p>
            </div>
            <div className="mt-5 grid gap-2">
              <Button onClick={() => toast.success(`Message sent to ${owner.name}`)}><MessageCircle />{listing.module === "lost" ? "Contact owner" : "Message"}</Button>
              <Button variant="outline" onClick={() => toast.success("Listing link copied")}><Share2 />Share listing</Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Meet in public campus spaces and verify items before any payment.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
