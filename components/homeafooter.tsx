import { Button } from "@/components/ui/button";

export default function HomeCta() {
  return (
    <section className="bg-emerald-700 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h3 className="text-2xl font-semibold italic sm:text-3xl">Ready to Begin Your Journey?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">Whether you are looking to adopt a child or reconnect with lost family, we are here to support you every step of the way.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-white text-emerald-700 hover:bg-white/90 rounded mr-6">
              <a href="#start">Start adoption process</a>
            </Button>
            <Button asChild variant="outline" className="border-white/70 text-white bg-white/10 rounded w-50">
              <a href="#guide">Find your lost family</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
