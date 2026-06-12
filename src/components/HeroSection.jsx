import HeroOne from './heroes/HeroOne'
import HeroTwo from './heroes/HeroTwo'
import HeroThree from './heroes/HeroThree'
import HeroFour from './heroes/HeroFour'

export default function HeroSection({type}) {
    const heroMap = {
        1: <HeroOne />,
        2: <HeroTwo />,
        3: <HeroThree />,
        4: <HeroFour />
    }

    return heroMap[type] || <HeroOne />
}