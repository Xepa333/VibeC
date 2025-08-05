import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import { WhatIsInside, Context, Platforms, IntegrationStrategy, KpisAndMeasurement, BestPractices, ExternalBestPractices } from './components/ContentSections.jsx';
import { StrategicUseCases, PreLaunch, Launch, MatureBrands } from './components/LifecycleSections.jsx';
import Footer from './components/Footer.jsx';
import ScrollHint from './components/ui/ScrollHint.jsx';
import BackgroundAnimation from './components/BackgroundAnimation.jsx';

function App() {
  return (
    <div className="text-gray-200">
      <BackgroundAnimation />
      
      <div className="relative z-10 isolate">
        <Header />
        <main>
          <Hero />
          {/* This container allows content sections to scroll over the animated background */}
          <div>
            <WhatIsInside />
            <Context />
            <Platforms />
            <StrategicUseCases />
            <PreLaunch />
            <Launch />
            <MatureBrands />
            <IntegrationStrategy />
            <KpisAndMeasurement />
            <BestPractices />
            <ExternalBestPractices />
          </div>
        </main>
        <Footer />
        <ScrollHint />
      </div>
    </div>
  );
}

export default App;