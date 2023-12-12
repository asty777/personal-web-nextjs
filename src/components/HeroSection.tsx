import Link from "next/link"

Link
export default function HeroSection(){
    return (
        <section >
            <div className="gird grid-cols-1 sm:grid-cols-12" >
                <div className="cols-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold" id="hero">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-rose-300 to-cyan-300">Hello, I'm</span>{' '}
                   <span className="">Asty ✨</span> 
                </h1>
                    <p className="text-gray-300 text-base sm:text-xs mb-6 lg:text-xl">
                       Frontend developer
                    </p>
                </div>
            </div>
        </section>
    )
}