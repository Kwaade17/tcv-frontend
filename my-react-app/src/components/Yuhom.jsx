import { useState } from "react"

export default function Yuhom() {
  // Curated list of lifestyle, features, and campus pop-culture articles
  const [features] = useState([
    {
      id: 1,
      category: "Student Spotlight",
      title: "Behind the Lens: The Campus Photographers Capturing Our Daily Golden Hours",
      excerpt: "Meeting the unsung student artists who turn mundane library hallways and classroom shadows into cinematic digital portrait galleries.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
      likes: "142",
      date: "June 12, 2026"
    },
    {
      id: 2,
      category: "Campus Reviews",
      title: "Top 5 Hidden Coffee Nooks Near the Quad Ranked by WiFi and Cold Brew Quality",
      excerpt: "We spent 24 hours study-testing local cafes to find your next favorite midterm cramming spot.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
      likes: "98",
      date: "June 11, 2026"
    },
    {
      id: 3,
      category: "Pop Culture",
      title: "Playlist of the Month: Tunes to Surmount Your Final Thesis Block",
      excerpt: "A curated sonic escape blending ambient lofi, cinematic scores, and upbeat indie tracks.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
      likes: "215",
      date: "June 08, 2026"
    },
    {
      id: 4,
      category: "Campus Trends",
      title: "Thrift Culture: How Students are Redefining Sustainable Campus Fashion",
      excerpt: "From local vintage pop-ups to DIY locker alterations, look at how the student body stays sharp on a tight budget.",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80",
      likes: "187",
      date: "June 05, 2026"
    }
  ])

  return (
    <section className="w-full bg-white py-12 border-b border-neutral-100">
      
      {/* SECTION MASTER HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-3">
          <span className="h-6 w-1.5 bg-amber-500 rounded-full" />
          <h2 className="font-serif font-black text-2xl md:text-3xl text-neutral-900 tracking-tight uppercase">
            Yuhom
          </h2>
        </div>
        <p className="font-sans text-xs text-neutral-500 italic hidden sm:block">
          Lifestyle, Culture, & Campus Smiles
        </p>
      </div>

      {/* ASYMMETRIC MOSAIC GRID */}
      {/* Creates a dynamic, staggered column layout using Tailwind's layout flexibility */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* COLUMN 1: WIDER PRIMARY LIFESTYLE CARD (Spans 7 out of 12 columns) */}
        <div className="md:col-span-7 space-y-6">
          {features.slice(0, 2).map((item, index) => (
            <div 
              key={item.id} 
              className="group bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Conditional height layout alternative to stagger the mosaic shapes */}
              <div className={`${index === 0 ? "h-64" : "h-52"} w-full overflow-hidden relative bg-neutral-50`}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-amber-400 text-neutral-950 font-mono text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-sm">
                  {item.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl text-neutral-900 leading-snug tracking-tight group-hover:text-amber-600 transition-colors">
                  <a href={`/yuhom/${item.id}`}>{item.title}</a>
                </h3>
                <p className="font-sans text-neutral-600 text-sm mt-2.5 line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="mt-5 pt-4 border-t border-neutral-50 flex items-center justify-between font-mono text-[10px] text-neutral-400">
                  <span>{item.date}</span>
                  <div className="flex items-center space-x-1 text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded-full">
                    <i className="fa-solid fa-heart text-[9px]" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COLUMN 2: SLIMMER COMPACT SIDE-FEED CARDS (Spans 5 out of 12 columns) */}
        <div className="md:col-span-5 space-y-6">
          {features.slice(2, 4).map((item) => (
            <div 
              key={item.id} 
              className="group bg-neutral-50/50 border border-neutral-100 rounded-2xl overflow-hidden hover:bg-white hover:border-amber-200 hover:shadow-md transition-all duration-300"
            >
              <div className="h-44 w-full overflow-hidden relative bg-neutral-100">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-neutral-900 text-white font-mono text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  {item.category}
                </span>
              </div>
              
              <div className="p-5">
                <h3 className="font-serif font-bold text-base text-neutral-900 leading-snug group-hover:text-amber-600 transition-colors">
                  <a href={`/yuhom/${item.id}`}>{item.title}</a>
                </h3>
                <p className="font-sans text-neutral-500 text-xs mt-2 line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-100/60 flex items-center justify-between font-mono text-[10px] text-neutral-400">
                  <span>{item.date}</span>
                  <div className="flex items-center space-x-1 text-neutral-500">
                    <i className="fa-regular fa-heart text-[9px]" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}