export default function Home() {
    return (
        <>
            {/* HERO CONTAINER */}
            <div className="w-full min-h-[480px] relative bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
                
                {/* LEFT SIDE: Floating Content Card (Spans 6 columns on large screens) */}
                {/* z-10 ensures this text card floats cleanly over the background image */}
                <div className="lg:col-span-6 flex flex-col justify-between p-6 md:p-10 lg:p-12 bg-white lg:mr-[-4rem] z-10 relative border-b-8 lg:border-b-0 lg:border-r-8 border-amber-400 shadow-xl lg:shadow-2xl">
                    
                    <div className="space-y-4">
                        {/* Kicker / Category Tag */}
                        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-amber-600 uppercase">
                            <span>Exclusive Interview</span>
                        </div>

                        {/* Heading: Huge, ultra-bold, commanding typography */}
                        <h1 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-neutral-900 leading-none tracking-tight">
                            What's New?
                        </h1>

                        {/* Subheading */}
                        <p className="font-serif text-neutral-600 text-base md:text-lg pt-2 leading-relaxed max-w-md">
                            A journey that needs to be told but held a secret. Discover the untold editorial layout secrets behind modern publication designs.
                        </p>
                    </div>

                    {/* Bottom Utility Controls */}
                    <div className="mt-8 lg:mt-0 pt-6 flex items-center justify-between">
                        {/* Page Indicators: Clean numbers instead of dots (e.g., 01 / 03) */}
                        <div className="font-mono text-sm text-neutral-400 tracking-wider">
                            <span className="text-neutral-900 font-bold">01</span>
                            <span className="mx-2">/</span>
                            <span>03</span>
                        </div>

                        {/* Action Link Button */}
                        <button className="flex flex-row items-center space-x-2 bg-neutral-950 text-white hover:bg-amber-400 hover:text-neutral-950 px-5 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 group/btn shadow-md cursor-pointer">
                            <span>Read Story</span>
                            <i className="fa-solid fa-arrow-right text-xs transform transition-transform group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE: Full-Bleed Image Frame (Spans 6 columns, but fills background space) */}
                <div className="lg:col-span-6 h-64 lg:h-full relative overflow-hidden bg-neutral-900">
                    {/* Subtle warm overlay to filter the image colors into your theme */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-black/20 z-10 pointer-events-none" />
                    
                    <img 
                        className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105" 
                        src="https://placehold.co/1080x720" 
                        alt="Featured Journalism Hero Story" 
                    />
                </div>

            </div>
        </>
    )
}