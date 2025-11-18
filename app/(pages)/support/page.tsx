import Image from "next/image";
import Link from "next/link";
import { Home, ChevronDown, House, MailSearch } from "lucide-react";
import { Card } from "@/components/ui/card";
import Foundation from "@/app/_components/foundation";
import SurvivorCard from "@/app/_components/survivor-card";
import { Button } from "@/components/ui/button";
import Reach from "@/app/_components/Reach";
import SiteFooter from "@/app/_components/Footer";
import SiteHeader from "@/components/site-header";

export default function SupportPage() {
  return (
    <div className="mx-2 sm:mx-4 overflow-x-hidden">
      <div className="h-7 rounded-t-full bg-emerald-600" />

      {/* Header */}
      <div className="background-primary">
      <SiteHeader />
      </div>

      {/* Hero Section */}
      <main className="relative max-h-[550px] background-primary">
        {/* Decorative dots - hide on small screens */}
        <div className="hidden md:block absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="hidden md:block absolute top-40 left-32 w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="hidden md:block absolute top-60 left-20 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="hidden md:block absolute top-32 right-40 w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="hidden md:block absolute top-52 right-60 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="hidden md:block absolute top-80 left-60 w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="hidden md:block absolute top-96 right-20 w-2 h-2 bg-green-400 rounded-full"></div>

        <div className="container mx-auto px-4 sm:px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Text content */}
            <div className="mb-50 ml-30">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-widest text-white">
                Support <br /> Resources
              </h1>
              <p className="text-base sm:text-lg text-white/90 max-w-lg leading-relaxed tracking-widest font-medium">
                Access professional counselling, legal aid, support groups, and community resources. You
                don&apos;t have to go through this journey alone.
              </p>
            </div>

            {/* Hero image */}
            <div className="relative bottom-23 ml-20">
              <Image
                src="/child.png"
                alt="Children"
                width={400}
                height={400}
                className="object-contain max-h-[600px] lg:block hidden "
              />
              {/* Decorative shapes - hide on small screens */}
              <div className="hidden md:block absolute top-10 left-10 w-32 h-32 bg-green-400/40 rounded-full blur-2xl"></div>
              <div className="hidden md:block absolute top-32 right-10 w-40 h-40 bg-yellow-400/40 rounded-full blur-2xl"></div>
              <div className="hidden md:block absolute bottom-20 left-20 w-36 h-36 bg-orange-400/40 rounded-full blur-2xl"></div>
              <div className="hidden md:block absolute top-20 right-32 w-28 h-28 bg-green-400/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Available Resources Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex gap-4 overflow-x-auto pb-4 mb-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="shrink-0 bg-white border-l-4 border-green-500 p-6 rounded shadow-sm min-w-[240px] sm:min-w-[280px]"
              >
                <div className="flex items-center gap-3">
                  <House className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Legal Aid Center</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-4 sm:gap-7 justify-center">
            {[
              "All resources",
              "Counselling",
              "Organisations",
              "Legal aid",
              "Support groups",
              "Crisis support & help",
            ].map((label, i) => (
              <button
                key={i}
                className="px-4 py-2 sm:px-6 sm:py-4 bg-white border border-white rounded text-gray-900 flex items-center gap-2 hover:bg-gray-50 min-w-[140px] sm:min-w-[155px] transition-colors"
              >
                <span className="font-normal text-black tracking-wide text-[15px]">{label}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resource cards section */}
      <main className="bg-white text-black mt-20">
        <div className="text-center mb-10">
          <h1 className="font-semibold text-2xl sm:text-[25px]">Available Resources</h1>
          <p className="font-medium text-[#000000CC]">6 resources found</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 flex-wrap">
          <Foundation />
          <Foundation />
          <Foundation />
        </div>
      </main>

      {/* Emergency Support */}
      <section className="mt-20 bg-[#E4F3EF4D] py-10">
        <div className="text-center">
          <h1 className="font-semibold text-2xl sm:text-[25px]">Emergency support</h1>
          <p className="text-[#000000CC] mt-2">
            If you&apos;re in crisis or need immediate support, these resources are available 24/7
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
          <SurvivorCard />
          <SurvivorCard />
          <SurvivorCard />
        </div>
      </section>

      {/* Self-care resources */}
      <main className="bg-[#F9FAFB] flex flex-col items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-semibold text-2xl sm:text-[25px]">Self-Care Resources</h1>
          <p className="text-[#000000CC] mt-2">
            If you&apos;re in crisis or need immediate support, these resources are available 24/7
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
          <SurvivorCard />
          <SurvivorCard />
          <SurvivorCard />
        </div>

        {/* How to get help */}
        <div className="text-center mt-10">
          <h1 className="font-semibold text-[25px]">How to get help</h1>
          <p className="font-medium mt-2">Taking the first step to get support can be difficult. Here’s how we can help.</p>
          <div className="flex flex-col sm:flex-row gap-6 mt-6 items-center justify-center">
            <Reach />
            <Reach />
            <Reach />
          </div>
        </div>
      </main>

      {/* Call to action */}
      <section className="mt-20 bg-[#009367] flex flex-col items-center justify-center text-white py-16 px-4 text-center">
        <h1 className="font-semibold text-2xl sm:text-4xl">
          <i>You are not alone anymore</i>
        </h1>
        <span className="text-[#FFFFFFCC] mt-4 block">
          Whether you need immediate support or ongoing care, we’re here to help you through this journey.
        </span>
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <Button className="border-white/90 text-[#009367] bg-white hover:text-white hover:bg-black rounded px-4 py-5">
            <Link href={"/"}>Call crisis line</Link>
          </Button>
          <Button className="border-white/90 text-[#009367] rounded px-4 py-5 bg-white hover:text-white hover:bg-black cursor-pointer">
            <Link href={"/"}>
              <MailSearch /> 
            </Link>
            Email Support
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
