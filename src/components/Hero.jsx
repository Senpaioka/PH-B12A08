import { FaGooglePlay } from "react-icons/fa6";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { Link } from "react-router";
import hero_pic from '../assets/hero.png'

function Hero() {

    return (
        <div className="hero bg-base-200 pt-[100px]">
            <div className="hero-content text-center py-0 px-5">
                <div className="max-w-xl">
                    <h1 className="text-5xl inter-bold text-[#001931]">We Build</h1>
                    <h1 className="text-5xl inter-bold text-[#001931]"><span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
                    <p className="py-6">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>

                    
                    <Link to='https://play.google.com/store/games' className="btn bg-white text-white border-[#e5e5e5] magic-color mr-1">
                    <FaGooglePlay className="text-base" />
                    Google Play
                    </Link>

                    <Link to='https://www.apple.com/app-store/' className="btn bg-white text-white border-[#e5e5e5] magic-color ml-1">
                    <IoLogoAppleAppstore className="text-xl" />
                    App Store
                    </Link>
                    
                    <img src={hero_pic} alt="hero bg" className="w-full mt-[50px]" />
                </div>

            </div>
        </div>
    )
}

export default Hero;