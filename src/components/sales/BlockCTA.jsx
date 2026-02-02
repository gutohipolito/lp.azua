import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

import imgSlim from '../../assets/cta_slim_v2.jpg'
import imgTradicional from '../../assets/cta_tradicional_v2.jpg'
import { trackInitiateCheckout } from '../../utils/analytics'

export default function BlockCTA() {
    return (
        <section id="products-section" className="pt-0 pb-24 px-6 bg-level-6 text-white text-center relative overflow-hidden">
            {/* Background glow effect - Subtle Gold */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-azua-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                <div className="max-w-3xl mx-auto mb-16 pt-12 md:pt-0">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-500 uppercase tracking-widest">
                        Se você se viu nos problemas acima:
                    </h2>
                    <p className="text-3xl md:text-5xl font-black text-white leading-none mt-4 tracking-tight">
                        Pare de gastar com o básico que não funciona.
                    </p>
                </div>

                {/* Product Grid - 2 Variations Uniform: Slim, Tradicional */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
                    {[
                        {
                            label: "Slim",
                            desc: "Ajuste moderno ao corpo",
                            color: "text-azua-gold",
                            link: "https://azua.com.br/collections/camiseta-premium/products/camiseta-manga-curta-algodao-egipcio-slim",
                            image: imgSlim
                        },
                        {
                            label: "Tradicional",
                            desc: "Corte clássico e reto",
                            color: "text-gray-300",
                            link: "https://azua.com.br/collections/camiseta-premium/products/camiseta-manga-curta-algodao-egipcio-tradicional",
                            image: imgTradicional
                        }
                    ].map((model, i) => (
                        <div key={i} className="relative flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-azua-gold/30 transition-all hover:-translate-y-2 duration-300 group">

                            {/* Product Image */}
                            <div className="aspect-[3/4] bg-black/40 relative overflow-hidden">
                                <img
                                    src={model.image}
                                    alt={`Camiseta Algodão Egípcio ${model.label}`}
                                    className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Info & Action Section - Moved Text Here */}
                            <div className="p-8 bg-white/5 border-t border-white/5 mt-auto text-left flex flex-col gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 whitespace-nowrap">
                                        Algodão Egípcio <span className={model.color}>{model.label}</span>
                                    </h3>
                                    <p className="text-gray-400 text-lg">{model.desc}</p>
                                </div>

                                <a href={model.link} className="block w-full mt-auto" onClick={trackInitiateCheckout}>
                                    <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider rounded-lg hover:bg-azua-gold transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                        <span>Escolher Opções</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA Button (Global) */}
                <div className="max-w-md mx-auto">
                    <a href="https://azua.com.br/collections/camiseta-premium" className="block w-full" onClick={trackInitiateCheckout}>
                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="group relative w-full py-5 bg-transparent border border-white/20 text-white font-bold text-lg uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-all overflow-hidden"
                        >
                            <div className="relative z-10 flex items-center justify-center gap-3">
                                <span>Ver todas opções</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform group-hover:text-black" />
                            </div>
                        </motion.button>
                    </a>

                    <div className="mt-8 flex items-center justify-center gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest border-t border-white/5 pt-6">
                        <span className="flex items-center gap-1.5"><Check className="w-3 h-3 stroke-[3] text-green-500" /> Compra Segura</span>
                        <span className="flex items-center gap-1.5"><Check className="w-3 h-3 stroke-[3] text-green-500" /> Troca Grátis</span>
                        <span className="flex items-center gap-1.5"><Check className="w-3 h-3 stroke-[3] text-green-500" /> Envio Rápido</span>
                    </div>
                </div>

            </div>
        </section>
    )
}
