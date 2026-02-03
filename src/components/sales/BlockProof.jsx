import { Play, Check, Search } from 'lucide-react'

export default function BlockProof() {
    return (
        <section className="py-12 md:py-16 px-6 bg-level-5 text-white relative flex flex-col justify-center overflow-hidden">

            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-azua-gold/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Content Gradient Connector (Bottom) - Extended for smoothness */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-b from-transparent to-level-6 pointer-events-none z-0" />

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Top Section: Title (Left) + Video (Right) */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-10">

                    {/* Left: Header */}
                    <div className="text-center md:text-left">
                        <span className="inline-flex items-center gap-2 py-1 px-3 border border-azua-gold/30 rounded-full bg-azua-gold/10 text-azua-gold uppercase tracking-[0.15em] text-xs font-bold mb-8 mx-auto md:mx-0">
                            <Search className="w-3 h-3" />
                            Prova no uso real
                        </span>
                        <div className="max-w-xl mx-auto md:mx-0">
                            <p className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                                Chega de camiseta que desbota e fica com bolinhas.
                            </p>
                            <p className="text-lg md:text-2xl font-light text-gray-300 leading-relaxed">
                                Algodão egípcio com sensação premium: macia, caimento alinhado e durável. <br className="hidden md:block" />
                                A camiseta básica que se adapta perfeitamente a um look social, garantindo um estilo refinado.
                            </p>
                        </div>
                    </div>

                    {/* Right: Video */}
                    <div className="relative w-full h-[450px] md:h-[500px]">
                        <div className="rounded-xl overflow-hidden bg-black relative border border-white/10 shadow-2xl w-full h-full">
                            <video
                                src="https://lp.azua.com.br/midia/video-section.mp4"
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                            />
                            <div className="absolute bottom-8 left-0 right-0 text-center z-20 pointer-events-none">
                                <p className="text-sm font-bold uppercase tracking-widest text-white drop-shadow-md bg-black/40 inline-block px-4 py-1 rounded-full backdrop-blur-md">CAIMENTO QUE VALORIZA O CORPO</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Cards */}
                <div className="flex flex-col items-center">
                    <p className="text-azua-gold font-bold mb-8 text-sm uppercase tracking-widest">Repare em três coisas:</p>
                    <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
                        {[
                            "Não sobra tecido.",
                            "Não repuxa no corpo.",
                            "Se mantém ao longo do dia."
                        ].map((text, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors text-center">
                                <div className="w-10 h-10 rounded-full bg-azua-gold/20 flex items-center justify-center shrink-0">
                                    <Check className="w-5 h-5 text-azua-gold stroke-[3]" />
                                </div>
                                <span className="text-lg font-medium text-gray-200">{text}</span>
                            </div>
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
