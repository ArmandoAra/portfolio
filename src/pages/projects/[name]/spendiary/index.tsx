import DevelopmentProcess from "../components/DevelopmentPhases";
import FeaturesShowcase from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectDescription from "../components/ProjectDescription";





export default function SpendiaryProject() {

    return (
        <div className="flex flex-col w-[84vw] md:w-full bg-slate-950">
            {/* Hero Section */}
            <Hero project="spendiary" />

            {/* Project Description */}
            <ProjectDescription project="spendiary" />

            {/* Development Process */}
            <DevelopmentProcess project="spendiary" />

            {/* Features Showcase */}
            <FeaturesShowcase project="spendiary" />

            {/* Footer */}
            <Footer project="spendiary"/>
        </div>
    );
};


