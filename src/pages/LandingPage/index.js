import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
import InfoSection from "../../components/LandingPage/InfoSection";
import Collaboration from "../../components/LandingPage/Collaboration";
import Feature from "../../components/LandingPage/Feature";
import Hero from "../../components/LandingPage/HeroSection";
import Sponsor from "../../components/LandingPage/Sponsor";
import GetStarted from "../../components/LandingPage/GetStarted";
import LandingNav from "../../components/LandingPage/LandingNav";
import Footer from "../../components/LandingPage/Footer";

function LandingPage() {
  return (
    <>
      <LandingNav />
      <Hero />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Feature />
      <Collaboration />
      <Sponsor />
      <GetStarted />
      <Footer />
    </>
  );
}

export default LandingPage;
