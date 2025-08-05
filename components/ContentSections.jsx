
import React from 'react';
import { AnimatedSection } from './ui/AnimatedSection.jsx';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-12 text-center">
        {children}
    </h2>
);

const BulletList = ({ items }: { items: React.ReactNode[] }) => (
    <ul className="space-y-4">
        {items.map((item, index) => (
            <li key={index} className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-indigo-400 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-lg text-gray-300">{item}</span>
            </li>
        ))}
    </ul>
);

const contentLinks = [
    { text: "Context", href: "#context", subItems: ["Why P2P and scientific platforms matter in modern pharma marketing", "Role in omnichannel HCP engagement: evolution"] },
    { text: "Understanding the Platforms", href: "#platforms", subItems: ["Key platform types: P2P, Scientific", "Promotional vs. educational vs. scientific use cases"] },
    { text: "Strategic Use Cases", href: "#lifecycle", subItems: ["Pre-launch: building awareness through expert voices", "Launch: peer validation and scientific credibility", "Mature Brands: real-world evidence, retention, differentiation"] },
    { text: "Integration with Brand Strategy", href: "#strategy", subItems: ["Aligning with marketing and medical goals", "Coordinating across functions (marketing, medical, compliance)"] },
    { text: "KPIs & Measurement", href: "#kpis", subItems: ["HCP reach, engagement, content consumption", "Qualitative feedback, impact on perception or intent"] },
    { text: "Do's & Don'ts = Best Practices", href: "#dos-donts", subItems: ["Ensure content credibility & compliance", "Avoid overlap with field force messages", "Prioritize value for HCPs"] },
];

export const WhatIsInside = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <AnimatedSection id="what-is-inside">
            <SectionTitle>What's Inside:</SectionTitle>
            <div className="max-w-3xl mx-auto bg-gray-800/20 p-8 rounded-lg">
                <ol className="list-decimal list-inside space-y-6 text-lg text-gray-300">
                     {contentLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="font-semibold text-indigo-300 hover:text-indigo-200 transition-colors duration-200 cursor-pointer underline decoration-transparent hover:decoration-indigo-200 decoration-1 underline-offset-4">
                                {link.text}:
                            </a>
                            <ul className="list-disc list-inside pl-6 mt-2 space-y-2 text-base text-gray-400">
                                {link.subItems.map((item, subIndex) => <li key={subIndex}>{item}</li>)}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </AnimatedSection>
    );
};

export const Context = () => (
    <AnimatedSection id="context" className="bg-[#111827]/50 rounded-xl">
        <SectionTitle>Context: Why P2P and Scientific Platforms Matter</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">Why it matters:</h3>
                <BulletList items={[
                    "HCPs increasingly seek credible, peer-driven content due to rising information complexity and limited time for reps.",
                    <span><b>81% of physicians</b> report changing clinical decisions based on insights from peers or experts via digital platforms.</span>,
                    "Scientific platforms offer compliant environments for sharing evidence-based data, enhancing pharma's credibility."
                ]} />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">Digital shift in pharma HCP engagement:</h3>
                <BulletList items={[
                    "HCPs prefer self-directed learning and asynchronous peer discussions.",
                    "P2P platforms (e.g., Sermo, Doximity) enable real-time discussion, clinical polling, and expert Q&As.",
                    "Scientific portals (e.g., Medscape, Univadis) rank among top digital destinations for medical decision-making."
                ]} />
            </div>
        </div>
    </AnimatedSection>
);

export const Platforms = () => (
    <AnimatedSection id="platforms">
        <SectionTitle>Understanding the Platforms</SectionTitle>
        <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4">P2P Platforms</h3>
                     <BulletList items={["Focus on interactive engagement and real-world insights", "HCPs value input from peers as credible and relatable", "~67% of HCPs use these for treatment decisions"]} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">Scientific Platforms</h3>
                    <BulletList items={["Emphasize data accuracy and depth", "Ideal for amplifying trial results, real-world evidence, guidelines", "Used by >70% of HCPs for ongoing learning"]} />
                </div>
            </div>
            <div className="bg-indigo-900/30 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-indigo-300 mb-2">Tip for Marketers:</h3>
                <p className="text-xl text-gray-200">Use P2P for influence, scientific platforms for credibility, and blend them within omnichannel flows for impact.</p>
            </div>
        </div>
    </AnimatedSection>
);

