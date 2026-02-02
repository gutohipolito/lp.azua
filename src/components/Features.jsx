import { motion } from 'framer-motion'
import { Wind, ShieldCheck, Zap } from 'lucide-react'
import fabricTx from '../assets/fabric_texture.png'

const features = [
    {
        icon: Wind,
        title: "Respirabilidade",
        description: "Fibras longas que permitem que o corpo respire naturalmente, evitando odores e suor excessivo."
    },
    {
        icon: ShieldCheck,
        title: "Durabilidade Extrema",
        description: "Resistente a desbotamento e deformações. Sua camiseta nova por muito mais tempo."
    },
    {
        icon: Zap,
        title: "Toque Gelado",
        description: "Conforto térmico incomparável que se adapta à temperatura do seu corpo."
    }
]

export default function Features() {
    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Background Texture with Overlay */}
            <div className="absolute inset-0 opacity-20">
                <img
                    src={fabricTx}
                    alt="Textura Algodão"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-azua-gold font-medium tracking-widest uppercase text-sm block mb-4"
                    >
                        Tecnologia Têxtil
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Mais que uma camiseta. <br /> Uma experiência.
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.3 }}
                            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm"
                        >
                            <div className="w-12 h-12 bg-azua-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon className="text-azua-gold w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
