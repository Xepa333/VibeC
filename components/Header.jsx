import React, { useState, useEffect } from 'react';
import { DigitalLogo } from './ui/Icons.jsx';

const navLinks = [
    { name: 'Context', href: '#context' },
    { name: 'Lifecycle', href: '#lifecycle' },
    { name: 'Strategy', href: '#strategy' },
    { name: 'KPIs', href: '#kpis' },
    { name: 'Best Practices', href: '#dos-donts' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0d1124]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-6">
                        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex-shrink-0">
                            <DigitalLogo className="h-12 w-auto" />
                        </a>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;