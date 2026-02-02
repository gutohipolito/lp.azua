import { motion } from 'framer-motion'

export default function Comparison() {
    return (
        <section className="py-24 bg-azua-card text-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <span className="text-azua-gold font-medium tracking-widest uppercase text-sm">Comparativo</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 leading-tight">
                            Por que Azua é superior?
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Enquanto o algodão comum perde qualidade nas primeiras lavagens, nossas fibras extra-longas garantem que sua peça continue nova, macia e estruturada por anos.
                        </p>

                        <div className="space-y-8">
                            {/* Comparison Item 1 */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-gray-300">Algodão Comum</span>
                                    <span className="text-gray-500">Básico</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "40%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: 0.2 }}
                                        className="h-full bg-gray-500 rounded-full"
                                    />
                                </div>
                            </div>

                            {/* Comparison Item 2 */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-white">Azua Premium</span>
                                    <span className="text-azua-gold font-bold">Superior</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: 0.4 }}
                                        className="h-full bg-azua-gold rounded-full relative"
                                    >
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-azua-gold/20 to-transparent blur-2xl rounded-full opacity-30" />
                        <div className="bg-black/50 border border-white/10 p-8 rounded-2xl relative backdrop-blur-md">
                            <h3 className="text-xl font-bold mb-6">O que esperar:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Não desbota com o sol",
                                    "Não encolhe na lavagem",
                                    "Costuras reforçadas",
                                    "Caimento de alfaiataria"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + (i * 0.1) }}
                                        className="flex items-center gap-3 text-gray-300"
                                    >
                                        <div className="w-2 h-2 bg-azua-gold rounded-full" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
