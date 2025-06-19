import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import AboutGameSection from '../components/AboutGameSection'
import CharactersCarousel from '../components/CharactersCarousel'
import HowToPlaySection from '../components/HowToPlaySection'
import ItemsSection from '../components/ItemsSection'
import BlogPreviewSection from '../components/BlogPreviewSection'
import Footer from '../components/Footer'

function LandingPage() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <AboutGameSection />
            <CharactersCarousel />
            <HowToPlaySection />
            <ItemsSection />
            <BlogPreviewSection />
            <Footer />
        </div>
    )
}

export default LandingPage 