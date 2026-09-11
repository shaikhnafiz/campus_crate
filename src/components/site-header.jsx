import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Box, LogIn, Menu, Moon, Plus, Search, Settings, Sun, UserPlus, UserRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CreatePostDialog } from "@/components/create-post-dialog";

export function SiteHeader() {
  const [createOpen, setCreateOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();
  const runSearch = (event) => { event.preventDefault(); const form = new FormData(event.currentTarget); const section = String(form.get("section")); if (section === "lost") navigate({ to: "/lost-and-found" }); else if (section === "market") navigate({ to: "/marketplace" }); else if (section === "housing") navigate({ to: "/to-let" }); };
  const links = [{ to: "/lost-and-found", label: "Lost & Found" }, { to: "/marketplace", label: "Marketplace" }, { to: "/to-let", label: "To-Let" }];
  return <>
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/92 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center gap-5">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Campus Crate home"><span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-brand"><Box className="size-5" /></span><span className="font-display text-lg font-bold">Campus Crate</span></Link>
        <nav className="hidden items-center gap-1 lg:flex">{links.map((link) => <Link key={link.to} to={link.to} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground" activeProps={{ className: "bg-accent text-foreground" }}>{link.label}</Link>)}</nav>
        <form onSubmit={runSearch} className="mx-auto hidden h-10 max-w-md flex-1 items-center rounded-xl border border-border bg-muted/60 md:flex">
          <select name="section" aria-label="Search category" className="h-full w-28 bg-transparent px-3 text-xs font-semibold text-foreground outline-none"><option value="all">All</option><option value="lost">Lost & Found</option><option value="market">Marketplace</option><option value="housing">To-Let</option></select><span className="h-5 w-px bg-border"/><Search className="mx-3 size-4 text-muted-foreground"/><input name="query" aria-label="Search Campus Crate" placeholder="Search campus…" className="min-w-0 flex-1 bg-transparent pr-3 text-sm outline-none placeholder:text-muted-foreground" />
        </form>
        <div className="ml-auto flex items-center gap-2"><Button className="hidden sm:inline-flex" onClick={() => setCreateOpen(true)}><Plus />Create Post</Button><Button variant="ghost" size="icon" className="hidden sm:inline-flex" aria-label="Toggle theme" onClick={() => { document.documentElement.classList.toggle("dark"); setDark(!dark); }}>{dark ? <Sun /> : <Moon />}</Button>
          <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="rounded-full"><Avatar className="size-8"><AvatarFallback>NB</AvatarFallback></Avatar></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><div className="px-2 py-1.5"><p className="text-sm font-semibold">Nafiz Barakah</p><p className="text-xs text-muted-foreground">Verified student</p></div><DropdownMenuSeparator/><DropdownMenuItem asChild><Link to="/my-listings"><UserRound/>My listings</Link></DropdownMenuItem><DropdownMenuItem asChild><Link to="/edit-profile"><Settings/>Edit profile</Link></DropdownMenuItem><DropdownMenuItem onClick={() => setCreateOpen(true)}><Plus/>Create post</DropdownMenuItem><DropdownMenuSeparator/><DropdownMenuItem asChild><Link to="/login"><LogIn/>Sign in</Link></DropdownMenuItem><DropdownMenuItem asChild><Link to="/signup"><UserPlus/>Create account</Link></DropdownMenuItem></DropdownMenuContent></DropdownMenu>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X/> : <Menu/>}</Button>
        </div>
      </div>
      {mobileOpen && <nav className="container-shell grid gap-1 border-t border-border py-3 lg:hidden">{links.map((link) => <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent">{link.label}</Link>)}<Button className="mt-2 sm:hidden" onClick={() => setCreateOpen(true)}><Plus/>Create Post</Button></nav>}
    </header><CreatePostDialog open={createOpen} onOpenChange={setCreateOpen}/>
  </>;
}
