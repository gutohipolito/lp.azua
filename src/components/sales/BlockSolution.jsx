import { Play, Check, Sparkles } from 'lucide-react'

export default function BlockSolution() {
    return (
        <section className="py-10 px-6 bg-level-3 text-white overflow-hidden relative min-h-[60vh] md:min-h-screen flex items-center">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-azua-gold/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">

                {/* Left Column: Benefits & Text (Desktop) */}
                <div className="max-w-lg mx-auto md:mx-0 text-center md:text-left order-1">
                    <span className="inline-flex items-center gap-2 py-1 px-3 border border-azua-gold/30 rounded-full bg-azua-gold/5 text-azua-gold uppercase tracking-[0.15em] text-[10px] font-bold mb-8">
                        <Sparkles className="w-3 h-3" />
                        melhor que camisetas comuns
                    </span>

                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
                        Não desbota. <br />
                        Não dá bolinhas. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-azua-gold to-white">E fica elegante com alfaiataria.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 font-light mb-8 max-w-md">
                        Algodão egípcio com toque macio e caimento alinhado, a básica que entra no look social
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                        {[
                            "Você para de ajustar.",
                            "Não sente vontade de trocar.",
                            "Não perde atenção com a roupa.",
                            "O dia flui melhor."
                        ].map((item, i) => (
                            <div key={i} className="group bg-white/5 border border-white/5 hover:border-azua-gold/50 rounded-lg p-3 transition-all flex flex-col items-center justify-center gap-2 text-center h-full">
                                <div className="w-6 h-6 rounded-full bg-azua-gold flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                                    <Check className="w-3 h-3 text-black stroke-[4]" />
                                </div>
                                <span className="text-sm text-gray-200 font-medium leading-tight">{item}</span>
                            </div>
                        ))}
                    </div>


                </div>

                {/* Right Column: Video (Desktop) */}
                <div className="relative mx-auto max-w-sm md:max-w-full group cursor-pointer w-full order-2">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-azua-gold to-white opacity-20 group-hover:opacity-40 rounded-2xl blur transition duration-500" />
                    <div className="relative rounded-lg overflow-hidden bg-black aspect-video border border-white/10 shadow-2xl">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/VCD0o7RlT_M?si=azua-landing"
                            title="Camiseta Azua em movimento"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

            </div>
        </section>
    )
}
