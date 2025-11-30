// --- COLOR VARIABLES ---
// Extracted from style.css :root
const COLORS = {
  primary: '#FF5722',       /* Vibrant Orange */
  accent: '#FFC107',       /* Golden/Yellow */
  dark: '#101010',         /* Deep Dark Background */
  light: '#f5f5f5',        /* Light/Off-White Text */
  vibrantMain: '#00BCD4',     /* Deep Cyan/Teal */
  vibrantSecondary: '#CCFF00', /* Neon Lime/Electric Green */
};

// --- FESTIVAL CORE INFORMATION ---
// Extracted from header and hero sections
const FESTIVAL_INFO = {
  location: 'SILCHAR, ASSAM',
  dates: 'DEC 5 - 7, 2025',
  tagline: 'HOZAAK MUSIC & ARTS FEST 2025',
  ticketLink: 'https://www.skillboxes.com/events/hozaak-fest-2025',
  contact: {
    email: 'contact@hozaak.com',
    phone: '+91 12345 67890',
  },
  social: {
    facebook: 'https://www.facebook.com/HozaakFest/',
    instagram: 'https://www.instagram.com/hozaakfestival/',
  },
};

// --- ARTIST LINEUP (HERO SECTION) ---
// Extracted from hero section content and image references
const ARTIST_LINEUP = [
  { name: 'SHLOKA PITA', image: '/images/singer7.jpg' },
  { name: 'DJ VIBES', image: '/images/singer5.jpg' },
  { name: 'THE GRR', image: '/images/singer6.jpg' },
  { name: 'HOZAAK STAR', image: '/images/singer1.jpg' },
];

// --- DAY ONE EVENT HIGHLIGHTS ---
// Extracted from #events section
const DAY_ONE_EVENTS = [
  { name: 'THE LEGEND - MANAS', stage: 'Main Stage', time: '8:00 PM', image: '/images/singer2.jpg' },
  { name: 'ROCK BAND X', stage: 'Rock Arena', time: '7:00 PM', image: '/images/singer4.jpg' },
  { name: 'DJ NIGHT', stage: 'EDM Zone', time: '10:00 PM', image: '/images/singer8.jpg' },
];

// --- GALLERY MEMORY CARDS ---
// Extracted from #gallery section
const MEMORIES_CARDS = [
    { year: '2024', title: 'The Year We Rocked The Valley', image: 'https://images.unsplash.com/photo-1517457210348-1cb5ba9aa58c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&q=80&w=900' },
    { year: '2023', title: 'The First Edition Success', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&q=80&w=900' },
    { year: '2022', title: 'Throwback to the Kick-Off', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&q=80&w=900' },
];

// --- TEAM MEMBERS ---
// Extracted from #members section
const TEAM_MEMBERS = [
  { 
    name: 'Diponkar', 
    role: 'Founder & Lead Curator', 
    bio: 'The visionary behind Hozaak, promoting Barak Valley\'s music scene.', 
    image: '/images/member1.jpg', 
    tag: 'Golden' 
  },
  { 
    name: 'Sumit', 
    role: 'Head of A&R', 
    bio: 'Curates and manages all the amazing events and featured artists.', 
    image: '/images/member2.jpg', 
    tag: 'Golden' 
  },
  { 
    name: 'Anurag', 
    role: 'Event Manager', 
    bio: 'The one making sure every show is logistically perfect.', 
    image: '/images/member3.jpg' 
  },
  { 
    name: 'Raja', 
    role: 'Technical Director', 
    bio: 'Ensuring flawless sound and light production for all performances.', 
    image: '/images/member4.jpg' 
  },
  { 
    name: 'Pradip', 
    role: 'Marketing & PR', 
    bio: 'Spreading the word about Hozaak across the region and beyond.', 
    image: '/images/member5.jpg' 
  },
  { 
    name: 'Joy', 
    role: 'Finance Lead', 
    bio: 'Handles the budget and ensures the festival remains viable.', 
    image: '/images/member6.jpg' 
  },
];

export { 
  COLORS, 
  FESTIVAL_INFO, 
  ARTIST_LINEUP, 
  DAY_ONE_EVENTS, 
  MEMORIES_CARDS, 
  TEAM_MEMBERS 
};
