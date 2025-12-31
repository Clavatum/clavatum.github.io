import { Gamepad2 } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-purple-400">
          <Gamepad2 className="w-8 h-8" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Muhammed Mustafa Özdemir
          </span>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => onNavigate('biography')}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold hover:from-purple-400 hover:to-purple-500 transition-all duration-250 hover:scale-105 hover:shadow-lg hover:shadow-purple-300/30"
          >
            Biography
          </button>
          <button
            onClick={() => onNavigate('games')}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-500 hover:to-purple-500 transition-all duration-250 hover:scale-105 hover:shadow-lg hover:shadow-purple-300/30"
          >
            My Games
          </button>
          <button
            onClick={() => onNavigate('skills')}
            className="px-6 py-2 bg-gradient-to-r from-pink-600 to-pink-800 text-white rounded-lg font-semibold hover:from-purple-300 hover:to-purple-500 transition-all duration-250 hover:scale-105 hover:shadow-lg hover:shadow-purple-300/30"
          >
            Skills
          </button>
        </div>
      </nav>
    </header>
  );
}