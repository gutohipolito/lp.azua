import { motion } from 'framer-motion'
import { AlertTriangle, XCircle, ArrowDown } from 'lucide-react'

// Typewriter component for the hook
const TypewriterText = ({ text, delay = 0 }) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            }
        }
    };

    return (
        <motion.h2
            className="text-4xl md:text-6xl font-black mb-12 leading-[1.1] tracking-tight"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.h2>
    );
};

// ... imports remain same ...

export default function BlockSituation() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-azua-dark text-white">

            {/* Background Gradient (Matches Elementor/Hero) */}
            <div className="absolute inset-0 bg-gradient-to-b from-azua-dark via-azua-dark to-azua-card pointer-events-none z-0" />

            {/* Original Video Background - Kept as requested by "content logic" but adapted to container */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-40 mix-blend-luminosity">
                <div className="absolute inset-0 bg-azua-dark/90 z-10" />
                <video
                    src="https://cdn.shopify.com/videos/c/o/v/4f0750b3cdde4623b751c59d35832de8.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://lp.azua.com.br/hero_tshirt_v3.png" // Using the main product URL as poster
                />
            </div>

            {/* Background Blob (Matches Elementor) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-azua-blue/20 rounded-full blur-[120px] pointer-events-none z-0" />


            {/* Main Container - Grid for Desktop */}
            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl">

                {/* Left Column: The "Header" / Hook Content */}
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                    <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "auto" }}
                        viewport={{ once: true }}
                        className="inline-block whitespace-nowrap overflow-hidden py-1 px-3 border border-azua-gold/30 rounded-full bg-azua-gold/5 text-azua-gold uppercase tracking-[0.15em] text-[10px] font-bold mb-6"
                    >
                        Situação Vivida
                    </motion.span>

                    <div className="mb-0">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-500 font-light mb-0"
                        >
                            Você já
                        </motion.p>
                        <div className="-mt-1">
                            <TypewriterText text="viveu isso?" delay={0.3} />
                        </div>
                    </div>

                    {/* Moved Conclusion here for Desktop Balance? Or keep naturally flowing? 
                        User said "Two Frames". Left Frame = Introduction. Right Frame = The Card/Visuals.
                        Let's keep the "Truth" card on the left to balance the heavy visuals on right?
                        Actually, logical flow is: Hook -> Expectation -> Reality -> Truth.
                        If we split left/right:
                        Left: Hook ("Você já viveu isso?") + Conclusion ("A verdade é que...")
                        Right: The Expectation/Reality Visual Flow.
                     */}

                    {/* Desktop-only Conclusion placement for better balance (Optional, but commonly good for 50/50) 
                         For now, let's keep the content flow somewhat linear but split.
                         Let's put the "Truth" card here on the left for Desktop, so the Right side is purely the "Problem Demonstration".
                     */}
                    <div className="hidden md:block mt-12 w-full max-w-md">
                        <div className="bg-gradient-to-br from-azua-card to-black border border-azua-gold/30 rounded-xl p-6 relative overflow-hidden shadow-2xl">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-azua-gold/10 rounded-full blur-2xl" />
                            <div className="flex flex-col items-start gap-4 relative z-10">
                                <div className="space-y-1">
                                    <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">A verdade é que</p>
                                    <p className="text-lg text-white font-light leading-tight">
                                        O erro não está na loja.
                                    </p>
                                    <p className="text-2xl text-azua-gold font-black tracking-tight pt-3 mt-1">
                                        ESTÁ NA ROTINA.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: The Visual Narrative (Cards) */}
                <div className="relative mt-8 md:mt-0 w-full max-w-md mx-auto">
                    {/* Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

                    <div className="space-y-6 relative z-10">
                        {/* 1. Expectation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-azua-card border border-white/5 rounded-xl p-6 text-center shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-azua-gold/50 to-transparent opacity-50" />
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Expectativa</p>
                            <div className="bg-black/40 rounded-lg p-4 border border-white/5">
                                <p className="text-gray-400 font-light italic text-sm mb-1">No cabide...</p>
                                <p className="text-xl text-white font-medium">A camiseta parece perfeita.</p>
                            </div>
                        </motion.div>

                        {/* Arrow */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="flex justify-center -my-2 relative z-20"
                        >
                            <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                                <ArrowDown className="w-3 h-3" />
                            </div>
                        </motion.div>

                        {/* 2. Reality */}
                        <div className="space-y-3">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }} // Came from right on desktop? No, keep subtle.
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9 }}
                                className="flex items-center gap-3 bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg shadow-[0_0_30px_-10px_rgba(239,68,68,0.3)]"
                            >
                                <XCircle className="w-6 h-6 text-red-500 shrink-0 fill-red-500/10" />
                                <span className="text-lg text-white font-bold text-left leading-tight">No corpo, <span className="text-red-400">não funciona.</span></span>
                            </motion.div>

                            <div className="grid gap-2 pl-4">
                                {["Sobra onde não devia", "Repuxa ao se mover", "Incomoda em poucas horas"].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.1 + (i * 0.1) }}
                                        className="flex items-center gap-3 text-left"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,1)]" />
                                        <span className="text-gray-300 text-base font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 3. The Frustration */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.5 }}
                            className="py-4 border-t border-b border-white/5 text-center"
                        >
                            <p className="text-lg leading-tight">
                                <span className="text-gray-400">Você paga mais.</span> <span className="text-white font-bold ml-1">E nada muda.</span>
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile-Only Conclusion (Hidden on Desktop) */}
                <div className="md:hidden mt-8 mx-auto w-full max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.7 }}
                        className="bg-gradient-to-br from-azua-card to-black border border-azua-gold/30 rounded-xl p-6 relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-azua-gold/10 rounded-full blur-2xl" />
                        <div className="flex flex-col items-center gap-3 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-azua-gold/10 flex items-center justify-center border border-azua-gold/20 shadow-[0_0_15px_-5px_#d4af37]">
                                <AlertTriangle className="w-5 h-5 text-azua-gold" />
                            </div>
                            <div className="space-y-1 text-center">
                                <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">A verdade é que</p>
                                <p className="text-lg text-white font-light leading-tight">
                                    O erro não está na loja.
                                </p>
                                <p className="text-2xl text-azua-gold font-black tracking-tight pt-3 mt-1">
                                    ESTÁ NA ROTINA.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
