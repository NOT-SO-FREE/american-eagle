import AnimatedBackground from '@/components/sections/animated-background';
import CountdownBanner from '@/components/sections/countdown-banner';
import HeroSection from '@/components/sections/hero-section';
import StepsCard from '@/components/sections/steps-card';
import CtaButton from '@/components/sections/cta-button';
import SocialFooter from '@/components/sections/social-footer';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(circle_at_top,#ffffff_0%,#f7f9fc_50%,#edf2f8_100%)] text-primary">
      <AnimatedBackground />

      <CountdownBanner />

      <main className="relative z-10 max-w-lg mx-auto px-3 py-1.5 md:py-2">
        <HeroSection />

        <StepsCard />

        <div className="text-center !block !px-[90px] !py-0 !block !p-0 !w-full !h-[63px]">
          <CtaButton />
        </div>

        <SocialFooter />
      </main>
    </div>
  );
}
