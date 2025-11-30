import React from 'react';
import Head from 'next/head';

// --- Layout Components ---
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// --- Section Components ---
import HeroSection from '../components/sections/HeroSection';
import IntroBlock from '../components/sections/IntroBlock';
import LineupSection from '../components/sections/LineupSection';
import GallerySection from '../components/sections/GallerySection';
import PartnersSection from '../components/sections/PartnersSection';
import TeamSection from '../components/sections/TeamSection';

// --- UI Components & Data ---
import Button from '../components/ui/Button';
import { FESTIVAL_INFO } from '../data/festivalData';


// Component for the standalone tickets CTA block (tickets-block)
const TicketsCtaSection = () => (
    <section className="tickets-block" id="booking-cta">
        <div className="container reveal">
            <h2>TICKETS ARE LIVE!</h2>
            <h3>PHASE 2 TICKETS ARE OUT NOW!</h3>
            <p>GET YOUR TICKETS NOW BEFORE THEY RUN OUT!</p>
            <Button
                as="a" 
                href={FESTIVAL_INFO.ticketLink} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                BOOK NOW
            </Button>
        </div>
    </section>
);


function HomePage() {
    return (
        <>
            <Head>
                <title>Hozaak - Barak Valley Music & Arts Fest</title>
            </Head>

            {/* Note: Header/Footer can also be placed in _app.js for a true global layout, 
                but for a simple landing page, placing them here is fine. */}
            <Header />

            <main>
                {/* 1. HERO SECTION (Teal Block) */}
                <HeroSection />

                {/* 2. INTRO/ABOUT SECTION (Teal Block Below Wave) */}
                <IntroBlock />

                {/* 3. TICKETS CTA BLOCK (Orange Block) */}
                <TicketsCtaSection />

                {/* 4. ARTIST LINEUP & EVENTS (Gradient Title & Dark Grid) */}
                <LineupSection />

                {/* 5. GALLERY SECTION (Yellow Block) */}
                <GallerySection />

                {/* 6. PARTNERS SECTION (Neon Lime Block) */}
                <PartnersSection />

                {/* 7. TEAM SECTION (Dark Block) */}
                <TeamSection />
            </main>

            {/* 8. FOOTER (Teal Block) */}
            <Footer />
        </>
    );
}

export default HomePage;
