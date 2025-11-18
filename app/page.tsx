import HomeHero from "@/components/homeHero";
import HomeFeatures from "@/components/home-features";
import HomeCta from "@/components/homeafooter";
import SiteFooter from "@/components/footer";
import SiteHeader from "@/components/site-header";
import HomeDesigned from "@/components/home-designed";

export default function Home() {
  return (
    <div className="space-y-0">
      <main className="space-y-14">
        
        
        <HomeHero />
        <HomeFeatures />
        <HomeDesigned /> 

        <HomeCta />
      </main>

      <SiteFooter />
    </div>
  );
}
