"use client";
import { Shield, Heart, Clock, Globe} from "lucide-react";

export default function HomeDesigned() {
  return (
    <section className=" py-16 border-t-emerald-300 border-t">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Designed with care
          </h2>
          <p className="mt-2 text-zinc-700">
            Every feature is designed with trauma sensitivity, privacy and
            accessibility in mind.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <style>{`
              @keyframes pulse-scale {
              0%, 100% {transform: scale(1); }
              50% {transform: scale(1.05)}
              }
              .items-circle {
              animation: pulse-scale 2s ease-in-out infinite;
              }
              `}</style>
              <div className="items-circle mx-auto mb-4 h-24 w-24 rounded-full border-2 border-emerald-300 flex items-center justify-center ">
                <item.icon className="h-12 w-12 text-emerald-400" />
              </div>
              <div className="text-base font-semibold text-zinc-900">
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
  );
}

const items = [
  {
    title: "Trauma-informed",
    desc: "Everything is optional, private and designed to avoid re-triggering trauma",
    icon: Shield,
  },
  {
    title: "Offline Mode",
    desc: "Draft posts and view saved profiles even without internet connection.",
    icon: Globe,
  },
  {
    title: "Voice Notes",
    desc: "Record voice messages for those who prefer speaking over typing.",
    icon: Clock,
  },
  {
    title: "Community Support",
    desc: "Access to counseling, legal aid, and community stories of hope.",
    icon: Heart,
  },
];
