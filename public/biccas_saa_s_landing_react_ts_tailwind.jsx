// Biccas SaaS Landing Page — React + TypeScript + Tailwind CSS
// Drop this into a file like: src/pages/BiccasLanding.tsx (or App.tsx) and ensure Tailwind is set up.
// Minimal dependencies: just React and Tailwind. No external UI kit required.

import { useState } from "react";
import { ArrowRight, Check, Menu, X } from "lucide-react";

// Small helper components -----------------------------------------------------

type NavLink = { label: string; href: string };

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "About Us", href: "#about" },
];

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Logo() {
  return (
    <div className="flex items-center gap-2 font-semibold text-emerald-600">
      <span className="inline-block h-6 w-6 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30" />
      <span className="text-xl">Biccas</span>
    </div>
  );
}

function PrimaryButton({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500/60 bg-emerald-500 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-full px-5 py-3 text-sm font-semibold transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 text-emerald-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function RatingStars() {
  return (
    <div className="flex items-center gap-1 text-yellow-500" aria-label="4.8 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`h-4 w-4 ${i === 4 ? 'opacity-40' : ''}`} fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-xs font-medium text-slate-600">4.8 / 5 rating</span>
    </div>
  );
}

function BrandStrip() {
  const brands = ["Unsplash", "Notion", "Intercom", "descript", "grammarly"];
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-slate-500">
      {brands.map((b) => (
        <span key={b} className="text-sm font-semibold tracking-wide opacity-80">
          {b}
        </span>
      ))}
    </div>
  );
}

function FeatureCard({ title, text, icon }: { title: string; text: string; icon: React.ReactNode }) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slate-700">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
        <Check className="h-3.5 w-3.5 text-emerald-600" />
      </span>
      <span>{children}</span>
    </li>
  );
}

function PricingCard({
  name,
  price,
  period = "/mo",
  features,
  highlight = false,
}: {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl border p-6 sm:p-8 ${
        highlight
          ? "border-emerald-200 bg-white shadow-xl shadow-emerald-100/40"
          : "border-slate-200 bg-white/80 shadow-sm"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 right-6 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">Popular</span>
      )}
      <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      <div className="mt-4 flex items-end gap-1">
        <span className="text-4xl font-bold text-slate-900">{price}</span>
        <span className="pb-1 text-slate-500">{period}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <CheckItem key={f}>{f}</CheckItem>
        ))}
      </ul>
      <PrimaryButton className={`mt-8 ${highlight ? "" : "bg-slate-900 hover:shadow"}`}>Get Started</PrimaryButton>
    </div>
  );
}

// Main Page -------------------------------------------------------------------

