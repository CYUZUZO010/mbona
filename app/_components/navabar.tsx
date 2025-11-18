"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function SiteHeader({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const isOverlay = variant === "overlay";
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-auto max-w-6xl px-6 pt-4">
      <header
        className={`px-0 py-2 ${
          isOverlay ? "bg-transparent" : "rounded-xl border border-zinc-200 bg-white"
        }`}
      >
        <div className="flex items-center justify-between">
          <div
            className={`text-lg font-semibold ${
              isOverlay ? "text-white" : "text-emerald-800"
            }`}
          >
            Mbona
          </div>
          <nav
            className={`hidden items-center justify-center gap-8 text-sm sm:flex ${
              isOverlay ? "text-white/90" : "text-zinc-700"
            }`}
          >
            <Link href="/" className="hover:text-emerald-500">Home</Link>
            <Link href="/adoption" className="hover:text-emerald-500">Adoption</Link>
            <Link href="/family" className="hover:text-emerald-500">Find Family</Link>
            <Link href="/support" className="hover:text-emerald-500">Support</Link>
            <Link href="/about" className="hover:text-emerald-500">About</Link>
          </nav>
          <div className="hidden sm:flex justify-end">
            <Button
              asChild
              variant="outline"
              size="sm"
              className={`border-white/90 text-white bg-white/10 hover:bg-white/10 hover:text-white rounded px-4`}
            >
              <Link href="/find-family">
                Find lost family<span aria-hidden className="text-2xl">•</span>
              </Link>
            </Button>
          </div>
          <button
            className="sm:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {open && (
          <nav
            className={`sm:hidden mt-4 flex flex-col gap-4 p-4 rounded-xl ${
              isOverlay ? "bg-white/10 backdrop-blur text-white" : "bg-white text-zinc-700"
            }`}
          >
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/adoption" onClick={() => setOpen(false)}>Adoption</Link>
            <Link href="/find-family" onClick={() => setOpen(false)}>Find Family</Link>
            <Link href="/support" onClick={() => setOpen(false)}>Support</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full mt-2 bg-transparent hover:bg-white/10"
            >
              <Link href="/find-family">
                Find lost family
              </Link>
            </Button>
          </nav>
        )}
      </header>
    </div>
  );
}