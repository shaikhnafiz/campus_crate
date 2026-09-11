import { Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, MessageCircle, UserRound } from "lucide-react";
import listingSprite from "@/assets/campus-listings.jpg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ListingImage({ listing }) {
  return (
    <div className="sprite-frame">
      <img className={`sprite-image sprite-${listing.image}`} src={listingSprite} alt={listing.title} loading="lazy" width={1600} height={900} />
    </div>
  );
}

export function ListingCard({ listing, compact = false }) {
  const found = listing.status === "FOUND";
  return (
    <Link
      to="/listing/$id"
      params={{ id: String(listing.id) }}
      className="group block overflow-hidden rounded-xl border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-card"
    >
      <div className={cn("relative", compact ? "h-40" : "h-48")}>
        <ListingImage listing={listing} />
        <span className={cn("absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide", listing.module === "lost" ? (found ? "bg-success-soft text-success" : "bg-danger-soft text-danger") : "bg-card/95 text-foreground shadow-sm")}>
          {listing.module === "housing" ? listing.detail : listing.status}
        </span>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-accent px-2 py-1 text-[11px] font-semibold text-accent-foreground">{listing.tag}</span>
          {listing.module === "market" && <span className="text-xs text-muted-foreground">{listing.meta}</span>}
        </div>
        <h3 className="line-clamp-1 font-display text-base font-semibold text-card-foreground">{listing.title}</h3>
        {listing.module === "market" ? (
          <div className="mt-3 flex items-center justify-between">
            <p className="font-display text-lg font-bold text-primary">{listing.detail}</p>
            <span className="flex items-center gap-1 text-xs text-muted-foreground"><UserRound className="size-3.5" />{listing.owner}</span>
          </div>
        ) : listing.module === "housing" ? (
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="size-4 text-primary" />{listing.meta}</p>
        ) : (
          <div className="mt-2 space-y-1.5 text-sm text-muted-foreground">
            <p className="flex items-center gap-1.5"><MapPin className="size-4 text-primary" />{listing.detail}</p>
            <p className="flex items-center gap-1.5"><CalendarDays className="size-4" />{listing.meta}</p>
          </div>
        )}
        {!compact && (
          <span className={cn(buttonVariants({ variant: listing.module === "lost" ? "outline" : "default" }), "mt-4 w-full")}>
            {listing.module === "lost" && <MessageCircle />}{listing.module === "lost" ? "Contact" : "View details"}
          </span>
        )}
      </div>
    </Link>
  );
}
