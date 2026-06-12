export default function Home() {
    return (
        <>
            {/* HERO CONTAINER: Features a crisp white background with an elegant border */}
            <div className="w-full bg-white border border-neutral-200 rounded-xl p-6 md:p-8 shadow-sm group">
                
                {/* TOP ACCENT BAR: Establishes your yellow theme right away */}
                <div className="w-12 h-1.5 bg-amber-400 rounded-full mb-6" />

                {/* TWO COLUMN GRID FOR CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* LEFT SIDE: Heading and Details (Takes up 7 out of 12 columns) */}
                    <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
                        
                        {/* Kicker tag and date info */}
                        <div className="flex items-center space-x-3 text-xs font-mono tracking-wider uppercase text-neutral-500">
                            <span className="text-amber-500 font-bold">New Release</span>
                            <span>•</span>
                            <span>5 Min Read</span>
                        </div>

                        {/* Heading: High contrast black, beautiful editorial spacing */}
                        <h1 className="font-serif font-black text-3xl md:text-5xl text-neutral-900 leading-tight tracking-tight">
                            What's New?
                        </h1>

                        {/* Subheading: Balanced line heights using your serif style */}
                        <p className="font-serif text-neutral-600 text-base md:text-lg max-w-2xl leading-relaxed">
                            A journey that needs to be told but held a secret. Discover the untold editorial layout secrets behind modern publication designs.
                        </p>

                        {/* Interactive Elements Footer */}
                        <div className="pt-6 flex items-center justify-between">
                            {/* Action Button: Styled as an elegant clean text link */}
                            <button className="flex flex-row items-center space-x-3 text-neutral-900 font-bold hover:text-amber-500 transition-colors duration-200 group/btn cursor-pointer">
                                <span className="text-base tracking-wide border-b-2 border-amber-400 group-hover/btn:border-neutral-900 pb-0.5 transition-colors">
                                    Explore the Story
                                </span>
                                <i className="fa-solid fa-arrow-right text-sm transform transition-transform group-hover/btn:translate-x-1" />
                            </button>

                            {/* Page Indicators (Minimalist Dots) */}
                            <div className="flex items-center space-x-2">
                                <button className="w-2.5 h-2.5 bg-neutral-900 rounded-full" aria-label="Slide 1" />
                                <button className="w-2.5 h-2.5 bg-neutral-200 hover:bg-neutral-300 rounded-full transition-colors" aria-label="Slide 2" />
                                <button className="w-2.5 h-2.5 bg-neutral-200 hover:bg-neutral-300 rounded-full transition-colors" aria-label="Slide 3" />
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE: The Framed Image (Takes up 5 out of 12 columns) */}
                    {/* order-1 on mobile so the image appears first, switches to order-2 on large screens */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden relative shadow-md">
                            {/* Dynamic subtle scale animation on hover */}
                            <img 
                                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103" 
                                src="https://placehold.co/1080x720" 
                                alt="Featured Journalism Hero Story" 
                            />
                            {/* Beautiful clean border ring that appears inside the frame */}
                            <div className="absolute inset-0 border border-black/5 rounded-lg pointer-events-none" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}