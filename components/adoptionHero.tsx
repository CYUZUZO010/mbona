"use client";
import Image from "next/image";
import SiteHeader from "./site-header";
import { Button } from "@/components/ui/button";

export default function AdoptionHero() {
  return (
    < div className="mx-[16px]">
      <div className="h-7 rounded-t-full bg-emerald-600" />
    
      <section className="relative isolate  bg-black text-white w-full min-h-[420px] sm:min-h-[616px] overflow-hidden ">
        {/* Top green strip */}
       
        <div className="relative z-20">
          <SiteHeader variant="overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-12 sm:px-10 sm:pt-16 flex items-center justify-between">
          <div className="max-w-2xl mt-15">

            <h1 className="text-[34px] font-bold leading-tight sm:text-7xl sm:ml-5 lg:ml-20">
              ADOPT ME
            </h1>

            <p className="mt-4 max-w-xl text-white/90 lg:ml-35 sm:ml-0">
              <span className="ml-3">Every child deserves a loving family.</span><br />
              <span className="ml-6">Browse profiles of children waiting</span><br />
              <span className="ml-9">for their forever home, and begin</span><br />
              <span className="ml-23">your journey to becoming</span><br />
                  <span className="ml-55">a parent</span>
            </p>
            <div className="mt-6">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl h-7 ml-77 hover:cursor-pointer">
               Foster a child
              </Button>
            </div>
          </div>

          <div className="hidden lg:block absolute right-30 top-70 transform -translate-y-1/2 w-1/3">
            <Image
              src="/adoptme.png"
              alt="Children waiting for adoption"
              width={400}
              height={400}
              className="w-auto h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <div className="hidden lg:block absolute left-230 top-35 pl-30">
            <Image 
            src="/lines.png"
            alt=""
            width={400}
            height={400}
            className="w-auto h-auto object drop-shadow-2xl"
            priority

            />
          </div>
        </div>
      </section>
      </div>
    
  );
}
