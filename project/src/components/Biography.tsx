export default function Biography() {
  return (
    <section id="biography" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p className="animate-fade-in-up">
            I'm a passionate game developer with years of experience creating engaging and innovative gaming experiences.
            My journey in game development started with a simple love for games and evolved into a career dedicated to
            bringing interactive worlds to life.
          </p>

          <p className="animate-fade-in-up animation-delay-200">
            Throughout my journey, I've honed my skills in various aspects of game development, including programming, design,
            and project management. I thrive in collaborative environments, working closely with artists, designers, and
            fellow developers to create cohesive and immersive games. My focus is on crafting unique gameplay experiences and 
            I believe that great games are born from the perfect blend of technical excellence and creative vision.
          </p>

          <p className="animate-fade-in-up animation-delay-400">
            When I'm not coding or designing game systems, you'll find me exploring new game releases, studying game
            design patterns, and constantly learning new techniques to push my craft forward. I'm always excited to
            collaborate on innovative projects that challenge the status quo of game development.
          </p>
        </div>
      </div>
    </section>
  );
}