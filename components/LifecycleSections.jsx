import React from 'react';
import { AnimatedSection } from './ui/AnimatedSection.jsx';
import { TargetIcon, RocketIcon, CaseIcon, ChartIcon, CheckIcon, LightbulbIcon } from './ui/Icons.jsx';

const PhaseCard = ({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) => (
    <div className="flex items-start space-x-4">
        {icon}
        <div>
            <h4 className="text-lg font-semibold text-indigo-300 mb-2">{title}</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
                {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
    </div>
);

const CaseStudy = ({ title, results, source, icon }: { title: string, results: string[], source: string, icon: React.ReactNode }) => (
    <div className="bg-indigo-900/20 p-6 rounded-lg mt-6">
        <div className="flex items-start space-x-4">
            {icon}
            <div>
                 <h4 className="text-lg font-semibold text-indigo-300 mb-2">Case Example: {title}</h4>
                <div className="mt-2">
                    <p className="font-semibold text-gray-200">Results:</p>
                    <ul className="list-disc list-inside pl-4 text-gray-300">
                        {results.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                    <p className="text-sm text-gray-400 mt-2">({source})</p>
                </div>
            </div>
        </div>
    </div>
);

const BestPracticeTip = ({ tip }: { tip: string }) => (
    <div className="flex items-start space-x-4 mt-6 bg-yellow-400/10 p-4 rounded-lg">
        <LightbulbIcon />
        <div>
            <h4 className="text-lg font-semibold text-yellow-300">Best Practice Tip:</h4>
            <p className="text-yellow-200">{tip}</p>
        </div>
    </div>
);


export const StrategicUseCases = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <AnimatedSection id="lifecycle">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-16 text-center">Strategic Use Cases Across the Product Lifecycle</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
                <a href="#pre-launch" onClick={(e) => handleNavClick(e, '#pre-launch')} className="block p-6 bg-purple-600 text-white transition-transform duration-300 hover:scale-105 hover:z-10 [clip-path:polygon(0%_0%,calc(100%_-_1.5rem)_0,100%_50%,calc(100%_-_1.5rem)_100%,0%_100%)] cursor-pointer">
                    <h3 className="text-2xl font-bold mb-2">Pre-Launch</h3>
                    <p className="font-light mb-4">(Awareness & Positioning)</p>
                    <p>Goal: Educate early adopters, shape clinical dialogue.</p>
                </a>
                <a href="#launch" onClick={(e) => handleNavClick(e, '#launch')} className="block p-6 bg-indigo-700 text-white transition-transform duration-300 hover:scale-105 hover:z-10 [clip-path:polygon(0%_0%,calc(100%_-_1.5rem)_0,100%_50%,calc(100%_-_1.5rem)_100%,0%_100%)] cursor-pointer">
                     <h3 className="text-2xl font-bold mb-2">Launch</h3>
                    <p className="font-light mb-4">(Validation & Trial)</p>
                    <p>Goal: Drive scientific credibility, peer acceptance.</p>
                </a>
                <a href="#mature-brands" onClick={(e) => handleNavClick(e, '#mature-brands')} className="block p-6 bg-yellow-500 text-gray-900 transition-transform duration-300 hover:scale-105 hover:z-10 [clip-path:polygon(0%_0%,calc(100%_-_1.5rem)_0,100%_50%,calc(100%_-_1.5rem)_100%,0%_100%)] cursor-pointer">
                     <h3 className="text-2xl font-bold mb-2">Post-Launch</h3>
                    <p className="font-light mb-4">(Retention & Depth)</p>
                    <p>Goal: Sustain interest, reinforce outcomes, expand usage.</p>
                </a>
            </div>
            <div className="mt-12 max-w-2xl mx-auto text-center p-6 bg-gray-800/50 rounded-lg">
                 <h3 className="text-2xl font-bold text-indigo-300 mb-2">Success Factor:</h3>
                 <p className="text-xl text-gray-200">Match platform format to lifecycle goals (e.g., dialogue-heavy P2P early on, deep data via scientific platforms later).</p>
            </div>
        </AnimatedSection>
    );
};

export const PreLaunch = () => (
    <AnimatedSection id="pre-launch" className="bg-[#111827]/50 rounded-xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">Pre-Launch: Shaping Perception & Readiness</h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
                <PhaseCard icon={<TargetIcon />} title="Objectives" items={["Build early awareness of the disease state, MOA, and unmet need", "Start educational shaping without promotional messaging", "Identify and engage future brand advocates"]} />
                <PhaseCard icon={<RocketIcon />} title="Platform Tactics" items={["Unbranded scientific content on Medscape or Univadis", "Virtual roundtables or P2P discussions on future treatments", "KOL-authored thought leadership: papers, CME, interviews"]} />
                <PhaseCard icon={<CheckIcon />} title="KPIs" items={["Content views & completions", "Poll results on awareness/confidence", "Early opt-ins or platform engagement rates"]} />
            </div>
            <div>
                 <CaseStudy icon={<CaseIcon />} title="Takeda - Rare Disease Education Campaign (2021, EU)" results={["42,000 HCP views in 5 countries", "Increased early interest in pipeline therapy before brand name launched"]} source="Medscape Case Studies EU, 2022" />
                 <BestPracticeTip tip="Pair Medical Affairs-led education with digital retargeting to nurture HCPs who consume early content." />
            </div>
        </div>
    </AnimatedSection>
);

export const Launch = () => (
    <AnimatedSection id="launch">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">Launch Phase: Driving Peer Validation & Scientific Authority</h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
                <PhaseCard icon={<TargetIcon />} title="Objectives" items={["Establish scientific credibility through expert voices", "Encourage clinical trial review, MOA adoption, and early trial"]} />
                <PhaseCard icon={<RocketIcon />} title="Platform Tactics" items={["KOL-led launch webinars, symposia recaps", "Peer testimonials or panel discussion recordings", "Interactive modules on MOA, trial data interpretation, or treatment algorithms"]} />
                <PhaseCard icon={<CheckIcon />} title="KPIs" items={["Poll participation and sentiment shift", "Average time spent on trial-data content", "Platform-triggered rep/MSL follow-up actions"]} />
            </div>
            <div>
                <CaseStudy icon={<CaseIcon />} title="Sanofi - Dupixent Launch on Sermo (2022, U.S.)" results={["2,000+ specialist engagements in 4 weeks", "50% said content improved confidence in prescribing"]} source="Sermo Launch Activation Report, 2022" />
                <BestPracticeTip tip="Align digital KOL content timing with congress peaks, rep launch kits, and email sequences for amplified effect." />
            </div>
        </div>
    </AnimatedSection>
);

export const MatureBrands = () => (
    <AnimatedSection id="mature-brands" className="bg-[#111827]/50 rounded-xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">Mature Brands: Sustaining Value with Real-World Evidence</h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
                <PhaseCard icon={<TargetIcon />} title="Objectives" items={["Re-engage HCPs by showcasing long-term effectiveness, real-world impact", "Retain prescribers and address barriers (e.g., safety, access)"]} />
                <PhaseCard icon={<RocketIcon />} title="Platform Tactics" items={["Publish RWE or post-marketing data on scientific platforms", "Host P2P case discussions around challenging patient profiles", "Sponsor disease management education (CME, podcasts, updates)"]} />
                <PhaseCard icon={<CheckIcon />} title="KPIs" items={["Repeat engagement by specialty", "RWE content dwell time and sharing", "Uptick in in-practice confidence or formulary support (survey-based)"]} />
            </div>
            <div>
                 <CaseStudy icon={<ChartIcon />} title="AbbVie - HUMIRA Long-Term RWE Visibility (2021-2023)" results={["+27% content engagement YoY", "Field team reported higher RWE awareness in follow-up visits"]} source="Across Health Navigator 365, 2023" />
                 <BestPracticeTip tip="Use RWE to close the gap between clinical trials and HCP day-to-day practice — especially for reticent adopters." />
            </div>
        </div>
    </AnimatedSection>
);