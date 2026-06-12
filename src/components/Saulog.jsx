import { useState } from "react"

export default function Saulog() {
  // Mock data representing local campus culture milestones and monthly celebrations
  const [celebrations] = useState([
    {
      id: 1,
      title: "ALCOR 6 Hinampang 2026: Intramural Torch Rekindles Unity",
      description: "Capturing the electric atmosphere, marching bands, and opening athletic ceremonies as the college community gathers for the biggest sports and culture week of the season.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      date: "June 2026",
      tag: "Main Feature",
      size: "large"
    },
    {
      id: 2,
      title: "Arts & Culture Festival: Performing Arts Take Center Stage",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=500&q=80",
      date: "May 2026",
      tag: "Cultural Exhibit",
      size: "small"
    },
    {
      id: 3,
      title: "Honoring Our Graduates: Batch 2026 Academic Regalia Walk",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=80",
      date: "June 2025",
      tag: "Milestone",
      size: "small"
    },
    {
      id: 4,
      title: "Alumni Homecoming Gala: Celebrating Decades of Excellence",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=500&q=80",
      date: "April 2026",
      tag: "Community",
      size: "small"
    },
    {
      id: 5,
      title: "Literary Night Premiere: Student Poets Echo New Verses",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=500&q=80",
      date: "March 2026",
      tag: "Showcase",
      size: "small"
    }
  ])

  // Isolate the large hero event from the smaller secondary blocks
  const mainFeature = celebrations.find(c => c.size === "large")
  const subFeatures = celebrations.filter(c => c.size === "small")

  return (
    <section className="w-full bg-white py-12 border-b border-neutral-100">
      
      {/* SECTION MASTER HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <span className="h-6 w-1.5 bg-amber-500 rounded-full" />
          <h2 className="font-serif font-black text-2xl md:text-3xl text-neutral-900 tracking-tight uppercase">
            Saulog
          </h2>
        </div>
        <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest bg-neutral-50 px-3 py-1 rounded-full border border-neutral-100">
          Monthly Spotlight
        </span>
      </div>

      {/* RE-ARCHITECTED GRAPHIC GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT SLOT: BIG PHOTOGRAPHIC BLOCK (Spans 5 Columns) */}
        <div className="lg:col-span-5 group relative rounded-2xl overflow-hidden border border-neutral-100 shadow-sm flex flex-col justify-end h-[420px] bg-neutral-900">
          {/* Main Background Cover Photo */}
          <img 
            src={mainFeature.image} 
            alt={mainFeature.title}
            className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-102"
            loading="lazy"
          />
          {/* Modern Cinematic Ambient Shadow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          
          {/* Card Content Data (Sits strictly inside the lower shadow zone) */}
          <div className="relative p-6 z-10 text-white">
            <span className="inline-block bg-amber-400 text-neutral-950 font-mono text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-3">
              {mainFeature.tag}
            </span>
            <h3 className="font-serif font-bold text-xl md:text-2xl leading-tight tracking-tight text-white group-hover:text-amber-300 transition-colors">
              <a href={`/saulog/${mainFeature.id}`}>{mainFeature.title}</a>
            </h3>
            <p className="font-sans text-neutral-300 text-xs mt-2 line-clamp-2 leading-relaxed">
              {mainFeature.description}
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[10px] text-neutral-400">
              {mainFeature.date}
            </div>
          </div>
        </div>

        {/* RIGHT SLOT: MINI COMPACT TILES (Spans 7 Columns in a 2x2 matrix) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {subFeatures.map((item) => (
            <div 
              key={item.id} 
              className="group bg-neutral-50 border border-neutral-100 rounded-xl overflow-hidden flex flex-col h-[202px] hover:bg-white hover:border-amber-200 hover:shadow-md transition-all duration-300"
            >
              {/* Top Miniature Photo */}
              <div className="h-24 w-full overflow-hidden relative bg-neutral-200">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-neutral-800 font-mono text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-100">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Tile Wording */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <h4 className="font-serif font-bold text-sm text-neutral-900 leading-snug tracking-tight line-clamp-2 group-hover:text-amber-600 transition-colors">
                  <a href={`/saulog/${item.id}`}>{item.title}</a>
                </h4>
                <div className="font-mono text-[9px] text-neutral-400">
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}