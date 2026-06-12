import { useState } from "react"

export default function CollegeNews() {
  // Premium curated news array matching college parameters
  const [featuredStory] = useState({
    id: 1,
    category: "College News",
    title: "University Council Announces P50M Campus Modernization Plan",
    excerpt: "In a landmark decision yesterday, the administration greenlit a comprehensive infrastructure roadmap targeting updated laboratory spaces, upgraded student lounges, and solar-array installations across major buildings.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    date: "June 12, 2026",
    readTime: "5 min read",
    author: "Maria Santos"
  })

  const [secondaryStories] = useState([
    {
      id: 2,
      category: "Academic Update",
      title: "Revised Hybrid Learning Guidelines Released for Upcoming Semester",
      excerpt: "The Office of the Vice President for Academics finalized the split attendance metrics, aiming for a 60% on-campus and 40% synchronous system.",
      date: "June 11, 2026",
      readTime: "3 min read"
    },
    {
      id: 3,
      category: "Student Council",
      title: "Miting de Avance Set to Broadcast Live via Official Channels This Friday",
      excerpt: "Get to know the candidates. The Commission on Elections confirmed the final debate formats and interactive open-floor question parameters.",
      date: "June 10, 2026",
      readTime: "4 min read"
    },
    {
      id: 4,
      category: "Campus Security",
      title: "New Automated Gate Pass System Begins Trial Run Next Week",
      excerpt: "In an effort to streamline entry and exit protocols, digital identification scanners are currently being calibrated at the main vehicle checkpoint.",
      date: "June 09, 2026",
      readTime: "2 min read"
    }
  ])

  return (
    <section className="w-full bg-white py-12 border-b border-neutral-100">
      
      {/* SECTION MASTER HEADER */}
      <div className="flex items-center space-x-3 mb-8">
        <span className="h-6 w-1.5 bg-amber-500 rounded-full" />
        <h2 className="font-serif font-black text-2xl md:text-3xl text-neutral-900 tracking-tight uppercase">
          College News
        </h2>
      </div>

      {/* ASYMMETRIC PREMIUM GRID BLOCK */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: THE PRIMARY FEATURE STORY (Takes up 7 out of 12 slots) */}
        <div className="lg:col-span-7 flex flex-col justify-between group">
          <div className="w-full">
            {/* Image Wrapper Frame */}
            <div className="h-64 sm:h-80 w-full overflow-hidden rounded-xl border border-neutral-100 relative mb-5 bg-neutral-50 shadow-sm">
              <img 
                src={featuredStory.image} 
                alt={featuredStory.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-neutral-900 text-amber-400 font-mono text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-sm">
                  {featuredStory.category}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <h3 className="font-serif font-bold text-2xl md:text-3xl text-neutral-900 leading-tight group-hover:text-amber-600 transition-colors duration-200">
              <a href={`/article/${featuredStory.id}`}>{featuredStory.title}</a>
            </h3>
            
            <p className="font-sans text-neutral-600 text-sm mt-3 leading-relaxed">
              {featuredStory.excerpt}
            </p>
          </div>

          {/* Feature Card Footer */}
          <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span className="text-neutral-700 font-medium">By {featuredStory.author}</span>
            <div className="flex items-center space-x-3">
              <span>{featuredStory.date}</span>
              <span>•</span>
              <span>{featuredStory.readTime}</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: THE BREAKING FEED STACK (Takes up 5 out of 12 slots) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:space-y-0 lg:pl-4 lg:border-l lg:border-neutral-100">
          {secondaryStories.map((story, index) => (
            <div 
              key={story.id} 
              className={`group/item pb-5 flex flex-col justify-between ${
                index !== secondaryStories.length - 1 ? "border-b border-neutral-100" : ""
              }`}
            >
              <div>
                {/* Meta Indicator Row */}
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                    {story.category}
                  </span>
                </div>

                {/* Secondary Title */}
                <h4 className="font-serif font-bold text-base md:text-lg text-neutral-900 leading-snug group-hover/item:text-amber-600 transition-colors duration-200">
                  <a href={`/article/${story.id}`}>{story.title}</a>
                </h4>

                {/* Secondary Excerpt */}
                <p className="font-sans text-neutral-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                  {story.excerpt}
                </p>
              </div>

              {/* Secondary Footer */}
              <div className="mt-3 flex items-center space-x-3 font-mono text-[10px] text-neutral-400">
                <span>{story.date}</span>
                <span>•</span>
                <span>{story.readTime}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}