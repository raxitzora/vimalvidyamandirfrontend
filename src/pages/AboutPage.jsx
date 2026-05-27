import Navbar from "../components/common/Navbar";

import AboutHero from "../components/about/AboutHero";
import Philosophy from "../components/about/Philosophy";
import JourneyTimeline from "../components/about/JourneyTimeline";
import TrusteeMessage from "../components/about/TrusteeMessage";
import Footer from "../components/common/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <AboutHero />
      <Philosophy />
      <JourneyTimeline />
      <TrusteeMessage />
      <Footer />
    </>
  );
}