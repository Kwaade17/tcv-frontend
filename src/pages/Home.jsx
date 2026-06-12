import TaglineBanner from '../components/TaglineBanner'
import Hero from '../components/HeroSection'
import CollegeNews from '../components/CollegeNews'
import Saulog from '../components/Saulog'
import Yuhom from '../components/Yuhom'
import Panulaton from '../components/Panulaton'
import Pulong from '../components/Pulong'

export default function Home() {
    return (
        <>
            {/* 1. The daily credo and timestamp header */}
            <TaglineBanner />
            
            {/* 2. High-impact primary focus window */}
            <div className='mt-4'>
                <Hero type={3} />
            </div>
            
            {/* 3. Sequential editorial stack running naturally down the grid */}
            <main>
                <CollegeNews />
                <Saulog />
                <Yuhom />
                <Panulaton />
                <Pulong />
            </main>
        </>
    )
}