import { useRef } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Shield } from 'lucide-react'
import img1 from '../../assets/gallery/gallery_1.jpg'
import img2 from '../../assets/gallery/gallery_2.jpg'
import img3 from '../../assets/gallery/gallery_3.jpg'

const images = [img1, img2, img3]

export default function BlockBenefits() {
    return (
        <section className="py-24 px-6 bg-level-4 text-white relative min-h-[50vh] flex flex-col justify-center overflow-hidden">
            <style>{`
                @keyframes slowZoom {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                .animate-slow-zoom {
                    animation: slowZoom 20s ease-in-out infinite;
                }
            `}</style>

            <div className="container mx-auto max-w-6xl text-center">
                <span className="inline-flex items-center gap-2 py-1 px-3 border border-green-500/30 rounded-full bg-green-500/10 text-green-500 uppercase tracking-[0.15em] text-xs font-bold mb-10">
                    <Shield className="w-3 h-3" />
                    Erros que você evita
                </span>

                <h2 className="mb-16 text-3xl md:text-5xl font-black text-white leading-tight">
                    Ao comprar uma camiseta Azua algodão egípcio, <span className="text-gray-400">você evita:</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-24">
                    {[
                        "Comprar algo que dura 1 mês e começa a desbotar",
                        "Passar o dia ajeitando gola, barra ou manga",
                        "Sentir incômodo depois de algumas horas",
                        "Lavar poucas vezes e perder o caimento",
                        "Precisar trocar antes do esperado",
                        "Errar de novo tentando “uma melhor”"
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center justify-center gap-4 p-8 bg-black/20 rounded-xl border border-white/5 hover:bg-white/5 transition-all hover:-translate-y-1 group">
                            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/30 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                            </div>
                            <span className="text-lg text-gray-200 font-medium leading-tight">{item}</span>
                        </div>
                    ))}
                </div>

                {/* Gallery Integrated */}
                <div className="-mx-6 px-6">
                    {/* Mobile: Horizontal Scroll Snap */}
                    <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-8 scrollbar-hide">
                        {images.map((img, i) => (
                            <div key={i} className="flex-shrink-0 w-[80vw] snap-center">
                                <div className="aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 relative group">
                                    <img
                                        src={img}
                                        alt={`Gallery ${i + 1}`}
                                        className="w-full h-full object-cover animate-slow-zoom"
                                        style={{ animationDelay: `${i * 2}s` }}
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Grid/Flex with Aligned Images */}
                    <div className="hidden md:flex justify-center items-center gap-8">
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                className="w-full max-w-sm"
                            >
                                <div className="aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 relative group hover:shadow-2xl hover:shadow-azua-gold/10 transition-all duration-500">
                                    <img
                                        src={img}
                                        alt={`Gallery ${i + 1}`}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110 animate-slow-zoom"
                                        style={{ animationDelay: `${i * 3}s` }}
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none rounded-2xl group-hover:ring-white/30 transition-all duration-500"></div>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* New CTA Button */}
                <div className="mt-12 flex justify-center w-full px-4 md:px-0 relative z-20">
                    <button
                        onClick={() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })}
                        className="
                            bg-[#0f0f0f]
                            text-white font-bold text-base md:text-lg uppercase tracking-widest 
                            py-4 px-6 md:px-12 rounded border border-white/10
                            hover:bg-black hover:border-azua-gold/40 hover:text-azua-gold
                            transition-all duration-500 ease-out
                            w-full max-w-[320px] md:w-auto md:max-w-none truncate
                            group
                        "
                    >
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:text-azua-gold transition-colors duration-500">
                            Quero Comprar Agora
                        </span>
                    </button>
                </div>


            </div>
        </section>
    )
}
