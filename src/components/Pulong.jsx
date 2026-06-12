import { useState } from "react"

export default function Pulong() {
  // Configured with an uplifting verse focusing on the theme of growth and steadfastness
  const [devotional] = useState({
    verse: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
    reference: "Matthew 5:16",
    translation: "King James Version",
    reflectionHeading: "Refinement in Action",
    reflectionExcerpt: "As we pursue excellence across our campus grid, our efforts serve a greater purpose. True journalism does not just observe—it illuminates realities, carrying forward a light that remains always unceasing."
  })

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* SECTION DECORATIVE ANCHOR BAR */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <span className="font-mono text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 mb-3">
            Pulong
          </span>
          <h2 className="font-serif font-black text-xl md:text-2xl text-neutral-900 tracking-tight uppercase">
            The Devotional Anchor
          </h2>
          {/* Symmetrical framing lines flanking a centered amber dot */}
          <div className="flex items-center space-x-4 w-32 mt-3">
            <div className="h-[1px] bg-neutral-200 flex-1" />
            <div className="h-1.5 w-1.5 bg-amber-500 rounded-full shrink-0" />
            <div className="h-[1px] bg-neutral-200 flex-1" />
          </div>
        </div>

        {/* ELEGANT CENTER-ALIGNED BLOCKQUOTE FRAME */}
        <div className="bg-neutral-50/60 border border-neutral-100 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Subtle architectural background corner bounds */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-amber-300 m-4 rounded-tl" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-amber-300 m-4 rounded-tr" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-amber-300 m-4 rounded-bl" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-amber-300 m-4 rounded-br" />

          {/* SCRIPTURE QUOTE */}
          <blockquote className="font-serif italic text-xl md:text-2xl text-neutral-800 leading-relaxed max-w-2xl mx-auto selection:bg-amber-100">
            "{devotional.verse}"
          </blockquote>

          {/* SCRIPTURE CITATION REFERENCE */}
          <div className="mt-6 flex flex-col items-center justify-center">
            <span className="font-serif font-bold text-neutral-900 text-sm md:text-base tracking-wide">
              {devotional.reference}
            </span>
            <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest mt-1">
              {devotional.translation}
            </span>
          </div>

          {/* BRIEF EDITORIAL INSIGHT REFLECTION */}
          {devotional.reflectionExcerpt && (
            <div className="mt-8 pt-6 border-t border-neutral-200/60 max-w-xl mx-auto">
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-700 mb-2">
                Editorial Reflection: {devotional.reflectionHeading}
              </h4>
              <p className="font-sans text-neutral-500 text-xs leading-relaxed md:px-4">
                {devotional.reflectionExcerpt}
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}