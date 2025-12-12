import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/ProjectDescription";
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


