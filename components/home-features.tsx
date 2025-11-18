import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomeFeatures() {
  return (
    <section id="learn" className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-emerald-800">Three Intertwined Missions</h2>
        <p className="mt-2 text-zinc-600">
          Our platform serves family-based adoption, genocide survivor reconnections, and general missing relatives search, creating a comprehensive support system for healing and restoration.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
        {cards.map((c) => (
          <Card key={c.title} className="shadow-xl h-full">
            <CardContent className="p-5 flex flex-col h-full justify-between">
              <div>
                <div className="mb-3 flex items-center gap-4">
                  <div className="h-11 w-9 rounded-sm bg-emerald-50" />
                  <h3 className="text-2xl font-extrabold leading-tight text-zinc-900 sm:text-xl">{c.title}</h3>
                </div>
                <p className="mt-3 ml-4 text-base leading-7 text-zinc-700">{c.desc}</p>

                <ul className="mt-4 space-y-3 text-base text-zinc-800">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-[2px] text-emerald-100">☆</span>
                      <span className="leading-6">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="mt-6 inline-flex rounded-sm bg-emerald-600 px-6 py-3 text-sm font-light text-white shadow-sm hover:bg-emerald-600/90 w-full lg:w-auto">
                {c.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

const cards = [
  {
    title: "Family-Based Adoption",
    desc: "A safe space for genocide survivors to post memories, names, photos, or fragments of identity. AI-assisted matching helps identify potential family links. Families can apply for adoption, receive guidance, and connect with organizations .",
    cta: "Start the adoption",
    points: [
      "Child profiles with privacy-respecting details",
      "Application forms for families",
      "Legal guidance and emotional support",
      
    ],
  },
  {
    title: "Genocide Survivor Reconnection",
    desc: "Helping survivors reconnect with lost family members through a secure and sensitive process. Our platform offers AI-assisted matching, counseling support, and verification to ensure safe and meaningful reconnections.",
    cta: "Reconnect now",
    points: [
      "Secure AI-assisted matching",
      "Privacy-respecting profiles",
      "Guidance from trained counselors",
      "Verified organizations support",
    ],
  },
  {
    title: "General Missing Relatives",
    desc: "Search for missing relatives and create a bridge of hope for families separated by conflict or migration. Our platform provides verified reports, privacy controls, and a network to facilitate safe connections and restore identities.",
    cta: "Start Searching",
    points: [
      "Centralized search platform",
      "Verified reports and updates",
      "Privacy and security guaranteed",
      "Community support network",
    ],
  },
];
