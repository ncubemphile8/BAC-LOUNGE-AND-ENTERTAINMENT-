import Link from "next/link";
import { ArrowDown, ArrowUpRight, Music2, Utensils, Martini, MapPin, Clock3, Ticket } from "lucide-react";
const partyImage = "/api/media?file=a0690a3aa8b1d4fe1e482af75c8e9e49.webp";

export default function Home() {
  return <main>
    <nav className="nav">
      <Link href="/" className="brand"><span className="brand-mark">H</span><span>THE HANGOUT<small>— BAC —</small></span></Link>
      <div className="nav-links"><a href="#worlds">Explore</a><a href="#events">Events</a><a href="#visit">Find us</a></div>
      <a className="nav-cta" href="https://wa.me/263783852352?text=Hi%20The%20Hangout%20BAC%2C%20I%27d%20like%20to%20make%20an%20enquiry.">Let's talk <ArrowUpRight size={15}/></a>
    </nav>

    <section className="hero">\n      <video className="hero-background-video" src="/api/media?file=8d6583a2-2d3f-42bf-96c4-1632d7cebc48.mp4" autoPlay muted loop playsInline preload="metadata" poster="/api/media?file=13fbc7d95927ec3cddc9fd99be2ddd89.webp"/>
      <div className="hero-noise"/>
      <div className="hero-glow"/>
      <div className="hero-copy">
        <p className="eyebrow"><span className="live-dot"/> BULAWAYO, ZIMBABWE · EST. THE GOOD TIMES</p>
        <h1>Come for<br/><em>the moment.</em><br/>Stay for the story.</h1>
        <p className="hero-sub">Good food. Cold drinks. Great music.<br/>And nights that turn into memories.</p>
        <div className="hero-actions"><a className="button button-light" href="#worlds">Discover BAC <ArrowDown size={16}/></a><Link className="button button-outline" href="/entertainment">What's happening <ArrowUpRight size={16}/></Link></div>
      </div>
      <div className="hero-stamp"><span>GOOD PEOPLE</span><b>✳</b><span>GOOD VIBES</span><b>✳</b><span>GOOD TIMES</span></div>
      <div className="hero-bottom"><span>12TH AVENUE EXTENSION</span><span>OPPOSITE BULAWAYO POLYTECHNIC</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="intro section-pad" id="worlds">
      <div className="section-kicker">01 / PICK YOUR PACE</div>
      <div className="intro-heading"><h2>Two worlds.<br/><i>One destination.</i></h2><p>Whether it's a laid-back lunch, after-work drinks or a night that deserves its own soundtrack — there's a place for you here.</p></div>
      <div className="world-grid">
        <Link href="/lounge" className="world-card lounge-card" style={{backgroundImage:"linear-gradient(180deg,rgba(8,13,16,.04),rgba(8,13,16,.9))"}}><video className="world-card-video" src="/api/media?file=b4d59679-8542-4a76-b46b-9dfe26e4aee6.mp4" autoPlay muted loop playsInline preload="metadata"/>
          <div className="world-top"><span>WORLD 01</span><span className="round-arrow"><ArrowUpRight/></span></div>
          <div className="world-content"><div className="world-icons"><Utensils/><Martini/></div><h3>The Lounge</h3><p>Eat well. Drink up. Ease into the night.</p><span className="text-link">ENTER THE LOUNGE <ArrowUpRight size={16}/></span></div>
        </Link>
        <Link href="/entertainment" className="world-card party-card" style={{backgroundImage:`linear-gradient(180deg,rgba(10,4,18,.05),rgba(10,4,18,.92)),url(${partyImage})`}}>
          <div className="world-top"><span>WORLD 02</span><span className="round-arrow"><ArrowUpRight/></span></div>
          <div className="world-content"><div className="world-icons"><Music2/><Ticket/></div><h3>Entertainment</h3><p>Find your people. Feel the music. Make a night of it.</p><span className="text-link">ENTER ENTERTAINMENT <ArrowUpRight size={16}/></span></div>
        </Link>
      </div>
    </section>

    <section className="ticker"><div>FOOD <b>✳</b> DRINKS <b>✳</b> MUSIC <b>✳</b> PEOPLE <b>✳</b> MEMORIES <b>✳</b> FOOD <b>✳</b> DRINKS <b>✳</b> MUSIC <b>✳</b> PEOPLE <b>✳</b></div></section>

    <section className="feature section-pad" id="events">
      <div className="feature-head"><div><div className="section-kicker">02 / ON THE RADAR</div><h2>Make a date<br/><i>with the good times.</i></h2></div><Link href="/entertainment" className="text-link dark-link">ALL EVENTS <ArrowUpRight size={16}/></Link></div>
      <div className="event-feature">
        <div className="event-art" style={{background:"none",padding:0}}><img src="/api/media?file=IMG-20261109-WA0051.jpg" alt="Summer Garden Experience at The Hangout BAC" style={{width:"100%",height:"100%",objectFit:"cover",display:"block",borderRadius:"inherit"}}/></div>
        <div className="event-info"><span className="event-tag">FEATURED EXPERIENCE</span><h3>Summer Garden<br/>Experience</h3><p>A day in the garden. A night in the moment. Join us for music, food and a special guest experience.</p><div className="event-meta"><span><Clock3/> 14:00 till late</span><span><MapPin/> BAC Grounds, Bulawayo</span></div><div className="event-price"><div><small>GENERAL</small><strong>$15</strong></div><div><small>VIP</small><strong>$30</strong></div></div><a className="button button-dark" href="https://wa.me/263783852352?text=Hi%20BAC%2C%20I%27m%20enquiring%20about%20Summer%20Garden%20Experience%20on%2021%20December%202026.%20Please%20share%20ticket%20availability%20and%20payment%20details.">Enquire about tickets <ArrowUpRight size={16}/></a><small className="fine-print">Online ticket purchasing and WhatsApp enquiries will be available for event campaigns.</small></div>
      </div>
    </section>

    <section className="stance-home section-pad"><div className="section-kicker">FEATURED AUTOMOTIVE EXPERIENCE</div><div className="stance-home-card" style={{backgroundImage:"linear-gradient(90deg,rgba(13,7,20,.92),rgba(13,7,20,.12)),url(/api/media?file=a0690a3aa8b1d4fe1e482af75c8e9e49.webp)"}}><div><span className="event-tag">12 DECEMBER · BAC GROUNDS</span><h2>STANCE<br/><i>NATION.</i></h2><p>Cars. Culture. Community. The automotive takeover at BAC.</p><a className="button button-light" href="https://wa.me/263783852352?text=Hi%20BAC%2C%20I%27d%20like%20to%20enquire%20about%20Stance%20Nation.">Stance Nation enquiry <ArrowUpRight size={16}/></a></div></div></section>

    <section className="manifesto"><div className="manifesto-mark">BAC<span>✳</span></div><p>Not just a place to go.<br/><i>A place to belong.</i></p><span>GOOD PEOPLE. GOOD VIBES. GOOD TIMES.</span></section>

    <section className="visit section-pad" id="visit"><div><div className="section-kicker">03 / FIND YOUR WAY HERE</div><h2>Your table.<br/><i>Your people.</i></h2><p>Find us on 12th Avenue Extension, opposite Bulawayo Polytechnic. Come through for a meal, meet friends at the bar or stay for the music.</p><a className="button button-dark" href="https://wa.me/263783852352?text=Hi%20The%20Hangout%20BAC%2C%20I%27d%20like%20to%20make%20a%20reservation.">Make an enquiry <ArrowUpRight size={16}/></a></div><div className="visit-card"><div className="visit-card-logo">THE<br/>HANGOUT<span>— BAC —</span></div><div className="visit-detail"><MapPin/>12th Avenue Extension, opposite Bulawayo Polytechnic</div><div className="visit-detail"><Clock3/>Opening hours — contact us for today's schedule</div><div className="visit-detail"><span className="phone-icon">☎</span>+263 78 385 2352</div></div></section>

    <footer className="footer"><Link href="/" className="brand footer-brand"><span className="brand-mark">H</span><span>THE HANGOUT<small>— BAC —</small></span></Link><p>Two worlds. One destination.</p><div className="footer-links"><Link href="/lounge">The Lounge</Link><Link href="/entertainment">Entertainment</Link><a href="https://wa.me/263783852352">WhatsApp</a></div><small>© 2026 THE HANGOUT BAC. GOOD TIMES LIVE HERE.</small></footer>
  </main>;
}