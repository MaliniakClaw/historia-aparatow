'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-warm-black to-black" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sepia-light/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-silver-age/5 rounded-full blur-3xl animate-float" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <span className="inline-block text-sepia-light text-sm uppercase tracking-[0.3em] mb-4">
            Od X wieku do współczesności
          </span>
        </div>
        
        <h1 className="heading-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight animate-slide-up">
          <span className="block">Historia</span>
          <span className="text-gradient">Aparatów</span>
          <span className="block">Fotograficznych</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Podróż przez ponad tysiąc lat innowacji — od pierwszych eksperymentów 
          z <em>camera obscura</em> po cyfrową rewolucję XXI wieku.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#timeline"
            className="px-8 py-4 bg-gradient-to-r from-sepia-light to-amber-600 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all"
          >
            Rozpocznij podróż
          </a>
          <a
            href="#o-projekcie"
            className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all"
          >
            O projekcie
          </a>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="heading-serif text-3xl md:text-4xl text-sepia-light">1000+</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider mt-1">Lat historii</div>
          </div>
          <div className="text-center">
            <div className="heading-serif text-3xl md:text-4xl text-sepia-light">6</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider mt-1">Epok</div>
          </div>
          <div className="text-center">
            <div className="heading-serif text-3xl md:text-4xl text-sepia-light">∞</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider mt-1">Wspomnień</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-sepia-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}