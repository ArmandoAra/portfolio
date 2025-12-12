import Hero from "./components/Hero";
import ProjectDescription from "./components/ProjectDescription";
import DevelopmentProcess from "./components/DevelopmentPhases";
import Footer from "./components/Footer";
import FeaturesShowcase from "./components/Features";




export default function MyTreeProject() {

    return (
        <>
            {/* Hero Section */}
            <Hero />

            {/* Project Description */}
            <ProjectDescription />

            {/* Development Process */}
            <DevelopmentProcess />

            {/* Features Showcase */}
            <FeaturesShowcase />

            {/* Footer */}
            <Footer />
        </>
    );
};


