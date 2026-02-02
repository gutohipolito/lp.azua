import { ArrowRight, Ruler, Palette } from 'lucide-react'

export default function BlockTransition() {
    return (
        <section className="py-16 md:py-24 px-6 bg-level-6 text-white border-t border-white/5 relative">
            <div className="max-w-4xl mx-auto space-y-12 text-center">

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Size Block */}
                    <div className="bg-black/20 p-10 rounded-2xl border border-white/5 flex flex-col items-center shadow-lg hover:bg-black/30 transition-all">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/5">
                            <Ruler className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Tamanho</h3>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Escolha o tamanho que já usa.<br />
                            <span className="text-azua-gold font-bold">Modelagem fiel.</span>
                        </p>
                    </div>

                    {/* Color Block */}
                    <div className="bg-black/20 p-10 rounded-2xl border border-white/5 flex flex-col items-center shadow-lg hover:bg-black/30 transition-all">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/5">
                            <Palette className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Cores</h3>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Cores neutras para um visual limpo.<br />
                            <span className="text-azua-gold font-bold">Clássicas. Discretas.</span>
                        </p>
                    </div>
                </div>



            </div>
        </section>
    )
}
