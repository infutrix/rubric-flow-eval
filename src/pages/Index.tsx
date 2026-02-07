import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ExistingSolutionsSection from "@/components/sections/ExistingSolutionsSection";
import DefinitionSection from "@/components/sections/DefinitionSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import OspreySection from "@/components/sections/OspreySection";
import SemanticRubricSection from "@/components/sections/SemanticRubricSection";
import HumanLoopSection from "@/components/sections/HumanLoopSection";
import OutputsSection from "@/components/sections/OutputsSection";
import ProofSection from "@/components/sections/ProofSection";
import MentorSection from "@/components/sections/MentorSection";
import MarketSection from "@/components/sections/MarketSection";
import EngagementSection from "@/components/sections/EngagementSection";
import ClosingSection from "@/components/sections/ClosingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* 1. Opening - From Pen to Grade */}
      <HeroSection />
      
      {/* 2. The Problem */}
      <ProblemSection />
      
      {/* 3. Why Existing Solutions Fail */}
      <ExistingSolutionsSection />
      
      {/* 4. What Gradesmith Is */}
      <DefinitionSection />
      
      {/* 5. System Architecture */}
      <section id="architecture">
        <ArchitectureSection />
      </section>
      
      {/* 6. Osprey OCR Deep Dive */}
      <OspreySection />
      
      {/* 7. Semantic Understanding & Rubric Intelligence */}
      <SemanticRubricSection />
      
      {/* 8. Human-in-the-Loop */}
      <HumanLoopSection />
      
      {/* 9. Outputs That Matter */}
      <OutputsSection />
      
      {/* 10. Real-world Proof */}
      <section id="proof">
        <ProofSection />
      </section>
      
      {/* 11. Personal AI Mentor (Future) */}
      <MentorSection />
      
      {/* 12. Where We Deploy */}
      <MarketSection />
      
      {/* 13. Engagement Model */}
      <EngagementSection />
      
      {/* 14. Closing */}
      <ClosingSection />
      
      <Footer />
    </main>
  );
};

export default Index;
