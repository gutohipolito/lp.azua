import { motion } from 'framer-motion'
import productImg from '../assets/new_tshirt.png'

const products = [
    { name: "Algodão Egípcio Verão", color: "bg-black", hue: "hue-rotate-0" },
    { name: "Algodão Egípcio Slim", color: "bg-gray-800", hue: "grayscale brightness-[2.5]" }, // Simulated Grey
    { name: "Algodão Egípcio Tradicional", color: "bg-white", hue: "grayscale invert" } // Simulated White
]

export default function ProductShowcase() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                <div>
                    <span className="text-azua-gold font-medium tracking-widest uppercase text-sm">Coleção</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Modelos Disponíveis</h2>
                </div>
                <button className="hidden md:block text-white border-b border-white hover:border-azua-gold hover:text-azua-gold transition-colors pb-1">
                    Ver Tabela de Medidas
                </button>
            </div>

            {/* Carousel Container */}
            <div className="w-full overflow-x-auto pb-12 hide-scrollbar">
                <div className="flex gap-8 px-6 md:px-12 w-max">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative w-[300px] md:w-[400px] h-[500px] rounded-2xl bg-azua-card overflow-hidden group border border-white/5"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />

                            {/* Product Image with Filter for Color Var */}
                            <img
                                src={productImg}
                                alt={product.name}
                                className={`w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ${product.hue}`}
                            />

                            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                                <p className="text-gray-400 text-sm mb-6">Algodão Egípcio Premium</p>
                                <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-wide hover:bg-azua-gold transition-colors">
                                    Adicionar ao Carrinho
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
