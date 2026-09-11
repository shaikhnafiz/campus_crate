import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Camera, Loader2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/edit-profile")({
  head: () => ({
    meta: [
      { title: "Edit Profile — Campus Crate" },
      { name: "description", content: "Update your Campus Crate student profile, contact details, and campus address." },
      { property: "og:title", content: "Edit Profile — Campus Crate" },
      { property: "og:description", content: "Update your Campus Crate student profile, contact details, and campus address." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EditProfilePage,
});

function EditProfilePage() {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);
  const [values, setValues] = useState({ name: "Nafiz Barakah", email: "nafiz@university.edu", phone: "+880 1712 345678", department: "Computer Science & Engineering", address: "Dhanmondi, Dhaka", bio: "Third-year CSE student. Usually around the Central Library." });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

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

  return (
    <main className="container-shell max-w-3xl py-10">
      <Link to="/my-listings" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" />Back to my listings</Link>
      <h1 className="mt-4 font-display text-3xl font-bold">Edit profile</h1>
      <p className="mt-1.5 text-muted-foreground">Keep your contact details current so students can reach you.</p>

      <form className="mt-8 space-y-8" onSubmit={save} noValidate>
        <div className="flex flex-wrap items-center gap-5 rounded-xl border border-border bg-card p-5">
          <div className="relative">
            <div className="flex size-20 items-center justify-center overflow-hidden rounded-full bg-primary text-xl font-bold text-primary-foreground">
              {avatar ? <img src={avatar} alt="Profile preview" className="size-full object-cover" /> : "NB"}
            </div>
            <label className="absolute -bottom-1 -right-1 flex size-8 cursor-pointer items-center justify-center rounded-full border border-border bg-background shadow-soft">
              <Camera className="size-4" />
              <span className="sr-only">Upload profile photo</span>
              <input type="file" accept="image/*" className="hidden" onChange={pickAvatar} />
            </label>
          </div>
          <div>
            <p className="flex items-center gap-1.5 text-sm font-semibold"><ShieldCheck className="size-4 text-success" />Verified Student</p>
            <p className="mt-1 text-sm text-muted-foreground">JPG or PNG, square images look best.</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} aria-invalid={!!errors["name"]} />
            {errors["name"] && <p className="text-xs font-medium text-danger">{errors["name"]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} aria-invalid={!!errors["email"]} />
            {errors["email"] && <p className="text-xs font-medium text-danger">{errors["email"]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" value={values.phone} onChange={(e) => setValues({ ...values, phone: e.target.value })} aria-invalid={!!errors["phone"]} />
            {errors["phone"] && <p className="text-xs font-medium text-danger">{errors["phone"]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Input id="department" value={values.department} onChange={(e) => setValues({ ...values, department: e.target.value })} />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" value={values.address} onChange={(e) => setValues({ ...values, address: e.target.value })} />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="bio">About you</Label>
            <Textarea id="bio" rows={4} value={values.bio} onChange={(e) => setValues({ ...values, bio: e.target.value })} aria-invalid={!!errors["bio"]} />
            <p className="text-xs text-muted-foreground">{values.bio.length}/200</p>
            {errors["bio"] && <p className="text-xs font-medium text-danger">{errors["bio"]}</p>}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button type="submit" disabled={saving}>{saving && <Loader2 className="animate-spin" />}Save changes</Button>
          <Button type="button" variant="outline" onClick={() => navigate({ to: "/my-listings" })}>Cancel</Button>
        </div>
      </form>
    </main>
  );
}
