import { motion } from 'framer-motion'

export default function CTA() {
    return (
        <section className="py-24 bg-gradient-to-t from-azua-blue to-black text-center relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-azua-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    Eleve seu estilo.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
                >
                    Experimente o conforto e a sofisticação que só a Azua oferece. Satisfação garantida ou seu dinheiro de volta.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-azua-gold text-black font-bold text-lg uppercase tracking-wide rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all"
                >
                    Quero minha Azua
                </motion.button>
            </div>
        </section>
    )
}
