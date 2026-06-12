import { useState } from "react"

export default function TrendingStrip() {
  // Mock data for trending topics - perfect for a college publication
  const [trendingTopics] = useState([
    { id: 1, tag: "#CampusElections", isHot: true },
    { id: 2, tag: "#Graduation2026", isHot: false },
    { id: 3, tag: "#TuitionUpdate", isHot: false },
    { id: 4, tag: "#SportsConference", isHot: true },
    { id: 5, tag: "#HousingDeadlines", isHot: false },
    { id: 6, tag: "#TechLabOpening", isHot: false },
  ])

  return (
    <div className="w-full bg-white border-b border-neutral-100 py-3">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center">
        
        {/* LEADING ANCHOR BADGE */}
        <div className="flex items-center space-x-2 shrink-0 pr-4 border-r border-neutral-200 mr-4">
          <span className="relative flex h-2 w-2">
            {/* Pulsing red dot to indicate live tracking */}
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="font-mono text-xs font-black uppercase tracking-wider text-neutral-900">
            Trending <span className="hidden sm:inline">Now</span>
          </span>
        </div>

        {/* SCROLLABLE TAGS CONTAINER */}
        {/* 'overflow-x-auto' allows mobile swiping, 'scrollbar-none' hides the ugly scrollbars */}
        <div className="flex items-center space-x-3 overflow-x-auto scrollbar-none py-1 w-full mask-gradient-right">
          {trendingTopics.map((topic) => (
            <button
              key={topic.id}
              className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 shrink-0 cursor-pointer
                ${topic.isHot 
                  ? "bg-amber-50 border-amber-200 text-amber-800 font-bold hover:bg-amber-100" 
                  : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
            >
              <span>{topic.tag}</span>
              {topic.isHot && (
                <i className="fa-solid fa-fire text-[10px] text-amber-600 animate-pulse" />
              )}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}