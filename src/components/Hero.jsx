import { motion } from 'framer-motion'
import heroImg from '../assets/hero_tshirt_v3.png'

export default function Hero() {
    return (
        <>
            <style>{`
                /* Video Background */
                .azua-video-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    opacity: 0.4;
                    mix-blend-mode: luminosity;
                    pointer-events: none;
                    overflow: hidden;
                }
                .azua-video-bg video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .azua-video-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(10, 10, 10, 0.85);
                    z-index: 1;
                }

                /* Hero Wrapper */
                .azua-hero-wrapper {
                    position: relative;
                    min-height: 75vh; /* Further reduced from 85vh */
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    background-color: #0a0a0a;
                    background: linear-gradient(to bottom, #0a0a0a, #0a0a0a, #111111);
                    padding-top: 4rem; /* Further reduced from 5rem */
                    padding-bottom: 2rem;
                    font-family: 'Inter', sans-serif;
                }
                /* Background Blob */
                .azua-blob {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 800px;
                    height: 800px;
                    background-color: rgba(26, 32, 44, 0.2);
                    border-radius: 9999px;
                    filter: blur(120px);
                    pointer-events: none;
                    z-index: 1;
                }
                /* Container */
                .azua-container {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                    align-items: center;
                }
                @media (min-width: 768px) {
                    .azua-container {
                        grid-template-columns: 1fr 1fr;
                        gap: 3rem;
                        text-align: left;
                    }
                }
                /* Text Content */
                .azua-content {
                    text-align: center;
                }
                @media (min-width: 768px) {
                    .azua-content {
                        text-align: left;
                    }
                }
                /* Subtitle */
                .azua-subtitle {
                    color: #d4af37;
                    font-weight: 500;
                    letter-spacing: 0.2em;
                    margin-bottom: 1rem;
                    text-transform: uppercase;
                    font-size: 0.875rem;
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeUp 0.8s ease-out forwards 0.2s;
                }
                /* Title */
                .azua-title {
                    font-size: 3rem;
                    font-weight: 700;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    background: linear-gradient(to right, #ffffff, #9ca3af);
                    -webkit-background-clip: text;
                    color: transparent;
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeUp 0.8s ease-out forwards 0.3s;
                }
                @media (min-width: 768px) {
                    .azua-title {
                        font-size: 4.5rem;
                    }
                }
                /* Paragraph */
                .azua-text {
                    color: #9ca3af;
                    font-size: 1.125rem;
                    line-height: 1.625;
                    margin-bottom: 2rem;
                    max-width: 28rem;
                    margin-left: auto;
                    margin-right: auto;
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeUp 0.8s ease-out forwards 0.4s;
                }
                @media (min-width: 768px) {
                    .azua-text {
                        margin-left: 0;
                        margin-right: 0;
                    }
                }
                /* Butttons */
                .azua-btn-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    justify-content: center;
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeUp 0.8s ease-out forwards 0.5s;
                }
                @media (min-width: 640px) {
                    .azua-btn-wrapper {
                        flex-direction: row;
                    }
                }
                @media (min-width: 768px) {
                    .azua-btn-wrapper {
                        justify-content: flex-start;
                    }
                }
                .azua-btn {
                    padding: 1rem 2rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    border-radius: 0.25rem;
                    cursor: pointer;
                    transition: all 0.3s;
                    text-decoration: none;
                    display: inline-block;
                }
                .azua-btn-primary {
                    background-color: white;
                    color: black;
                    border: 1px solid white;
                }
                .azua-btn-primary:hover {
                    background-color: #e5e7eb;
                }
                .azua-btn-secondary {
                    background-color: transparent;
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                .azua-btn-secondary:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                }
                /* Image Section */
                .azua-image-wrapper {
                    display: flex;
                    justify-content: center;
                    position: relative;
                    margin-top: 1rem;
                }
                @media (min-width: 768px) {
                    .azua-image-wrapper {
                        margin-top: 6rem;
                    }
                }
                /* Decorative Rings */
                .azua-ring {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 9999px;
                    pointer-events: none;
                }
                .azua-ring-1 {
                    width: 120%;
                    height: 120%;
                }
                .azua-ring-2 {
                    width: 150%;
                    height: 150%;
                    opacity: 0.5;
                }
                /* Product Image */
                .azua-product-img {
                    position: relative;
                    z-index: 20;
                    width: 100%;
                    max-width: 28rem;
                    height: auto;
                    opacity: 0;
                    transform: scale(0.8) rotate(-5deg);
                    animation: popIn 0.8s ease-out forwards, float 6s ease-in-out infinite 0.8s;
                    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.15));
                }
                /* Animations */
                @keyframes fadeUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes popIn {
                    to {
                        opacity: 1;
                        transform: scale(1) rotate(0deg);
                    }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>

            <div className="azua-hero-wrapper">
                {/* Video Background */}
                <div className="azua-video-bg">
                    <div className="azua-video-overlay"></div>
                    <video
                        src="https://cdn.shopify.com/videos/c/o/v/4f0750b3cdde4623b751c59d35832de8.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>

                {/* Background Blob */}
                <div className="azua-blob"></div>
                <div className="azua-container">

                    {/* Text Content */}
                    <div className="azua-content">
                        <h1 className="azua-title">Modelagem Refinada <br /> + Algodão Egípcio</h1>
                        <p className="azua-text">
                            Para um toque macio, aparência limpa e durabilidade real: <span className="text-white font-bold">não desbota - não dá bolinhas</span>
                        </p>
                    </div>

                    {/* Image Content */}
                    <div className="azua-image-wrapper">


                        <div className="azua-ring azua-ring-1"></div>
                        <div className="azua-ring azua-ring-2"></div>

                        {/* Floating Problems - Added absolutely positioned elements */}
                        {/* Floating Problems - Added absolutely positioned elements */}
                        {/* Floating Problems - Added absolutely positioned elements */}
                        <div className="absolute inset-x-0 top-0 bottom-0 z-50 pointer-events-none">
                            {/* 1. Top Left */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="absolute top-[10%] left-[2%] md:left-auto md:right-[55%] flex items-center md:gap-0"
                            >
                                <div className="bg-gradient-to-br from-yellow-600/90 to-amber-800/90 backdrop-blur-md border border-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-[10px] md:text-sm text-white font-medium whitespace-nowrap shadow-lg z-10">
                                    Não desbota
                                </div>
                                <div className="hidden md:flex items-center -ml-2 relative z-0">
                                    <div className="w-16 h-[1px] bg-white/30"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]"></div>
                                </div>
                            </motion.div>

                            {/* 2. Top Right */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute top-[20%] right-[2%] md:right-auto md:left-[55%] flex items-center md:gap-0 flex-row-reverse"
                            >
                                <div className="bg-gradient-to-br from-yellow-600/90 to-amber-800/90 backdrop-blur-md border border-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-[10px] md:text-sm text-white font-medium whitespace-nowrap shadow-lg z-10">
                                    Não dá bolinhas
                                </div>
                                <div className="hidden md:flex items-center flex-row-reverse -mr-2 relative z-0">
                                    <div className="w-16 h-[1px] bg-white/30"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]"></div>
                                </div>
                            </motion.div>

                            {/* 3. Bottom Left */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.0 }}
                                className="absolute bottom-[25%] left-[5%] md:left-auto md:right-[52%] flex items-center md:gap-0"
                            >
                                <div className="bg-gradient-to-br from-yellow-600/90 to-amber-800/90 backdrop-blur-md border border-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-[10px] md:text-sm text-white font-medium whitespace-nowrap shadow-lg z-10">
                                    Toque macio premium
                                </div>
                                <div className="hidden md:flex items-center -ml-2 relative z-0">
                                    <div className="w-12 h-[1px] bg-white/30"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]"></div>
                                </div>
                            </motion.div>

                            {/* 4. Bottom Right */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2 }}
                                className="absolute bottom-[40%] right-[5%] md:right-auto md:left-[48%] flex items-center md:gap-0 flex-row-reverse"
                            >
                                <div className="bg-gradient-to-br from-yellow-600/90 to-amber-800/90 backdrop-blur-md border border-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-[10px] md:text-sm text-white font-medium whitespace-nowrap shadow-lg z-10">
                                    Caimento elegante
                                </div>
                                <div className="hidden md:flex items-center flex-row-reverse -mr-2 relative z-0">
                                    <div className="w-12 h-[1px] bg-white/30"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]"></div>
                                </div>
                            </motion.div>
                        </div>

                        <img
                            src={heroImg}
                            alt="Camiseta Premium Azua - Algodão Egípcio e Modelagem Slim"
                            className="azua-product-img relative z-20"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
