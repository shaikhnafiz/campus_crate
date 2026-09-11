import { useRef, useState } from "react";
import { Building2, Check, ChevronLeft, ChevronRight, ImagePlus, Search, ShoppingBag, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const options = [
  { id: "lost", label: "Lost & Found", icon: Search, note: "Report something lost or found" },
  { id: "market", label: "Marketplace", icon: ShoppingBag, note: "Sell, exchange, or donate" },
  { id: "housing", label: "To-Let", icon: Building2, note: "Share a room or property" },
];

export function CreatePostDialog({ open, onOpenChange }) {
  const [step, setStep] = useState(1);
  const [type, setType] = useState("lost");
  const [preview, setPreview] = useState();
  const inputRef = useRef(null);
  const finish = () => { setStep(1); setPreview(undefined); onOpenChange(false); };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <div className="mb-2 flex items-center justify-between pr-8 text-xs font-semibold text-muted-foreground"><span>CREATE A POST</span><span>Step {step} of 3</span></div>
          <div className="mb-4 grid grid-cols-3 gap-2">{[1,2,3].map((item) => <div key={item} className={cn("h-1.5 rounded-full", item <= step ? "bg-primary" : "bg-muted")} />)}</div>
          <DialogTitle className="font-display text-2xl">{step === 1 ? "What would you like to post?" : step === 2 ? "Add the details" : "Ready to share"}</DialogTitle>
          <DialogDescription>{step === 1 ? "Choose where your post belongs." : step === 2 ? "Give students the useful details." : "Review your category and publish to Campus Crate."}</DialogDescription>
        </DialogHeader>
        {step === 1 && <div className="grid gap-3 sm:grid-cols-3">{options.map((option) => <button key={option.id} type="button" onClick={() => setType(option.id)} className={cn("rounded-xl border p-4 text-left transition", type === option.id ? "border-primary bg-primary-soft ring-2 ring-primary/15" : "border-border bg-card hover:bg-accent")}><option.icon className="mb-5 size-6 text-primary" /><strong className="block text-sm">{option.label}</strong><span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{option.note}</span></button>)}</div>}
        {step === 2 && <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2"><Label htmlFor="title">Title</Label><Input id="title" className="mt-2" placeholder={type === "lost" ? "e.g. Lost black earbuds" : type === "market" ? "e.g. Scientific calculator" : "e.g. Furnished room near campus"} /></div>
          <div><Label htmlFor="amount">{type === "housing" ? "Monthly rent" : type === "market" ? "Price" : "Location"}</Label><Input id="amount" className="mt-2" placeholder={type === "lost" ? "Where was it lost or found?" : "৳ 0"} /></div>
          <div><Label htmlFor="category">{type === "market" ? "Condition" : type === "housing" ? "Accommodation type" : "Item category"}</Label><select id="category" className="mt-2 h-9 w-full rounded-md border border-input bg-background px-3 text-sm"><option>Select an option</option><option>Like new</option><option>Used</option></select></div>
          <div className="sm:col-span-2"><Label htmlFor="description">Description</Label><Textarea id="description" className="mt-2 min-h-24" placeholder="Add helpful details for other students…" /></div>
          <div className="sm:col-span-2"><Label>Photos</Label><input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(event) => { const file = event.target.files?.[0]; if (file) setPreview(URL.createObjectURL(file)); }} />
            <button type="button" onClick={() => inputRef.current?.click()} className="mt-2 flex h-36 w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-primary/35 bg-primary-soft text-center text-sm text-muted-foreground">
              {preview ? <img src={preview} alt="Upload preview" className="h-full w-full object-cover" /> : <><ImagePlus className="mb-2 size-7 text-primary" /><strong className="text-foreground">Drop photos here or browse</strong><span className="mt-1 text-xs">PNG or JPG, up to 10 MB</span></>}
            </button>
          </div>
        </div>}
        {step === 3 && <div className="rounded-xl border border-success/25 bg-success-soft p-8 text-center"><span className="mx-auto flex size-12 items-center justify-center rounded-full bg-success text-success-foreground"><Check /></span><h3 className="mt-4 font-display text-xl font-semibold">Your post looks good</h3><p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">It will appear in {options.find((o) => o.id === type)?.label} and the latest campus highlights.</p></div>}
        <div className="mt-2 flex justify-between border-t border-border pt-4"><Button variant="ghost" onClick={() => step === 1 ? onOpenChange(false) : setStep(step - 1)}>{step === 1 ? <X /> : <ChevronLeft />}{step === 1 ? "Cancel" : "Back"}</Button><Button onClick={() => step === 3 ? finish() : setStep(step + 1)}>{step === 3 ? "Publish post" : "Continue"}{step < 3 && <ChevronRight />}</Button></div>
      </DialogContent>
    </Dialog>
  );
}
