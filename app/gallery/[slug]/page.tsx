import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
const stories:Record<string,{name:string;category:string;cover:string}> = {
  "elevation-sessions": {
    "name": "Elevation Sessions",
    "category": "Food · music · drinks",
    "cover": "be170f0f6109cb80131b77ba5b86f694.webp"
  },
  "party-on-a-thursday": {
    "name": "Party on a Thursday",
    "category": "Midweek vibes",
    "cover": "443d819717fa45741ad99b9bc22de5a0.webp"
  },
  "saturday-hangout": {
    "name": "Saturday Hangout",
    "category": "Weekend sessions",
    "cover": "d9398f40081e3c6eb4f8f0fdad39041b.webp"
  },
  "stella-friday": {
    "name": "Stella Friday",
    "category": "Friday sessions",
    "cover": "d718e7ede34240024a6dec85f36271a1.webp"
  },
  "martell-friday": {
    "name": "Martell Friday",
    "category": "The Friday experience",
    "cover": "7215266285388f0e9a7c5c1bcb6dacef.webp"
  },
  "hangout-fridays": {
    "name": "Hangout Fridays",
    "category": "Friday nights",
    "cover": "b5b944a30e3a6f83fcf0babcca87a07d.webp"
  },
  "summer-garden": {
    "name": "Summer Garden Experience",
    "category": "DJ Maphorisa · 21 December",
    "cover": "IMG-20261109-WA0051.jpg"
  },
  "stance-nation": {
    "name": "Stance Nation",
    "category": "Automotive culture · 12 December",
    "cover": "a0690a3aa8b1d4fe1e482af75c8e9e49.webp"
  }
};
export function generateStaticParams(){return Object.keys(stories).map(slug=>({slug}));}
export default async function EventStory({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=stories[slug]||stories["elevation-sessions"];const media="/api/media?file="+encodeURIComponent(item.cover);return <main className="archive-page"><nav className="nav"><Link href="/" className="brand"><span className="brand-mark">H</span><span>THE HANGOUT<small>— BAC —</small></span></Link><Link href="/gallery" className="back-link"><ArrowLeft size={16}/> EVENT ARCHIVE</Link><Link href="/entertainment" className="nav-cta">Entertainment <ArrowUpRight size={15}/></Link></nav><header className="story-hero" style={{backgroundImage:`linear-gradient(90deg,#090a10dc,#090a1050),url(${media})`}}><span className="eyebrow">THE HANGOUT BAC · EVENT STORY</span><p className="story-category">{item.category}</p><h1>{item.name}</h1><p>Original campaign artwork from The Hangout BAC.</p></header><section className="section-pad story-gallery"><div className="section-kicker">THE CAMPAIGN ARTWORK</div><div className="story-image-grid"><div className="story-image story-image-0" style={{backgroundImage:`url(${media})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundColor:"#111"}}/></div><div className="story-bottom"><span>THE HANGOUT BAC · BULAWAYO</span><Link href="/gallery" className="text-link dark-link">BACK TO ALL EVENTS <ArrowUpRight size={15}/></Link></div></section><footer className="footer"><Link href="/" className="brand footer-brand"><span className="brand-mark">H</span><span>THE HANGOUT<small>— BAC —</small></span></Link><p>Two worlds. One destination.</p><Link href="/lounge">The Lounge →</Link><small>© 2026 THE HANGOUT BAC</small></footer></main>}