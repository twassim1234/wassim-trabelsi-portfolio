import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { InternshipsSection } from "../components/InternshipsSection";
import { CertificationsSection } from "../components/Certifications";
import { OtherSection } from "../components/OtherSection";
import { Hobbies } from "../components/Hobbies";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <InternshipsSection />
        <OtherSection />
        <ProjectsSection />
        <CertificationsSection />
        <SkillsSection />
        <Hobbies />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
