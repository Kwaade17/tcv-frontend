import { useState } from "react"
import { Outlet, NavLink } from "react-router-dom"

function App() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const navItems = [
    { path: "/", label: "Home", icon: "fa-home" },
    { path: "/staffers", label: "Staffers", icon: "fa-user" },
    { path: "/chat", label: "Chat With Us", icon: "fa-message" },
  ]
  
  return (
    // Base layout: Pure crisp white background, neutral charcoal text
    <div className="min-h-screen bg-white text-neutral-800 font-sans flex flex-col">
      
      {/* --- MODERN TOPBAR --- */}
      {/* sticky and top-0 keeps it locked to the top when scrolling. bg-white/80 + backdrop-blur gives a premium glass look. */}
      <header className="sticky top-0 w-full h-16 bg-white/90 backdrop-blur-md border-b border-neutral-100 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
            
            {/* Branding Logo Area */}
            <div className="flex items-center space-x-2">
                <span className="text-xl font-serif font-black tracking-tight text-neutral-900 selection:bg-amber-200">
                    The <span className="text-amber-500">College</span> Voice
                </span>
            </div>

            {/* Desktop Navigation Links (Hidden on small screens, flex on medium+) */}
            <nav className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `
                            flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                            ${isActive 
                              ? "bg-amber-400 text-neutral-950 font-semibold shadow-sm" 
                              : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950"}
                        `}
                    >
                        <i className={`fa-solid ${item.icon} text-xs opacity-70`}></i>
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Mobile Hamburger Button (Only shows up on small screens) */}
            <div className="md:hidden flex items-center">
                <button 
                  onClick={() => setOpenMobileMenu(!openMobileMenu)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100 transition-colors cursor-pointer text-xl"
                  aria-label="Toggle Menu"
                >
                    <i className={`fa-solid ${openMobileMenu ? "fa-xmark" : "fa-bars"}`}></i>
                </button>
            </div>

        </div>

        {/* --- MOBILE DROPDOWN MENU --- */}
        {/* Slides down smoothly if a user is browsing on a phone */}
        <div className={`md:hidden absolute top-16 left-0 w-full bg-white border-b border-neutral-100 shadow-lg transition-all duration-300 ease-in-out origin-top
            ${openMobileMenu ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
        >
            <nav className="p-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setOpenMobileMenu(false)} // Closes menu when a link is clicked
                        className={({ isActive }) => `
                            flex items-center space-x-3 p-3 rounded-lg text-base font-medium transition-colors
                            ${isActive 
                              ? "bg-amber-400 text-neutral-950 font-bold" 
                              : "text-neutral-600 hover:bg-neutral-50"}
                        `}
                    >
                        <i className={`fa-solid ${item.icon} w-5 text-center`}></i>
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      {/* No longer requires independent scroll properties because the layout flows naturally down the viewport */}
      <main className="flex-1 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
              <Outlet />
          </div>
      </main>

    </div>
  )
}

export default App