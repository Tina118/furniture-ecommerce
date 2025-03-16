

import { Header, PageDescription } from "@/components";

import CEOIntroduction from "./CEOIntroduction";
import KayuuDetails from "./KayuuDetails";
import VisionGoalSection from "./VisionGoalSection";
import QualitySection from "./QualitySection";

const AboutUsPage = () => {
  return (
    <>
      <Header title="About Us - Online Furniture Store" />

      <div className="px-6 md:px-12 pb-16">
        <PageDescription
          pageName="About Us"
          pageDescription="Crafting comfort and elegance, we bring you thoughtfully designed
              furniture that blends style, quality, and functionality. From
              timeless classics to modern designs, we’re dedicated to
              transforming your spaces into stunning sanctuaries."
        />

        <CEOIntroduction />

        <KayuuDetails />

        <VisionGoalSection />

        <QualitySection />

        
      </div>
    </>
  );
};

export default AboutUsPage;