export default function BiccasLanding() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-emerald-50/60 via-white to-white text-slate-900" id="home">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <Container className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-slate-600 hover:text-slate-900">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <GhostButton>Login</GhostButton>
            <PrimaryButton>Sign Up</PrimaryButton>
          </div>
          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden">
            <Container className="pb-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow">
                <nav className="grid gap-3">
                  {navLinks.map((l) => (
                    <a key={l.label} href={l.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                      {l.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <GhostButton className="w-full">Login</GhostButton>
                  <PrimaryButton className="w-full">Sign Up</PrimaryButton>
                </div>
              </div>
            </Container>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-10 sm:pt-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              We’re here to
              <br />
              <span className="text-slate-900">Increase your</span>
              <br />
              <span className="underline decoration-emerald-300 decoration-8 underline-offset-8">Productivity</span>
            </h1>
            <p className="mt-5 max-w-xl text-slate-600">
              Let’s make your work more organized and easy using the Taskio Dashboard with the latest features in managing daily work.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <PrimaryButton>
                Try free trial
                <ArrowRight className="ml-2 inline h-4 w-4" />
              </PrimaryButton>
              <GhostButton>View Demo</GhostButton>
            </div>
            <div className="mt-8"><RatingStars /></div>
            <div className="mt-10">
              <BrandStrip />
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg rounded-3xl bg-gradient-to-br from-emerald-100 via-teal-50 to-white p-4 shadow-xl ring-1 ring-emerald-200/50">
              <div className="grid h-full place-items-center rounded-2xl bg-white/70 ring-1 ring-white/60">
                {/* Placeholder avatar / card cluster to mimic design */}
                <div className="relative isolate">
                  <div className="mx-auto h-40 w-40 rounded-2xl bg-slate-200" />
                  <div className="absolute -right-8 -top-3 rounded-xl bg-white p-3 shadow ring-1 ring-slate-200">
                    <p className="text-xs font-semibold text-slate-700">$450.00</p>
                  </div>
                  <div className="absolute -bottom-6 -left-8 rounded-xl bg-white p-3 shadow ring-1 ring-slate-200">
                    <p className="text-xs font-semibold text-slate-700">Total income</p>
                    <p className="text-xs text-emerald-600">$245.00</p>
                  </div>
                  <div className="absolute right-10 top-16 rounded-xl bg-slate-900 p-3 text-white shadow">
                    <p className="text-xs">Credit Card</p>
                    <p className="mt-1 text-sm font-semibold">$724</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* soft gradients */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-40 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" />
      </section>

      {/* FEATURES */}
      <section id="product" className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Collaboration Teams"
              text="Keep your teams aligned in real-time with shared boards, comments, and mentions."
              icon={<div className="h-5 w-5 rounded bg-emerald-500" />}
            />
            <FeatureCard
              title="Cloud Storage"
              text="Securely store and access your files anywhere with automatic versioning."
              icon={<div className="h-5 w-5 rounded-full bg-emerald-500" />}
            />
            <FeatureCard
              title="Analytics"
              text="Analyze performance with clean charts and actionable insights."
              icon={<div className="h-5 w-5 rotate-45 rounded-sm bg-emerald-500" />}
            />
          </div>
        </Container>
      </section>

      {/* BENEFITS */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">What Benefit Will You Get</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Free consulting with expert saving money",
                "Online Banking",
                "Investment report every month",
                "Saving money for the future",
                "Online transaction",
              ].map((b) => (
                <CheckItem key={b}>{b}</CheckItem>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-emerald-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold">How we support our partner all over the world</h3>
            <p className="mt-3 text-slate-600">
              SaaS becomes a common delivery model for many business applications including office software, messaging, payroll processing, and DBMS software.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { title: "Publishing", text: "Plan, collaborate, and publish content that drives engagement and growth." },
                { title: "Analytics", text: "Analyze your performance and create gorgeous reports." },
                { title: "Engagement", text: "Quickly navigate and engage with your audience." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Choose Plans That’s Right For You</h2>
            <p className="mt-3 text-slate-600">Simple pricing, no hidden fees. Billed monthly or annually.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <PricingCard
              name="Free"
              price="$0"
              features={["1 user", "2 projects", "Email support", "Community access"]}
            />
            <PricingCard
              name="Pro"
              price="$12"
              highlight
              features={["5 users", "Unlimited projects", "Priority support", "Advanced analytics"]}
            />
            <PricingCard
              name="Business"
              price="$29"
              features={["Unlimited users", "SSO & Roles", "Audit logs", "Dedicated success"]}
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 p-10 text-white shadow-lg">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold">Ready to increase your productivity?</h3>
              <p className="mt-2 opacity-90">Start your free trial today. No credit card required.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:shadow">
                  Get Started
                </button>
                <button className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10">
                  Talk to Sales
                </button>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/20 blur-2xl" />
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-12" id="about">
        <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-slate-600">Biccas helps more than 25,000 teams collaborate and get more done.</p>
          </div>
          {[
            { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog"] },
            { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
            { title: "Resources", links: ["Blog", "Help Center", "Status", "Privacy"] },
          ].map((col) => (
            <div key={col.title}>
              <h5 className="text-sm font-semibold uppercase tracking-wide text-slate-900">{col.title}</h5>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-slate-600 hover:text-slate-900">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
        <Container className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Biccas. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Cookies</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
