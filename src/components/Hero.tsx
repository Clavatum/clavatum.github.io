import { Github, Linkedin, Gamepad, Mail, Link } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src={new URL('../../assets/MyPP.jpg', import.meta.url).href}
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.onerror = null;
                  t.src = new URL('../../assets/placeholder-avatar.svg', import.meta.url).href;
                }}
                alt="Profile"
                className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full object-cover border-4 border-purple-500/50"
              />
            </div>
          </div>

          <div className="space-y-6 animate-slide-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Game Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Crafting immersive experiences
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Passionate about creating captivating games that push the boundaries of interactive entertainment.
              Specialized in gameplay mechanics, system design, and bringing creative visions to life.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Clavatum"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 group"
              >
                <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammedmustafaozdemir/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 group"
              >
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://clavatum.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 group"
              >
                <Gamepad className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="mailto:ozdemir1794@hotmail.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 group"
              >
                <Mail className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://linktr.ee/clavatum"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 group"
              >
                <Link className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}