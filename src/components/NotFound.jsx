import { Link, useRouteError } from 'react-router-dom'

export default function NotFound() {
    const error = useRouteError();
    console.error(error); // Helpful for debugging in the console

    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center px-6 py-24 text-center select-none">
            <div className="max-w-md mx-auto">
                {/* Clean Editorial Accent */}
                <p className="text-sm font-semibold tracking-widest text-red-600 uppercase">
                    Error 404
                </p>
                
                {/* Bold Serif Headline */}
                <h1 className="mt-4 text-4xl font-serif font-bold tracking-tight text-neutral-900 sm:text-5xl">
                    Page Not Found
                </h1>
                
                {/* Muted Subtext */}
                <p className="mt-6 text-base leading-7 text-neutral-600 font-sans">
                    The article or section you are looking for might have been moved, archived, or is temporarily unavailable. 
                </p>

                {/* Styled Return Button */}
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/"
                        className="rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                        Return to Homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}
