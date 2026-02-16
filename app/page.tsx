import { HeroSection } from "@/components/home/HeroSection";
import { CompanyProfile } from "@/components/home/CompanyProfile";
import { StatsSection } from "@/components/home/StatsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <StatsSection />
      <CompanyProfile />
    </div>
  );
}
