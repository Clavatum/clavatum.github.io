import ImageCarousel from './ImageCarousel';

interface Game {
  name: string;
  description: string;
  images: string[];
  downloadUrl: string;
}

export default function Games() {
  const games: Game[] = [
    {
      name: 'Wipe & Swipe VR',
      description:
        'Wipe & Swipe is a VR heist–cleaning hybrid where you scale skyscrapers, wash windows, and secretly steal valuables from tenants—without getting caught.',
      images: [
      new URL('../../assets/wipeandswipe1.png', import.meta.url).href,
      new URL('../../assets/wipeandswipe2.png', import.meta.url).href,
      new URL('../../assets/wipeandswipe3.png', import.meta.url).href,
      new URL('../../assets/wipeandswipe4.png', import.meta.url).href,
      new URL('../../assets/wipeandswipe5.png', import.meta.url).href,
      new URL('../../assets/wipeandswipe6.png', import.meta.url).href,
      new URL('../../assets/wipeandswipe7.png', import.meta.url).href,
      new URL('../../assets/wipeandswipe8.png', import.meta.url).href,
    ],
    downloadUrl: 'https://sidequestvr.com/app/43816/wipe-swipe',
    },
    {
      name: 'Aegis of Citadel',
      description:
        'In Eldoria, a sacred artifact—the Aegis of Citadel—keeps the kingdom safe, but an ancient evil threatens to claim it. As the chosen Guardian, you must command defenses and fight on the battlefield to protect the realm.',
      images: [
      new URL('../../assets/aegisofcitaled1.png', import.meta.url).href,
      new URL('../../assets/aegisofcitaled2.png', import.meta.url).href,
      new URL('../../assets/aegisofcitaled3.png', import.meta.url).href,
      new URL('../../assets/aegisofcitaled4.png', import.meta.url).href,
      new URL('../../assets/aegisofcitaled5.png', import.meta.url).href,
      new URL('../../assets/aegisofcitaled6.png', import.meta.url).href,
    ],
        downloadUrl: 'https://clavatum.itch.io/the-aegis-of-citadel',
    },
    {
      name: 'Dark Throne: Revenge of the Kingdom',
      description:
        'Dark Throne: Revenge of the Kingdom is a platform–action adventure where you play Sir Giovanni the Galahad, one of the last soldiers of Vhalandor. Travel through mystical worlds, battle dark lords, and reclaim your kingdom’s former glory.',
      images: [
      new URL('../../assets/darkthrone1.jpeg', import.meta.url).href,
      new URL('../../assets/darkthrone2.jpeg', import.meta.url).href,
      new URL('../../assets/darkthrone3.jpeg', import.meta.url).href,
      new URL('../../assets/darkthrone4.jpeg', import.meta.url).href,
      new URL('../../assets/darkthrone5.jpeg', import.meta.url).href,
      new URL('../../assets/darkthrone6.jpeg', import.meta.url).href,
      new URL('../../assets/darkthrone7.jpeg', import.meta.url).href,
      new URL('../../assets/darkthrone8.jpeg', import.meta.url).href,
      new URL('../../assets/darkthrone9.jpeg', import.meta.url).href,
      new URL('../../assets/darkthrone10.jpeg', import.meta.url).href,
      new URL('../../assets/darkthrone11.jpeg', import.meta.url).href,
      new URL('../../assets/darkthrone12.jpeg', import.meta.url).href,
    ],
        downloadUrl: 'https://clavatum.itch.io/dark-throne-revenge-of-the-kingdom',
    },
    {
      name: "Septun'den Kaçış",
      description:
        'In the year 2158, Earth is nearing extinction. Humanity has created a clone army called the Jamakin, secretly trained on Septun—Earth’s 12th hybrid moon—and these soldiers may be the planet’s last unexpected hope.',
      images: [
      new URL('../../assets/septun1.jpg', import.meta.url).href,
      new URL('../../assets/septun2.jpg', import.meta.url).href,
      new URL('../../assets/septun3.jpg', import.meta.url).href,
      new URL('../../assets/septun4.jpg', import.meta.url).href,
      new URL('../../assets/septun5.jpg', import.meta.url).href,
      new URL('../../assets/septun6.jpg', import.meta.url).href,
      new URL('../../assets/septun7.jpg', import.meta.url).href,
    ],
        downloadUrl: 'https://batu-ozcamlik.itch.io/septunden-kacis',
    },
  ];

  return (
    <section id="games" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16 pb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          My Games
        </h2>

        <div className="space-y-14">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in-up"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <ImageCarousel images={game.images} />
                </div>

                <div className="order-1 md:order-2 space-y-8 md:space-y-10">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 pb-3 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text overflow-visible md:leading-normal leading-tight">
                    {game.name}
                  </h3>
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center">
                    {game.description}
                  </p>
                  <a
                    href={game.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 mx-auto mt-4"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}