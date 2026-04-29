import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ShoppingBag, ArrowRight, ShieldCheck, Flame, Leaf, Droplet } from 'lucide-react';

export default function App() {
  const [heroVariant, setHeroVariant] = useState<'A' | 'B'>('B');

  return (
    <div className="min-h-screen bg-jd-beige selection:bg-jd-dark selection:text-jd-beige font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-jd-beige border-b-4 border-jd-dark text-jd-dark shadow-brutal-lg">
        <div className="text-2xl font-black tracking-tighter uppercase" style={{ fontFamily: 'var(--font-modern)' }}>JUNGLE DØG</div>
        <div className="hidden md:flex gap-8 font-modern uppercase tracking-widest text-sm font-black">
          <button className="hover:text-jd-red hover:underline decoration-4 underline-offset-4 transition-all">Shop</button>
          <button className="hover:text-jd-red hover:underline decoration-4 underline-offset-4 transition-all">The Døg</button>
          <button className="hover:text-jd-red hover:underline decoration-4 underline-offset-4 transition-all">B2B Portal</button>
        </div>
      </nav>

      <Hero variant={heroVariant} setVariant={setHeroVariant} />
      <EmpireMap />
      <GastroPortal />
      <ShopPreview />
      <CultShirt />
      <DesignNotes />
    </div>
  );
}

const Hero = ({ variant, setVariant }: { variant: 'A' | 'B', setVariant: (v: 'A' | 'B') => void }) => {
  const isA = variant === 'A';
  const fontFamily = isA ? 'var(--font-berlin)' : 'var(--font-modern)';

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-12 overflow-hidden bg-jd-red text-jd-dark border-b-4 border-jd-dark">
      {/* Brutalist Decorative Elements */}
      <div className="absolute top-32 right-12 w-64 h-64 bg-jd-green border-4 border-jd-dark shadow-brutal hidden lg:block rounded-full animate-[spin_20s_linear_infinite]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,var(--color-jd-dark)_2px,transparent_3px)] bg-[size:16px_16px] opacity-20" />
      </div>
      
      <div className="absolute bottom-20 right-32 w-48 h-48 bg-jd-beige border-4 border-jd-dark shadow-brutal hidden md:block">
        <img 
          src="https://images.unsplash.com/photo-1530836369250-ef71a3f5e54c?q=80&w=800&auto=format&fit=crop" 
          alt="Urban Farming" 
          className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
        />
      </div>

      {/* Variant Toggle Panel */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30 bg-jd-beige border-4 border-jd-dark p-2 flex gap-2 shadow-brutal w-max">
        <button 
          onClick={() => setVariant('A')} 
          className={`px-6 py-2 text-xs uppercase tracking-widest font-black transition-all border-4 border-transparent ${isA ? 'bg-jd-dark text-jd-beige border-jd-dark' : 'hover:border-jd-dark hover:bg-jd-green'}`}
        >
          A (Berlin Sans)
        </button>
        <button 
          onClick={() => setVariant('B')} 
          className={`px-6 py-2 text-xs uppercase tracking-widest font-black transition-all border-4 border-transparent ${!isA ? 'bg-jd-dark text-jd-beige border-jd-dark' : 'hover:border-jd-dark hover:bg-jd-green'}`}
        >
          B (Modern)
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start mt-16 md:mt-24">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           className="bg-jd-beige border-4 border-jd-dark shadow-brutal px-6 py-3 text-sm uppercase tracking-[0.2em] font-black mb-12 flex items-center gap-3"
        >
           <span className="w-3 h-3 bg-jd-green border-2 border-jd-dark" /> 100% Swiss Made
        </motion.div>
        
        <motion.h1 
          key={variant}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ fontFamily }}
          className={`uppercase leading-[0.85] tracking-tight ${isA ? 'text-[clamp(3.5rem,10vw,10rem)] mb-8 shadow-black' : 'text-[clamp(3.5rem,11vw,11rem)] font-black mb-6'}`}
        >
          <span className="bg-jd-beige border-4 border-jd-dark px-4 py-2 inline-block shadow-brutal-lg mb-4 hover:-translate-y-2 hover:shadow-brutal-xl transition-transform">Urban</span><br/>
          <span className="bg-jd-green border-4 border-jd-dark px-4 py-2 inline-block shadow-brutal-lg mt-2 hover:-translate-y-2 hover:shadow-brutal-xl transition-transform">Farming.</span><br/>
          <span className="text-jd-beige" style={{ textShadow: '6px 6px 0px var(--color-jd-dark)' }}>Street Culture.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl md:text-3xl max-w-2xl font-black bg-jd-beige text-jd-dark px-6 py-4 border-4 border-jd-dark shadow-brutal mt-8 leading-snug"
        >
          Frischer als der Dschungel. Schärfer als die Straße. Die kompromissloseste Sauce der Schweiz.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6, duration: 0.5 }}
           className="mt-16 flex gap-6"
        >
           <button className="bg-jd-dark text-jd-beige px-10 py-5 text-lg uppercase font-modern font-black border-4 border-jd-dark shadow-brutal hover:-translate-y-1 hover:translate-x-1 hover:shadow-none hover:bg-jd-beige hover:text-jd-dark transition-all active:translate-y-2 active:-translate-x-2">
             Waffen Wählen
           </button>
        </motion.div>
      </div>
    </section>
  );
}

