import { ShieldCheck, Truck, RotateCcw, Package, ArrowRight } from 'lucide-react'
import isotipo from '../../assets/isotipo.jpg'
import secureImg from '../../assets/security_image_v2.jpg'

export default function BlockSecurity() {
    return (
        <section className="py-24 px-6 bg-level-6 text-white relative min-h-[60vh] flex items-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Header (Top) */}
                <div className="mb-16 text-center md:text-left">
                    <span className="inline-block py-1 px-3 border border-blue-500/30 rounded-full bg-blue-900/10 text-blue-400 uppercase tracking-[0.15em] text-xs font-bold mb-8">
                        Segurança de compra
                    </span>

                    <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-white max-w-4xl">
                        Já comprou camiseta que parecia boa e decepcionou?
                    </h2>
                    <p className="text-gray-400 text-lg md:max-w-xl mb-2">
                        Aqui é diferente: <strong className="text-blue-400">30 dias de garantia ou seu dinheiro de volta.</strong>
                    </p>
                    <div className="mt-6 inline-flex flex-col md:flex-row items-start md:items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Passo a passo:</span>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <span>Compre</span>
                            <ArrowRight className="w-3 h-3 text-gray-600" />
                            <span>Prove</span>
                            <ArrowRight className="w-3 h-3 text-gray-600" />
                            <span className="text-white font-medium">Troque ou reembolse</span>
                        </div>
                    </div>
                </div>

                {/* Grid with items-stretch for Equal Height */}
                <div className="grid md:grid-cols-2 gap-16 items-stretch">

                    {/* Left Column: List (Desktop Order 1) used to stretch */}
                    <div className="order-2 md:order-1 flex flex-col justify-between h-full min-h-[500px]">
                        {[
                            { icon: RotateCcw, title: "Troca Facilitada", desc: "Se não servir, trocamos sem custo algum para você." },
                            { icon: Truck, title: "Entrega Rastreável", desc: "Receba atualizações a cada etapa do caminho." },
                            { icon: ShieldCheck, title: "Compra Garantida", desc: "Satisfação total ou devolução imediata do valor." }
                        ].map((item, i) => (
                            <div key={i} className="flex-1 flex items-center gap-6 p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all hover:border-blue-500/30 group mb-6 last:mb-0 relative overflow-hidden">
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors shadow-inner relative z-10">
                                    <item.icon className="w-8 h-8 text-blue-400" />
                                </div>
                                <div className="text-left relative z-10">
                                    <h3 className="font-bold text-white text-xl mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Image (Desktop Order 2) */}
                    <div className="w-full relative order-1 md:order-2 h-full flex flex-col">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group h-full w-full min-h-[500px]">

                            {/* Image forced to cover full height */}
                            <img
                                src={secureImg}
                                alt="Experiência de Recebimento"
                                className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90" />

                            {/* Badge */}
                            <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-lg transform translate-y-0 transition-transform hover:scale-[1.02]">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <Package className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-base">Primeira Troca</p>
                                            <p className="text-sm text-gray-400">Rápida, fácil e totalmente grátis.</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Risco</p>
                                        <p className="text-2xl font-black text-white">0%</p>
                                    </div>
                                </div>
                                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                    <div className="w-full h-full bg-green-500 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}
