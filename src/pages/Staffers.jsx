import { Link } from 'react-router-dom'
import Sunflower from "../assets/sunflower-plant-icon.svg"

function Staffers() {
    return(
        <>
          <div className="mt-6">
            <div className="mx-auto w-12 h-12">
              <img className="w-full h-full object-fill object-center" src={Sunflower} alt="Sunflower Icon" />
            </div>
            <div className="w-65 h-auto text-center rounded-lg border border-dashed border-slate-400 mx-auto mt-2 space-y-1.5 overflow-hidden">
              <h1 className="py-1.5 font-bold text-xl">Upcoming Soon!</h1>
              <p className="w-full h-full bg-slate-300 py-4 text-sm font-light">Staffers page is currently under development.<br /><br /><span className="text-xs font-thin"><em>Please go back!</em></span></p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                  to="/"
                  className="rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                  Return to Homepage
              </Link>
          </div>
        </>
    )
}
export default Staffers