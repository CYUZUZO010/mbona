import HomeHero from "@/components/homeHero";
import HomeFeatures from "@/components/home-features";
import HomeCta from "@/components/homeafooter";
import SiteFooter from "@/components/footer";
import HomeDesigned from "@/components/home-designed";

export default function HomePage() {
  return (
    <div className="space-y-0">
      <main className="space-y-14">
        <div className="mx-auto max-w-6xl px-6">
          <HomeHero />
        </div>

        <HomeFeatures />
        <HomeDesigned />
        <HomeCta />
      </main>

      <SiteFooter />
    </div>
  );
}
