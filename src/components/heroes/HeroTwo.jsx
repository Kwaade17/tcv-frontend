export default function Home() {
    return (
        <>
            {/* HERO CONTAINER */}
            {/* On mobile, stacks vertically. On medium screens (md:), it splits into a 2-column grid */}
            <div className="w-full min-h-[450px] grid grid-cols-1 md:grid-cols-12 bg-white border border-neutral-200 shadow-sm overflow-hidden group">
                
                {/* LEFT SIDE: Text Content (Takes up 5 out of 12 columns) */}
                <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-white z-10">
                    
                    {/* Top Meta Tag */}
                    <div>
                        <span className="inline-block bg-amber-400 text-neutral-900 font-mono text-xs uppercase tracking-widest font-bold px-2.5 py-1 rounded mb-6">
                            Editorial
                        </span>
                        
                        {/* Heading: Pure black, sharp serif, high editorial feel */}
                        <h1 className="font-serif font-black text-3xl md:text-5xl text-neutral-900 leading-tight tracking-tight hover:text-amber-500 transition-colors duration-200">
                            What's New?
                        </h1>
                        
                        {/* Subheading: Deep contrast, highly readable line-height */}
                        <p className="font-serif text-neutral-600 text-base md:text-lg mt-4 leading-relaxed">
                            A journey that needs to be told but held a secret. Discover the untold editorial layout secrets behind modern publication designs.
                        </p>
                    </div>

                    {/* Bottom Interactive Area */}
                    <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                        {/* Page Indicators (Minimalistic Line bars instead of dots) */}
                        <div className="flex items-center space-x-2">
                            <span className="w-8 h-1 bg-amber-400 rounded-full" />
                            <span className="w-4 h-1 bg-neutral-200 hover:bg-neutral-300 rounded-full transition-colors cursor-pointer" />
                            <span className="w-4 h-1 bg-neutral-200 hover:bg-neutral-300 rounded-full transition-colors cursor-pointer" />
                        </div>

                        {/* Button Link */}
                        <button className="flex flex-row items-center space-x-2 text-neutral-900 font-bold hover:text-amber-500 transition-colors duration-200 group/btn cursor-pointer text-sm uppercase tracking-wider">
                            <span>Read Story</span>
                            <i className="fa-solid fa-chevron-right text-xs transform transition-transform group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE: Image Frame (Takes up 7 out of 12 columns) */}
                <div className="md:col-span-7 h-64 md:h-full relative overflow-hidden bg-neutral-100">
                    {/* Subtle warm tint overlay that fits your palette */}
                    <div className="absolute inset-0 bg-amber-400/5 mix-blend-multiply z-10 pointer-events-none" />
                    
                    <img 
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102" 
                        src="https://placehold.co/1080x720" 
                        alt="Featured Journalism Hero Story" 
                    />
                </div>

            </div>
        </>
    )
}