const EmpireMap = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-jd-beige border-b-4 border-jd-dark relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-jd-dark)_2px,transparent_2px),linear-gradient(to_bottom,var(--color-jd-dark)_2px,transparent_2px)] bg-[size:64px_64px] opacity-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[clamp(3rem,6vw,6rem)] font-modern font-black text-jd-dark uppercase leading-[0.9] mb-8"
          >
            The Døg's <br/> 
            <span className="bg-jd-green text-jd-dark px-4 py-1 border-4 border-jd-dark shadow-brutal inline-block mt-4">Empire</span>
          </motion.h2>
          <p className="text-xl md:text-2xl max-w-xl mb-12 font-bold leading-relaxed bg-white border-4 border-jd-dark p-6 shadow-brutal">
            Vom urbanen Gewächshaus direkt auf die Tische der wildesten Gastro-Betriebe der Schweiz. Folge den Pins.
          </p>
          <div className="flex gap-8">
             <div className="bg-jd-red text-white border-4 border-jd-dark p-6 shadow-brutal text-center flex-1">
               <span className="text-5xl font-black block mb-2 font-modern">42+</span>
               <span className="uppercase tracking-widest font-bold">Partner</span>
             </div>
             <div className="bg-jd-dark text-jd-beige border-4 border-jd-dark p-6 shadow-brutal text-center flex-1">
               <span className="text-5xl font-black block mb-2 font-modern">3</span>
               <span className="uppercase tracking-widest font-bold">Städte</span>
             </div>
          </div>
        </div>

        <div className="flex-1 w-full relative aspect-square bg-white border-4 border-jd-dark shadow-brutal-xl overflow-hidden group p-8">
           {/* Brutalist Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-jd-dark)_4px,transparent_4px),linear-gradient(to_bottom,var(--color-jd-dark)_4px,transparent_4px)] bg-[size:48px_48px] opacity-20" />
           
           {/* Abstract Switzerland Shape */}
           <svg viewBox="0 0 400 300" className="w-[90%] h-[90%] opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <path d="M 50 150 L 100 20 L 300 20 L 350 150 L 300 280 L 100 280 Z" fill="#1AAA5A" stroke="#111111" strokeWidth="8" />
           </svg>
           
           {/* Animated Pins */}
           {[
             { top: '30%', left: '40%', delay: 0.1, label: "Zürich Street Food" },
             { top: '55%', left: '65%', delay: 0.3, label: "Urban Burger Basel" },
             { top: '75%', left: '45%', delay: 0.5, label: "Bern City BBQ" },
             { top: '45%', left: '80%', delay: 0.7, label: "St. Gallen Hotspot" },
           ].map((pin, i) => (
             <motion.div 
               key={i}
               initial={{ y: -60, opacity: 0, scale: 0.5 }}
               whileInView={{ y: 0, opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: pin.delay, type: 'spring', bounce: 0.5 }}
               className="absolute flex flex-col items-center cursor-pointer hover:z-20"
               style={{ top: pin.top, left: pin.left }}
             >
                <div className="bg-jd-red border-4 border-jd-dark p-2 shadow-brutal transition-transform hover:-translate-y-2 hover:shadow-brutal-lg duration-200">
                  <MapPin size={32} strokeWidth={3} className="text-jd-beige" />
                </div>
                <div className="absolute top-16 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap bg-jd-beige text-jd-dark border-4 border-jd-dark px-4 py-2 font-black font-modern shadow-brutal translate-y-2 group-hover:translate-y-0 uppercase tracking-wider">
                  {pin.label}
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}

const GastroPortal = () => {
  return (
    <section className="bg-jd-dark text-jd-beige relative overflow-hidden flex flex-col md:flex-row min-h-[80vh] border-b-4 border-jd-dark">
      <div className="md:w-[55%] p-10 md:p-24 flex flex-col justify-center z-10">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-jd-red text-white uppercase tracking-[0.2em] text-sm mb-8 font-black font-modern border-4 border-jd-dark shadow-[4px_4px_0_var(--color-jd-beige)] px-4 py-2">
            <ShieldCheck size={20} /> B2B & Gastronomie
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-modern font-black uppercase leading-[1] mb-8">
            Bring den <span className="bg-jd-green text-jd-dark border-4 border-jd-dark px-3 py-1 shadow-[6px_6px_0_var(--color-jd-beige)] inline-block rotate-2">Jungle</span> <br/><span className="mt-4 block">auf deine Karte.</span>
          </h2>
          <p className="text-lg md:text-xl font-bold mb-12 leading-relaxed max-w-lg bg-jd-beige text-jd-dark p-6 border-4 border-jd-dark shadow-[8px_8px_0_var(--color-jd-red)]">
            Großgebinde, exklusive Konditionen und der kompromisslose Geschmack. Werde Teil des Døg Netzwerks.
          </p>
          <button className="bg-jd-beige text-jd-dark border-4 border-jd-dark shadow-[6px_6px_0_var(--color-jd-green)] px-10 py-5 uppercase font-modern font-black hover:bg-jd-red hover:text-white hover:shadow-[2px_2px_0_var(--color-jd-green)] hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-4 w-fit tracking-wider group text-lg">
            Portal Betreten <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
      <div className="md:w-[45%] min-h-[40vh] relative border-l-4 border-jd-dark bg-jd-green overflow-hidden flex items-center justify-center p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle,var(--color-jd-dark)_3px,transparent_4px)] bg-[size:24px_24px] opacity-30" />
        <img 
           src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2874&auto=format&fit=crop" 
           alt="Restaurant Kitchen" 
           className="w-full h-full object-cover border-4 border-jd-dark shadow-brutal-xl grayscale contrast-150 relative z-10" 
         />
      </div>
    </section>
  );
}

const ShopPreview = () => {
  const products = [
    { title: "Red Heat", desc: "Signature Drop. Pure, schneidende Schärfe.", color: "bg-jd-red", textColor: "text-jd-beige" },
    { title: "Green Magic", desc: "Kräuter, Limette, fiese Jalapeño.", color: "bg-jd-green", textColor: "text-jd-dark" },
    { title: "White Bliss", desc: "Cremig, unerwartet, gefährlich gut.", color: "bg-white", textColor: "text-jd-dark" },
  ];

  return (
    <section className="py-24 md:py-40 px-6 bg-jd-beige text-jd-dark border-b-4 border-jd-dark bg-[radial-gradient(circle,var(--color-jd-dark)_2px,transparent_3px)] bg-[size:32px_32px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 bg-jd-beige border-4 border-jd-dark p-8 md:p-12 shadow-brutal-lg">
          <div>
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-modern font-black uppercase leading-none mb-6">Auswahl<br/><span className="text-jd-red underline decoration-8 underline-offset-8">Treffen.</span></h2>
            <p className="text-xl font-bold max-w-md bg-jd-dark text-jd-beige p-4 border-4 border-jd-dark">100% Urban Grown. 0% Bullshit. Small batches für maximalen Impact.</p>
          </div>
          <button className="bg-jd-red text-white border-4 border-jd-dark shadow-brutal px-8 py-4 font-modern font-black uppercase tracking-widest hover:translate-y-1 hover:translate-x-1 hover:shadow-none hover:bg-jd-dark transition-all flex items-center gap-3">
            Shop <ArrowRight size={24} />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {products.map((prod, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative aspect-[3/4] p-8 flex flex-col justify-between ${prod.color} ${prod.textColor} border-[6px] border-jd-dark shadow-[12px_12px_0_var(--color-jd-dark)] hover:-translate-y-4 hover:-translate-x-2 hover:shadow-[20px_20px_0_var(--color-jd-dark)] transition-all duration-300 group cursor-pointer`}
            >
              <div className="relative z-10 flex justify-between items-start">
                <span className="font-modern font-black text-5xl border-b-4 border-current pb-2">0{i+1}</span>
                <button className="w-16 h-16 flex items-center justify-center bg-jd-dark text-jd-beige border-4 border-jd-dark shadow-brutal hover:bg-jd-red transition-colors group-hover:scale-110 duration-200">
                  <ShoppingBag size={28} />
                </button>
              </div>
              
              {/* Brutalist Abstract Shape inline */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-8 border-current rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
              
              <div className="relative z-10 mt-auto bg-jd-beige text-jd-dark p-6 border-4 border-jd-dark shadow-[6px_6px_0_var(--color-jd-dark)] -mx-4 -mb-4">
                <h3 className="text-3xl font-modern font-black uppercase mb-3 leading-none">{prod.title}</h3>
                <p className="font-bold leading-snug">{prod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CultShirt = () => {
  return (
    <section className="bg-jd-dark text-jd-beige py-24 md:py-40 px-6 border-b-4 border-jd-dark">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 flex-col-reverse items-center gap-16 md:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square w-full max-w-lg mx-auto bg-jd-red border-[6px] border-jd-dark shadow-brutal-xl group p-8 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,var(--color-jd-dark)_25%,transparent_25%,transparent_75%,var(--color-jd-dark)_75%,var(--color-jd-dark)),linear-gradient(45deg,var(--color-jd-dark)_25%,transparent_25%,transparent_75%,var(--color-jd-dark)_75%,var(--color-jd-dark))] bg-[size:40px_40px] bg-[position:0_0,20px_20px] opacity-10" />
          {/* Mockup Image Filtered Brutal */}
          <img 
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop" 
            alt="The Cult T-Shirt" 
            className="w-[80%] h-[80%] object-cover grayscale contrast-200 border-4 border-jd-dark shadow-brutal relative z-10 group-hover:scale-105 transition-transform duration-300" 
          />
          
          <div className="absolute -bottom-8 -right-8 z-20">
            <div className="bg-jd-beige border-4 border-jd-dark p-6 text-jd-dark shadow-[8px_8px_0_var(--color-jd-dark)] hover:-translate-y-2 hover:shadow-[12px_12px_0_var(--color-jd-dark)] transition-all">
              <div className="text-jd-red font-black text-sm uppercase tracking-[0.2em] mb-1">Drop #01</div>
              <div className="font-modern font-black uppercase text-3xl mb-4">The Jungle-T</div>
              <div className="font-modern font-black text-4xl bg-jd-green text-jd-dark inline-block px-4 border-4 border-jd-dark">45.—</div>
            </div>
          </div>
        </motion.div>
        
        <div>
          <div className="inline-block bg-jd-red text-white border-4 border-jd-dark shadow-brutal px-6 py-2 uppercase tracking-[0.3em] font-black mb-8">
            Merch Release
          </div>
          <h3 className="text-[clamp(3.5rem,7vw,7rem)] font-modern font-black uppercase leading-[0.85] mb-8 text-jd-beige" style={{ textShadow: '6px 6px 0 var(--color-jd-red)' }}>
            Wear the <br/> Revolution.
          </h3>
          <p className="text-2xl font-bold mb-12 bg-white text-jd-dark border-4 border-jd-dark p-6 shadow-brutal leading-snug">
            Kein billiger Promostoff. Ein Statement. Heavyweight Cotton, entworfen für die Nacht und inspiriert von der rauen Ästhetik urbaner Gewächshäuser.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-jd-green text-jd-dark border-4 border-jd-dark shadow-brutal px-8 py-5 text-lg uppercase font-modern font-black hover:bg-jd-red hover:text-white transition-colors flex items-center gap-4 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <ShoppingBag size={24} /> Pre-Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const DesignNotes = () => {
  return (
    <section className="py-24 md:py-40 px-6 bg-jd-red text-jd-dark">
      <div className="max-w-5xl mx-auto bg-jd-beige border-8 border-jd-dark shadow-[16px_16px_0_var(--color-jd-dark)] p-8 md:p-16">
        <h2 className="text-5xl md:text-7xl font-modern font-black uppercase border-b-8 border-jd-dark pb-6 mb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <span className="bg-jd-dark text-jd-beige px-6 py-2 inline-block shadow-brutal-lg -rotate-2">Notes</span>
          <span className="text-xl font-bold tracking-[0.3em] bg-jd-green px-4 py-2 border-4 border-jd-dark">JUNGLE DØG RELAUNCH</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 font-bold leading-relaxed text-xl">
          <div className="bg-white border-4 border-jd-dark p-6 shadow-brutal">
            <h3 className="text-3xl font-black font-modern text-jd-red mb-4 uppercase tracking-widest border-b-4 border-jd-dark pb-2">01. Neo-Brutalismus</h3>
            <p className="mb-4">
              Konsequent dicke Konturen (4px-8px), harte, nicht weichende Schattenketten ("Solid Drop Shadows") und ein radikaler Farbkontrast.
            </p>
            <p>
              Statt zarten Überblendungen nutzen wir mutige, klar getrennte Flächen. Formen schweben nicht weich ein, sie verdrängen den Raum.
            </p>
          </div>
          <div className="bg-white border-4 border-jd-dark p-6 shadow-brutal">
            <h3 className="text-3xl font-black font-modern text-jd-green mb-4 uppercase tracking-widest border-b-4 border-jd-dark pb-2">02. Typografie & Form</h3>
            <p className="mb-4">
              <strong>Space Grotesk</strong> oder massive Seriflose unterstreichen die "Plakativität". Texte fungieren als grafische Blöcke.
            </p>
            <p>
              Grelle Farben wie Red (#ED3221) und Green (#1AAA5A) kombiniert mit Harsh Black (#111) simulieren den lauten Streetwear- / Zine-Culture Aspekt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