export const IntegrationStrategy = () => (
    <AnimatedSection id="strategy" className="bg-[#111827]/50 rounded-xl">
        <SectionTitle>Integration with Brand Strategy</SectionTitle>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
                 <div>
                    <h3 className="text-2xl font-bold text-indigo-400 mb-4">Why Integration Matters:</h3>
                    <BulletList items={["Disconnected tactics dilute impact. Coordinated use amplifies brand voice and builds HCP trust.", "Medical and marketing alignment ensures both scientific integrity and commercial relevance."]} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-indigo-400 mb-4">Tactics That Work:</h3>
                    <BulletList items={["Co-create content calendars with both brand & medical teams", "Use insights from platform interactions to inform next-best actions", "Ensure HCP journeys are seamless across channels (email, platform, rep)"]} />
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-center mb-6">Role in Platform Strategy</h3>
                <div className="overflow-x-auto rounded-lg bg-gray-800/50">
                    <table className="w-full text-left">
                        <thead className="bg-gray-700/50">
                            <tr>
                                <th className="p-4 text-sm font-semibold tracking-wider">Function</th>
                                <th className="p-4 text-sm font-semibold tracking-wider">Role in Platform Strategy</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            <tr className="hover:bg-gray-700/30">
                                <td className="p-4 font-medium">Marketing</td>
                                <td className="p-4 text-gray-300">Brand messaging, lifecycle planning, content briefing</td>
                            </tr>
                            <tr className="hover:bg-gray-700/30">
                                <td className="p-4 font-medium">Medical</td>
                                <td className="p-4 text-gray-300">Scientific accuracy, KOL engagement, content review</td>
                            </tr>
                             <tr className="hover:bg-gray-700/30">
                                <td className="p-4 font-medium">Digital</td>
                                <td className="p-4 text-gray-300">Channel strategy, tech integration, KPI tracking</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

export const KpisAndMeasurement = () => (
    <AnimatedSection id="kpis">
        <SectionTitle>KPIs & Measurement: How to Track What Matters</SectionTitle>
        <div className="overflow-x-auto rounded-lg bg-gray-800/50 shadow-lg mb-12">
            <table className="w-full text-left">
                <thead className="bg-indigo-900/50">
                    <tr>
                        <th className="p-4 text-lg font-semibold tracking-wider">Objective</th>
                        <th className="p-4 text-lg font-semibold tracking-wider">Key Metrics</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                    <tr className="hover:bg-gray-700/30"><td className="p-4 text-xl font-medium">Reach</td><td className="p-4 text-lg text-gray-300"># of impressions, # of unique HCPs reached, specialty mix 
</td></tr>
                    <tr className="hover:bg-gray-700/30"><td className="p-4 text-xl font-medium">Engagement</td><td className="p-4 text-lg text-gray-300">Time on page, content completion rates, poll participation</td></tr>
                    <tr className="hover:bg-gray-700/30"><td className="p-4 text-xl font-medium">Perception Shift</td><td className="p-4 text-lg text-gray-300">Pre/post content surveys, HCP confidence or intent delta</td></tr>
                    <tr className="hover:bg-gray-700/30"><td className="p-4 text-xl font-medium">Action Signals</td><td className="p-4 text-lg text-gray-300">Clicks to brand or VC site, webinars sign-ups, Rep request
</td></tr>
                </tbody>
            </table>
        </div>
         <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">Qualitative Indicators:</h3>
                <BulletList items={["Comments & peer reactions on P2P platforms", "Poll trends & sentiment during webinars", "HCP feedback loops from MSLs post-platform exposure"]} />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">Optimization Tips:</h3>
                <BulletList items={["A/B test formats: articles vs. videos, polls vs. panels", "Use analytics to define “next-best content”", "Feed engagement data into CRM for personalized outreach"]} />
            </div>
        </div>
    </AnimatedSection>
);

export const BestPractices = () => (
    <AnimatedSection id="dos-donts" className="bg-[#111827]/50 rounded-xl">
        <SectionTitle>Do's & Don'ts: Best Practices</SectionTitle>
        <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8 p-6 rounded-lg border-2 border-green-500/50 bg-green-900/20">
                <h3 className="text-3xl font-bold text-green-400">DO:</h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-xl mb-2">Ensure Scientific Credibility & Compliance</h4>
                        <p className="text-gray-300">Always co-develop with Medical Affairs. Use peer-reviewed references or real-world data to boost credibility.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-2">Prioritize HCP Value Over Brand Visibility</h4>
                        <p className="text-gray-300">Use P2P forums to answer real clinical questions, not push products. Let KOLs lead, keep tone peer-to-peer.</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-xl mb-2">Integrate with Field Teams & CRM</h4>
                        <p className="text-gray-300">Ensure reps/MSLs can see engagement signals. Trigger rep follow-ups after high-value content consumption.</p>
                    </div>
                </div>
            </div>
             <div className="space-y-8 p-6 rounded-lg border-2 border-red-500/50 bg-red-900/20">
                <h3 className="text-3xl font-bold text-red-400">DON'T:</h3>
                <div className="space-y-6">
                     <div>
                        <h4 className="font-bold text-xl mb-2">Overlap with Field Messaging</h4>
                        <p className="text-gray-300">Avoid replicating what reps deliver—use platforms for scientific depth. Redundant messaging leads to HCP fatigue.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-2">Launch Without Clear Measurement Plan</h4>
                        <p className="text-gray-300">Always define KPIs and optimize mid-flight. Lack of insight = wasted budget & missed learnings.</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-xl mb-2">Treat Platforms as One-Off Tactics</h4>
                        <p className="text-gray-300">Success comes from consistent presence, not isolated campaigns. Build always-on visibility, especially for mature brands.</p>
                    </div>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

export const ExternalBestPractices = () => (
    <AnimatedSection id="external-best-practices">
        <SectionTitle>External Examples &amp; Useful Links</SectionTitle>
        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Case Studies</h3>
            <p className="text-lg text-gray-400">Explore real-world examples of successful platform use.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
            <a
                href="https://myl.sharepoint.com/:b:/s/EUDigitalTeamMaterials/EcJKeoIA0eZCqJv1GSEECewBOBLKYBNcVW3CEstieBrR5Q?e=1ywYaR"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-20 py-6 border border-transparent text-2xl font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 transition-transform transform hover:scale-105"
            >
                TonicApp - Portugal
            </a>
            <a
                href="https://www.medscape.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-20 py-6 border border-transparent text-2xl font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900 transition-transform transform hover:scale-105"
            >
                MedScape - Tail
            </a>
        </div>
        <div className="max-w-4xl mx-auto mt-20 bg-gray-800/30 p-8 rounded-lg border border-gray-700/50">
            <h3 className="text-2xl font-bold text-indigo-400 mb-6 text-center">Useful Links</h3>
            <BulletList items={[
                <span>If you want to view this information in traditional PowerPoint Slides - it's <a href="https://myl.sharepoint.com/:f:/s/EUDigitalTeamMaterials/EoLehC8SKWVAuhtSN2mWNHYBiqlpQAVc9UMui0MAvthcIw?e=8gTovy" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-300 hover:text-indigo-200 transition-colors duration-200 underline decoration-1 underline-offset-4">here&raquo;</a></span>,
                <span>View service presentation slides from MedScape, Sermo, TonicApp, Xpeer, Lecturio, InViVox, MedShr <a href="https://myl.sharepoint.com/:f:/s/EUDigitalTeamMaterials/Eq63mCMnt6FIsOyhSmgN9rcBoDJyaxvs5yNmQ1mVHuC_bA?e=hU8xKc" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-300 hover:text-indigo-200 transition-colors duration-200 underline decoration-1 underline-offset-4">here&raquo;</a></span>,
            ]} />
        </div>
    </AnimatedSection>
);