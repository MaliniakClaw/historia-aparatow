import Hero from '@/components/Hero';
import TimelineItem from '@/components/TimelineItem';

export default function Home() {
  const timelineData = [
    {
      year: '1021',
      title: 'Camera Obscura',
      inventor: 'Ibn al-Hajsam (Alhazen)',
      description: 'Arabski uczeni opracowuje pierwszy naukowy opis ciemni optycznej. Urządzenie przepuszczające światło przez mały otwór i projektujące obraz na przeciwległej ścianie staje się pierwowzorem wszystkich przyszłych aparatów fotograficznych.',
      details: [
        'Pierwszy opis naukowy w traktacie "Księga optyki" (Kitab al-Manazir)',
        'Wykorzystanie soczewki dwuwypukłej wprowadzone około 1550 roku',
        'Artyści renesansowi (w tym Vermeer) używali camera obscura do precyzyjnego szkicowania',
        'Dopiero w 1685 roku Johann Zahn zaprojektował pierwszy przenośny model',
      ],
      image: '/images/01-camera-obscura.webp',
      imageAlt: 'Camera obscura - ciemnia optyczna z epoki renesansu',
    },
    {
      year: '1839',
      title: 'Dagerotypia',
      inventor: 'Louis Daguerre',
      description: 'Rewolucyjna technika utrwalania obrazu na posrebrzanej płycie miedzianej. Rząd Francji wykupuje patent i ogłasza wynalazek darem dla ludzkości — fotografia staje się dostępna dla mas.',
      details: [
        'Czas ekspozycji: od 30 minut do kilku sekund w zależności od warunków',
        'Płyta posrebrzana, naświetlana jodem, wywoływana parami rtęci',
        'Każdy dagerotyp to unikalny oryginał — niemożliwy do powielenia',
        'Pierwsza praktyczna metoda fotografii komercyjnej',
        '19 sierpnia 1839 — oficjalna prezentacja Akademii Nauk w Paryżu',
      ],
      image: '/images/02-daguerreotype.webp',
      imageAlt: 'Aparat do dagerotypii z 1839 roku',
    },
    {
      year: '1888',
      title: 'Kodak No. 1',
      inventor: 'George Eastman',
      description: '"Ty naciskasz guzik, my robimy resztę" — hasło, które zmieniło fotografię na zawsze. Pierwszy aparat przeznaczony dla amatorów, z załadowanym filmem na 100 zdjęć. Po wykorzystaniu aparat odsyłano do firmy na wywołanie.',
      details: [
        'Cena: 25 dolarów (dziś około 800 USD)',
        'Film celuloidowy zastąpił wcześniejsze materiały szklane',
        'Demokratyzacja fotografii — z hobby elit stała się rozrywką mas',
        'Założenie Eastman Kodak Company w 1892 roku',
        'Podwaliny pod przemysł fotograficzny XX wieku',
      ],
      image: '/images/03-kodak-brownie.webp',
      imageAlt: 'Kodak Brownie - aparat dla mas',
    },
    {
      year: '1925',
      title: 'Leica I',
      inventor: 'Oskar Barnack',
      description: 'Pierwszy komercyjny aparat małoobrazkowy na film 35mm. Kompaktowe wymiary, precyzyjna optyka i niezawodna konstrukcja zmieniły fotografię reporterską. Leica stała się narzędziem legendarnych fotografów XX wieku.',
      details: [
        'Format klatki: 24×36mm (powstał z podwojenia formatu kinowego 18×24mm)',
        'Obiektyw: Elmar 50mm f/3.5 składający się z 4 soczewek',
        'Waga: zaledwie 580 gramów — rewolucja mobilności',
        'Ikony fotografii: Henri Cartier-Bresson, Robert Capa, Alfred Eisenstaedt',
        'Do dziś Leica pozostaje symbolem prestiżu i rzemiosła',
      ],
      image: '/images/04-leica.webp',
      imageAlt: 'Leica I z 1925 roku - ikona fotografii',
    },
    {
      year: '1975',
      title: 'Pierwszy Aparat Cyfrowy',
      inventor: 'Steven Sasson (Kodak)',
      description: 'Cegiełkowy aparat CCD, ważący 3,6 kg i nagrywający na kasetę audio. Pierwsze zdjęcie cyfrowe — czarno-białe, 0,01 megapiksela, zapis w ciągu 23 sekund. Początek końca ery analogowej.',
      details: [
        'Rozdzielczość: 100×100 pikseli (10 000 pikseli całkowicie)',
        'Sensor: CCD Fairchild 201 × 16 pikseli (przesuwany mechanicznie)',
        'Nośnik: standardowa kaseta magnetofonowa',
        'Pierwsze zdjęcie: Joyce, asystentka Sassona, w laboratorium Kodaka',
        'Kodak ukrył technologię przez lata — bał się kanibalizacji filmu',
      ],
      image: '/images/05-digital-prototype.webp',
      imageAlt: 'Pierwszy aparat cyfrowy Kodaka z 1975',
    },
    {
      year: '2024',
      title: 'Era Bezlusterkowa',
      inventor: 'Sony, Canon, Nikon, Fujifilm',
      description: 'Współczesne aparaty z matrycami pełnoklatkowymi, detekcją fazy na sensorze i sztuczną inteligencją. Połączenie tradycyjnej ergonomii z możliwościami computational photography. Fotografia nigdy nie była bardziej dostępna.',
      details: [
        'Matryce: do 61 MPx, ISO do 102 400, 8K video',
        'AF z detekcją oczu i rozpoznawaniem zwierząt w czasie rzeczywistym',
        'Stabilizacja obrazu w korpusie do 8 stopni',
        'Computational photography: HDR, stacking, astrophotography modes',
        'Smartfony zastępują kompakty, profesjonalne bezlusterkowe rosną',
      ],
      image: '/images/06-modern-mirrorless.webp',
      imageAlt: 'Współczesny aparat bezlusterkowy',
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Hero />
      
      {/* Timeline Section */}
      <section id="timeline" className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-sepia-light text-sm uppercase tracking-[0.3em]">
              Oś Czasu
            </span>
            <h2 className="heading-serif text-4xl md:text-5xl text-white mt-4 mb-6">
              Sześć Rewolucji
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Od pierwszych zapisanych obrazów światła po cyfrowe sensory — 
              każda epoka przyniosła przełomowe zmiany w sposobie, 
              w jaki uchwytujemy rzeczywistość.
            </p>
          </div>
          
          {/* Vertical timeline line */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full timeline-line hidden md:block" />
            
            {timelineData.map((item, index) => (
              <TimelineItem key={item.year} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-warm-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="quote-mark absolute -top-8 left-0">" </div>
          
          <blockquote className="heading-serif text-2xl md:text-4xl text-white leading-relaxed mb-8">
            Fotografia to prawda. A kino to prawda dwadzieścia cztery razy 
            na sekundę.
          </blockquote>
          
          <cite className="text-sepia-light text-lg not-italic">
            — Jean-Luc Godard
          </cite>
        </div>
      </section>
      
      {/* About Section */}
      <section id="o-projekcie" className="py-24 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sepia-light text-sm uppercase tracking-[0.3em]">
              Metodologia
            </span>
            <h2 className="heading-serif text-3xl md:text-4xl text-white mt-4">
              O Projekcie
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-white text-xl mb-4">Generowane przez AI</h3>
              <p className="text-gray-400 leading-relaxed">
                Ta strona została stworzona autonomicznie przez agenta AI (Maliniak) 
                działającego na modelu Kimi K2.5. Kod Next.js, TypeScript, Tailwind CSS, 
                treści i obrazy wygenerowane w całości przez sztuczną inteligencję 
                — bez ingerencji człowieka w proces twórczy.
              </p>
            </div>
            
            <div>
              <h3 className="text-white text-xl mb-4">Źródła Historyczne</h3>
              <p className="text-gray-400 leading-relaxed">
                Informacje historyczne oparte na rzetelnych źródłach: 
                dokumenty Ibn al-Hajsama (1021), patent Daguerre'a (1839), 
                archiwa Kodak i Leica, wywiady ze Stevenem Sassonem. 
                Daty i fakty zweryfikowane przez Perplexity AI.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
              Wygenerowano: 15 czerwca 2026 · Model: Kimi K2.5 · Framework: Next.js 15
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Historia Aparatów Fotograficznych · 
            Projekt edukacyjny stworzony przez AI
          </p>
        </div>
      </footer>
    </main>
  );
}