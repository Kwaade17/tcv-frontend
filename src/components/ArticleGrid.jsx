import { useState } from "react"

export default function ArticleGrid() {
  // Mock data for your college newspaper articles
  const [articles] = useState([
    {
      id: 1,
      category: "Campus Life",
      title: "The Evolution of Student Spaces: Designing for the Future",
      excerpt: "As traditional study halls see less traffic, the university unveils its new collaborative ecosystem designed entirely by student feedback.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
      date: "June 12, 2026",
      readTime: "4 Min Read",
      isFeatured: true
    },
    {
      id: 2,
      category: "Academics",
      title: "New Artificial Intelligence Lab Opens in Tech Quad This Fall",
      excerpt: "Backed by a massive state grant, the engineering department prepares to deploy high-performance neural computing rigs open to all majors.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
      date: "June 10, 2026",
      readTime: "6 Min Read",
      isFeatured: false
    },
    {
      id: 3,
      category: "Sports",
      title: "Championship Bound: How the Underdog Team Defied the Odds",
      excerpt: "After a brutal mid-season losing streak, tactical adjustments and sheer resilience paved a historic path straight to the final tournament.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80",
      date: "June 09, 2026",
      readTime: "5 Min Read",
      isFeatured: false
    }
  ])

  return (
    <section className="w-full bg-white py-12">
      {/* SECTION HEADER */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-100">
        <h2 className="font-serif font-black text-2xl md:text-3xl text-neutral-900 tracking-tight">
          Latest Stories
        </h2>
        <button className="text-sm font-bold text-neutral-900 hover:text-amber-500 transition-colors flex items-center space-x-1.5 cursor-pointer group">
          <span>View All Articles</span>
          <i className="fa-solid fa-arrow-right text-xs transform transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* THREE COLUMN GRID */}
      {/* Responsive layout strategy: 1 column on mobile, 2 columns on tablets, 3 columns on desktops */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article 
            key={article.id} 
            className="group flex flex-col bg-white border border-neutral-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* IMAGE CONTAINER FRAME */}
            <div className="h-48 w-full overflow-hidden relative bg-neutral-100">
              <img 
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103" 
                src={article.image} 
                alt={article.title}
                loading="lazy"
              />
              {/* Subtle visual gradient vignette on top of the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>

            {/* CARD METADATA & CONTENT CONTAINER */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                {/* AMBER TAG BADGE */}
                <div className="mb-3">
                  <span className="inline-block bg-amber-400 text-neutral-950 font-mono text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded">
                    {article.category}
                  </span>
                </div>

                {/* ARTICLE TITLE */}
                <h3 className="font-serif font-bold text-xl text-neutral-900 leading-tight tracking-tight group-hover:text-amber-600 transition-colors duration-200">
                  <a href={`/article/${article.id}`} className="focus:outline-none">
                    {article.title}
                  </a>
                </h3>

                {/* ARTICLE SUMMARY EXCERPT */}
                <p className="font-sans text-neutral-600 text-sm mt-3 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* CARD FOOTER INFO */}
              <div className="mt-6 pt-4 border-t border-neutral-50 flex items-center justify-between text-xs font-mono text-neutral-400">
                <div className="flex items-center space-x-1">
                  <i className="fa-regular fa-calendar text-[11px]" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <i className="fa-regular fa-clock text-[11px]" />
                  <span>{article.readTime}</span>
                </div>
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  )
}