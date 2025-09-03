import React from 'react';
import InfoDropdown from './components/InfoDropdown';
import Logo from './components/Logo';
import FoodIconsBackground from './components/FoodIconsBackground';
import BackgroundFlair from './components/BackgroundFlair';
import Partners from './components/Partners';

function App() {
  return (
    <div className="min-h-screen bg-[#f1e9de] relative">
      <header className="bg-[#28184a] text-white py-6 relative z-20">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-[#fca80a] transition-colors">Home</a>
            <a href="#" className="hover:text-[#fca80a] transition-colors">Über uns</a>
            <a href="#" className="hover:text-[#fca80a] transition-colors">Kontakt</a>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">
        <section className="relative py-20 sm:py-32">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNLQnhMYqE01ef9Zm63kvy02g-GdZlX8hqgPo29N5NhTH6QXdzppfRTj0kedqrkEc_ScN_MdncUpVhI6o1Lr_3XeeHB44BBIKu6yS2FpaQO7rAU255u9pG17TxPUobn7t_IIoqKGvMLA1Wl1OVFbNy4kb6jrpuBqESB5hs6OHfIuvBOuy9LVML3ZXHBjjGArn2a4WbshWwLsxavKoNcQCPSR9h71H87w5mDqhGNp7KKp8prLo7dB5XtgN8JJIS31ie1iy3T4E_leQ')"}}>
            <div className="absolute inset-0 bg-[#28184a] opacity-70"></div>
            <FoodIconsBackground />
          </div>
          <div className="container mx-auto px-6 relative text-center text-white">
            {/* Hero Logo */}
            <div className="mb-8">
              <div className="flex flex-col items-center">
                <img src="/images/tasteup-logo.png" alt="TASTE UP Logo" className="h-24 md:h-32" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
              Der Afterwork-Marktplatz für <br className="hidden md:inline"/> Craft Food &amp; Beverage Startups
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-[#f1e9de]">
              Entdecke innovative Geschmacksrichtungen und unterstütze lokale Unternehmen bei unserem einzigartigen Afterwork-Event.
            </p>
            <div className="mt-10">
              <a className="rounded-full bg-[#fca80a] px-8 py-4 text-xl font-bold text-[#28184a] shadow-xl transition-transform hover:scale-105 inline-block" href="#tickets">
                Jetzt dein Ticket sichern
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-16 sm:py-24 bg-[#f1e9de] relative">
          <BackgroundFlair 
            color="#fca80a" 
            className="absolute top-10 right-10 w-32 h-32 opacity-20 -rotate-12"
          />
          <BackgroundFlair 
            color="#6f9fc5" 
            className="absolute bottom-10 left-10 w-24 h-24 opacity-20 rotate-12"
          />
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 md:items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wo, Wann, Was?</h2>
                <p className="text-lg text-[#28184a]/80 mb-6">
                  Alle Details auf einen Blick. Wähle eine Option, um mehr zu erfahren.
                </p>
                <InfoDropdown />
              </div>
              <div className="md:w-1/2">
                <img 
                  alt="Event atmosphere" 
                  className="rounded-2xl shadow-lg" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-RmXvkKTbLHsSpDblsX8mEG_bpWsp5UGFPMnCYSa5t404h6S7G53KDAuik5oYL9dbjlT0av8hJUVH4euM-BTu3PD9C-i81_HdyCHK3CxWdGJl7EszAOZ5dpbbGKZSiahIFDNXyEklf2_o5toH_DQ4iJD3O3qMWGWylIJJFkarnUcBRYe4GUVUrYaT8Z_4J3uwIlZ8BG41XuQ039ID7qdq6psyxM_ZfLxID1cRi6QHNFGXxuiBoUAOopfBCw4jnHTKGxFyiyDAY8k"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 sm:py-24 bg-[#6f9fc5] text-white relative overflow-hidden">
          <BackgroundFlair 
            color="#fca80a" 
            className="absolute -top-20 -right-20 w-80 h-80 opacity-30 rotate-45"
          />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Keynote Speaker</h2>
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto bg-[#28184a]/20 p-8 rounded-2xl relative">
              <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
                <BackgroundFlair 
                  color="#fca80a" 
                  className="absolute inset-0 w-full h-full opacity-80"
                />
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <img 
                    src="/images/speaker.png" 
                    alt="Jessica Manurung - Keynote Speaker" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#fca80a]">Jessica Manurung</h3>
                <p className="mt-2 text-lg font-medium text-[#f1e9de]">
                  Gründerin Basel Eats | Autorin Food | Bloggerin
                </p>
                <p className="mt-4 text-lg text-[#f1e9de]/90">
                  Jessica Manurung ist eine führende Expertin in der Lebensmittel- und Getränkeindustrie mit Schwerpunkt auf Innovation und Nachhaltigkeit. Sie hat zahlreiche Start-ups und Konzerne bei Markteintritts- und Wachstumsstrategien beraten.
                </p>
                <button className="mt-6 rounded-full border-2 border-[#fca80a] px-6 py-2 text-lg font-bold text-[#fca80a] transition-colors hover:bg-[#fca80a] hover:text-[#28184a]">
                  Mehr erfahren
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 sm:py-24 text-center bg-[#fca80a] relative overflow-hidden" id="tickets">
          <BackgroundFlair 
            color="#e55121" 
            className="absolute top-10 left-10 w-40 h-40 opacity-20 -rotate-12"
          />
          <BackgroundFlair 
            color="#6f9fc5" 
            className="absolute bottom-10 right-10 w-32 h-32 opacity-20 rotate-12"
          />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28184a]">Sichere dir deinen Platz!</h2>
            <p className="mt-4 text-lg text-[#28184a]/80 max-w-2xl mx-auto">
              Erlebe die Zukunft von Essen und Trinken. Tickets sind limitiert – sei schnell!
            </p>
            <div className="mt-8">
              <a className="rounded-full bg-[#e55121] px-10 py-5 text-xl font-bold text-white shadow-xl transition-transform hover:scale-105 inline-block" href="#">
                Jetzt dein Ticket sichern
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-16 sm:py-24 bg-[#f1e9de] relative overflow-hidden">
          <BackgroundFlair 
            color="#fca80a" 
            className="absolute top-20 right-20 w-48 h-48 opacity-15 rotate-45"
          />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Teilnehmende Startups</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-white p-4 rounded-2xl shadow-md flex items-center justify-center transition-transform hover:scale-105">
                  <div 
                    className="w-full bg-center bg-no-repeat aspect-square bg-contain" 
                    style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqviCrDTqmH7Lx-00mJ4DSpDTNY1MTShTgmkP9zL-oXgLf02ht1YFB-s3cpC4VgzS4VuS2__5pNiTIj6x-ol5aIK1MMjA-vsrvTiZl__YVYoUHeUL3BZvvoEXsTcMag4PjQj0Rd87xWUIu9RuAlf8wtE_Lh65vJseGdwohLFsLrXHYPpdsSPMxuKNch7a9F4nd-Op0DKjPaDGJWOJRE-OboC_2AQcBxX3VurR_k8Ek5_6zWUo5E5iBokJ_tygoXuGbMcqE54QFmck")`}}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Partners />
        
        <section className="py-16 sm:py-24 bg-[#28184a] text-white relative overflow-hidden">
          <BackgroundFlair 
            color="#fca80a" 
            className="absolute top-10 left-10 w-32 h-32 opacity-20 rotate-12"
          />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Sponsoren &amp; Organisatoren</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square flex items-center justify-center p-4">
                  <div 
                    className="w-full bg-center bg-no-repeat aspect-video bg-contain" 
                    style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBB3U8DuQ3wx2NCUtIz2tjwNoitAMkdquoCkJtcNggitUpmshmFX7nKbp0WuqJFJjZOFikiJmCSO1TUkyVGiF6OqXadZ2bGhiaLTRZb8jHQD6NnKOcjtEK2NtvlFK8euHkZ5fM5oU3_E0BYbb1D6dMUt8-d7nijAWd9J4qhTodQwHS7F1Vib7nj9hZVJRpHebnfc9f4h74PCiXqNtrwG21W-yKbPTu12n1y4CyAhSpv0kC1gZLFCpLY6JMgjJDKVKdlRRLunnLQFHU")`}}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-[#f1e9de] text-[#28184a]/80 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a className="hover:text-[#e55121] transition-colors" href="#">
              <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
              </svg>
            </a>
            <a className="hover:text-[#e55121] transition-colors" href="#">
              <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
              </svg>
            </a>
            <a className="hover:text-[#e55121] transition-colors" href="#">
              <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4">
            <a className="font-medium hover:text-[#e55121] transition-colors" href="#">Impressum</a>
            <a className="font-medium hover:text-[#e55121] transition-colors" href="#">Datenschutz</a>
            <a className="font-medium hover:text-[#e55121] transition-colors" href="#">Kontakt</a>
          </div>
          <p>© 2024 TasteUp. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
