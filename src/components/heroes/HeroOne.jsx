export default function Home() {
    return (
        <>
            {/* HERO SECTION */}
            {/* Note: changed h-100 to h-[450px] or h-[500px] as standard Tailwind goes up to h-96. */}
            <div className="w-full h-[450px] overflow-hidden relative group bg-neutral-900">
                
                {/* Image Background */}
                <img 
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" 
                    src="https://placehold.co/1080x720" 
                    alt="Featured Journalism Hero Story" 
                />
                
                {/* Overlay Gradient: Shifting dark gradient from bottom-left up to make text pop */}
                <div className="w-full h-full absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
                
                {/* Yellow Accents overlay to match your palette */}
                <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-amber-400/10 to-transparent mix-blend-overlay" />

                {/* CONTENT CONTAINER: Uses Flexbox instead of hardcoded 'top-X' coordinates for dynamic safety */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    
                    {/* Top Label (Optional classic journalism kicker tag) */}
                    <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block">
                        Featured Story
                    </span>

                    {/* Heading: Pure White, high-contrast, beautiful journalism weight */}
                    <h1 className="font-serif font-black text-4xl md:text-6xl text-white max-w-3xl leading-tight tracking-tight drop-shadow-sm">
                        What's New?
                    </h1>

                    {/* Subheading: Muted light gray/white, with increased breathing room */}
                    <p className="font-sans text-neutral-300 text-base md:text-lg max-w-xl mt-3 mb-8 leading-relaxed font-light">
                        A journey that needs to be told but held a secret. Discover the untold editorial layout secrets behind modern publication designs.
                    </p>

                    {/* INTERACTIVE CONTROLS ROW */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-white/10">
                        
                        {/* Page Indicators (Sliding News Dots) */}
                        <div className="flex items-center space-x-3">
                            <button className="w-3 h-3 bg-amber-400 rounded-full transition-all duration-300" aria-label="Slide 1 active" />
                            <button className="w-3 h-3 border border-white/50 bg-transparent hover:bg-white/20 rounded-full transition-all duration-300" aria-label="Slide 2" />
                            <button className="w-3 h-3 border border-white/50 bg-transparent hover:bg-white/20 rounded-full transition-all duration-300" aria-label="Slide 3" />
                        </div>

                        {/* Read Article Action Button */}
                        <div>
                            <button className="flex flex-row items-center space-x-2 text-amber-400 font-medium hover:text-white transition-colors duration-200 group/btn text-base md:text-lg cursor-pointer">
                                <span className="border-b border-transparent group-hover/btn:border-white transition-colors">Read Full Article</span>
                                {/* Fixed your FontAwesome icon to a more cohesive right-arrow indicator */}
                                <i className="fa-solid fa-arrow-right text-sm transform transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}