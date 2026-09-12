import { Hero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { OneWalletGrid } from "@/components/home/OneWalletGrid";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { AppPreview } from "@/components/home/AppPreview";
import { FeatureGrid12 } from "@/components/home/FeatureGrid12";
import { Rating } from "@/components/home/Rating";
import { Security } from "@/components/home/Security";
import { Faq } from "@/components/home/Faq";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <OneWalletGrid />
      {/* <FeatureShowcase /> */}
      <AppPreview />
      {/* <FeatureGrid12 /> */}
      {/* <Rating /> */}
      {/* <Security /> */}
      <Faq />
      <CtaBanner />
    </>
  );
}
