import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "About Us", href: "#about" },
];

function Logo() {
  return (
    <div
      className='flex items-center gap-5 font-semibold w-[160px] h-[30px] text-[#54BD95]'
    >
      <span className='text-5xl'>Biccas</span>
    </div>
  )
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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((links) => (
            <a key={links.label} href={links.href} className="text-sm font-medium text-slate-600 hover:text-slate-900">
              {links.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <GhostButton>Login</GhostButton>
          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
        <button className="md:hidden" onClick={() => setOpen((toggle) => !toggle)} aria-label="Toggle Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow">
              <nav className="grid gap-3">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <GhostButton className="w-full">Login</GhostButton>
                <PrimaryButton className="w-full">Sign Up</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
