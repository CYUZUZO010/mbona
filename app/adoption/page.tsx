"use client";

import AdoptionHero from "@/components/adoptionHero";
import SiteFooter from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AdoptionPage() {
  return (
    <div className="space-y-0">
      <main className="space-y-14">
        <AdoptionHero />

        {/* Search Section */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="grid gap-3 sm:grid-cols-[1fr_auto_auto]">
            {/* Search input */}
            <input
              placeholder="Search by name or short description"
              className="h-15 rounded border border-zinc-300 px-3 text-sm outline-none focus:border-emerald-600"
            />

            {/* AGE DROPDOWN */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-15 border-zinc-300 text-zinc-700 w-45"
                >
                  All ages
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-45">
                <DropdownMenuItem>0 – 2 years</DropdownMenuItem>
                <DropdownMenuItem>3 – 5 years</DropdownMenuItem>
                <DropdownMenuItem>6 – 10 years</DropdownMenuItem>
                <DropdownMenuItem>11 – 17 years</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-15 border-zinc-300 text-zinc-700 w-45"
                >
                  All genders
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-45">
                <DropdownMenuItem>Male</DropdownMenuItem>
                <DropdownMenuItem>Female</DropdownMenuItem>
                <DropdownMenuItem>Prefer not to say</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>

        {/* Cards */}
        <section className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-emerald-800">
              Children Waiting for Families
            </h2>
            <p className="mt-2 text-zinc-600">
              Meet children hoping to be matched with loving families
            </p>
          </div>

          <div className="mt-8 grid gap-7 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-200 bg-white p-4 shadow-xl h-130"
              >
                <div className="mb-4 h-40 w-full overflow-hidden rounded-lg bg-zinc-200 bg-[url('/adoptChildren.png')] bg-cover"></div>

                <div className="text-lg font-bold text-zinc-900 pb-4">
                  Mukiza
                </div>
                <div className="text-sm text-emerald-700 pb-4 ">
                  6 years • Kigali
                </div>

                <p className="mt-2 text-sm text-zinc-700">
                  A safe space for genocide survivors to post memories, names,
                  photos, or fragments of identity. AI-assisted matching helps
                  identify potential family links.
                </p>

                <hr className="border-t-2 border-zinc-400/10 mt-6" />

                <Button className="mt-8 w-70 bg-emerald-700 text-white hover:bg-emerald-800 rounded hover:cursor-pointer">
                  <span className="mr-20">Learn more and Apply</span>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Circles Section */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-2xl font-semibold text-zinc-900">
              How the Adoption Process Works
            </h2>
            <p className="mt-2 text-zinc-700">
              Simple, transparent, and trauma-informed steps
            </p>

            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-4">
              {processItems.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full border-2 border-zinc-400" />
                  <div className="text-base font-extrabold text-zinc-900">
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-700 max-w-[240px] mx-auto">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support cards */}
        <hr className="border-t-2 border-emerald-300" />

        <section className="mx-auto max-w-7xl px-6 pb-8 mb-10">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-emerald-800">
              Support for Adoptive Families
            </h2>
            <p className="mt-2 text-zinc-600">
              we provide ongoing support to help your family thrive for a better
              future
            </p>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-4">
            {supportCards.map((c, i) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-60px" });

              return (
                <motion.div
                  key={c.title}
                  ref={ref}
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="rounded-md bg-emerald-700 p-6 text-white shadow-md hover:cursor-pointer hover:shadow-xl"
                >
                  <div className="mb-2 text-lg font-semibold">{c.title}</div>
                  <p className="text-sm text-white/90">{c.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

const processItems = [
  {
    title: "Trauma-Informed Approach",
    desc: "Our programs prioritize safety and privacy to avoid re-triggering trauma.",
  },
  {
    title: "Family-Centered Support",
    desc: "We engage families in every step to ensure sustainable healing and reconnection.",
  },
  {
    title: "Child-Focused Services",
    desc: "Activities and interventions are tailored to meet the unique needs of each child.",
  },
  {
    title: "Community Integration",
    desc: "We collaborate with local communities to create supportive environments for growth.",
  },
];

const supportCards = [
  {
    title: "Counseling & Guidance",
    desc: "Caring, trauma-aware counseling and guidance throughout the journey",
  },
  {
    title: "Document Assistance",
    desc: "Step-by-step help to prepare, verify and submit required documents",
  },
  {
    title: "Community Support",
    desc: "Connect with mentors and families who have walked the path before",
  },
  {
    title: "Community Integration",
    desc: "Connect with mentors and families who have walked the path before",
  },
];
