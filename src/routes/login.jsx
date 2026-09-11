import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Box, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In — Campus Crate" },
      { name: "description", content: "Sign in to your Campus Crate student account to post and manage listings." },
      { property: "og:title", content: "Sign In — Campus Crate" },
      { property: "og:description", content: "Sign in to your Campus Crate student account to post and manage listings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    const next = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next["email"] = "Enter a valid university email address.";
    if (values.password.length < 8) next["password"] = "Password must be at least 8 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Welcome back to Campus Crate");
      navigate({ to: "/my-listings" });
    }, 600);
  };

  return (
    <main className="container-shell flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-7 shadow-soft">
        <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-brand"><Box className="size-5" /></span>
        <h1 className="mt-5 font-display text-2xl font-bold">Welcome back</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">Sign in to manage your campus listings.</p>
        <form className="mt-6 space-y-4" onSubmit={submit} noValidate>
          <div className="space-y-2">
            <Label htmlFor="email">University email</Label>
            <Input id="email" type="email" autoComplete="email" placeholder="you@university.edu" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} aria-invalid={!!errors["email"]} />
            {errors["email"] && <p className="text-xs font-medium text-danger">{errors["email"]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" autoComplete="current-password" placeholder="••••••••" value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} aria-invalid={!!errors["password"]} />
            {errors["password"] && <p className="text-xs font-medium text-danger">{errors["password"]}</p>}
          </div>
          <Button type="submit" className="w-full" disabled={loading}>{loading && <Loader2 className="animate-spin" />}Sign in</Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          New to Campus Crate? <Link to="/signup" className="font-semibold text-primary hover:underline">Create an account</Link>
        </p>
      </div>
    </main>
  );
}
