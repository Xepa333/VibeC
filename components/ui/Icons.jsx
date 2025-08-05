
import React from 'react';

export const DigitalLogo = ({ className = "h-16" }: { className?: string }) => (
    <div className={`flex items-center gap-4 ${className}`}>
        <img src="https://companieslogo.com/img/orig/VTRS-ea139526.png" alt="Viatris logo" className="w-[70px] h-auto" />
        <div className="text-white">
            <div className="font-bold text-lg tracking-wider">DIGITAL</div>
            <div className="text-sm tracking-widest">TRANSFORMATION</div>
            <div className="text-xs tracking-wider">& INNOVATION</div>
        </div>
    </div>
);

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-500/10 rounded-lg text-indigo-400">
        {children}
    </div>
);

export const TargetIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 10-7.072 7.072m7.072-7.072l-1.414-1.414m-5.658 8.486L7.05 15.536m0-7.072l-1.414 1.414m8.486 5.658l1.414-1.414M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>
    </IconWrapper>
);

export const RocketIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    </IconWrapper>
);

export const CaseIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    </IconWrapper>
);

export const ChartIcon = () => (
    <IconWrapper>
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </IconWrapper>
);

export const CheckIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </IconWrapper>
);

export const LightbulbIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    </IconWrapper>
);