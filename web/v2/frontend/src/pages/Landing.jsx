import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Landing() {
    return (
        <main
            data-testid="landing-page"
            className="bg-white text-slate-800 min-h-screen overflow-hidden"
        >
            <Navbar />
            <Hero />
            <Services />
            <TechStack />
            <Projects />
            <Process />
            <Testimonials />
            <Team />
            <Pricing />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    );
}
