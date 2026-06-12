import { useState } from "react"

export default function Panulaton() {
  // Mock data representing elegant student poetry, essays, and flash fiction
  const [literaryWorks] = useState([
    {
      id: 1,
      genre: "Poetry",
      title: "Mga Alingawngaw sa Pasilyo (Echoes in the Hallway)",
      excerpt: "Sa pagitan ng mga hakbang at dapit-hapon, may mga bulong ang semento na hindi mabura ng panahon. Doon natin iniwan ang mga pangarap na holds-free, umaawit sa gilid ng pisara...",
      author: "Juan Dela Cruz",
      courseYear: "AB English, 3rd Year",
      wordCount: "120 words"
    },
    {
      id: 2,
      genre: "Essays",
      title: "The Architecture of Unspoken Thoughts",
      excerpt: "We build fortresses out of quiet midterms and coffee steam, forgetting that columns are meant to hold structures up, not hold feelings in. In this campus of bricks, we are all amateur architects trying to find a room that fits our hesitations.",
      author: "Elena Roxas",
      courseYear: "BS Architecture, 4th Year",
      wordCount: "850 words"
    },
    {
      id: 3,
      genre: "Flash Fiction",
      title: "The Last Library Card",
      excerpt: "The barcode reader wouldn't blink. She tried wiping the worn plastic against her uniform. For four years, that system tracked every book that rewires her mind. Now, on graduation eve, the terminal finally read it: Account Status - Complete.",
      author: "Mark Solis",
      courseYear: "BSED Filipino, 4th Year",
      wordCount: "300 words"
    }
  ])

  return (
    <section className="w-full bg-white py-14 border-b border-neutral-100">
      
      {/* SECTION MASTER HEADER */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center space-x-3">
          <span className="h-6 w-1.5 bg-amber-500 rounded-full" />
          <h2 className="font-serif font-black text-2xl md:text-3xl text-neutral-900 tracking-tight uppercase">
            Panulaton
          </h2>
        </div>
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
          Literary & Creative Arts
        </span>
      </div>

      {/* TYPOGRAPHIC LITERARY GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: PRIMARY FEATURED LITERARY PIECE (Spans 7 Columns) */}
        {/* Designed like a vintage premium poetry pullout block */}
        <div className="lg:col-span-7 border-l-2 border-amber-400 pl-6 md:pl-8 py-2">
          <span className="font-mono text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-2.5 py-1 rounded">
            Featured {literaryWorks[0].genre}
          </span>
          
          <h3 className="font-serif font-black text-2xl md:text-3xl text-neutral-900 tracking-tight leading-tight mt-4 hover:text-amber-600 transition-colors">
            <a href={`/panulaton/${literaryWorks[0].id}`}>{literaryWorks[0].title}</a>
          </h3>
          
          <div className="font-mono text-xs text-neutral-400 mt-2">
            By {literaryWorks[0].author} <span className="mx-1.5">•</span> {literaryWorks[0].courseYear}
          </div>

          {/* Elegant Pullquote block styling for text excerpt */}
          <blockquote className="font-serif italic text-lg md:text-xl text-neutral-700 leading-relaxed mt-6 selection:bg-amber-100">
            "{literaryWorks[0].excerpt}"
          </blockquote>

          <div className="mt-8 flex items-center">
            <a 
              href={`/panulaton/${literaryWorks[0].id}`}
              className="font-mono text-xs font-bold text-neutral-900 hover:text-amber-500 tracking-wide flex items-center space-x-2 transition-colors cursor-pointer group"
            >
              <span>Continue Reading Poem</span>
              <i className="fa-solid fa-arrow-right text-[10px] transform transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: SECONDARY TEXT LIST FEEDS (Spans 5 Columns) */}
        {/* Clean, separated blocks relying completely on typography scales and margins */}
        <div className="lg:col-span-5 space-y-8 lg:pl-6">
          <h4 className="font-mono text-[11px] font-black uppercase tracking-widest text-neutral-400 border-b border-neutral-100 pb-2">
            Recent Submissions
          </h4>

          {literaryWorks.slice(1).map((work) => (
            <div key={work.id} className="group flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] font-bold uppercase text-neutral-400 tracking-wider">
                  {work.genre}
                </span>
                
                <h5 className="font-serif font-bold text-lg text-neutral-900 leading-snug tracking-tight mt-1 group-hover:text-amber-600 transition-colors">
                  <a href={`/panulaton/${work.id}`}>{work.title}</a>
                </h5>
                
                <p className="font-sans text-neutral-500 text-sm mt-2 line-clamp-2 leading-relaxed">
                  {work.excerpt}
                </p>
              </div>

              {/* Minimalist Submission Footer Info */}
              <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-neutral-400">
                <span>{work.author}</span>
                <span className="bg-neutral-50 px-2 py-0.5 rounded border border-neutral-100">{work.wordCount}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}