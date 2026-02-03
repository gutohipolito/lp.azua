import { Target, Lightbulb, Star, ArrowRight } from 'lucide-react'
import aboutImg from '../../assets/about_building.jpg'

export default function BlockAbout() {
    return (
        <section className="py-24 px-6 bg-level-6 text-white relative flex flex-col justify-center overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-azua-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl">

                {/* Top Section: Split Text (Left) and Image (Right) - Equal Height */}
                <div className="grid md:grid-cols-2 gap-0 mb-20 border border-white/10 rounded-3xl overflow-hidden bg-black/20">

                    {/* Left: History Text */}
                    <div className="p-10 md:p-16 flex flex-col justify-center relative group items-center md:items-start text-center md:text-left">
                        <div className="absolute inset-0 bg-level-5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                        <span className="text-azua-gold font-bold tracking-[0.2em] text-sm uppercase mb-6 block relative z-10">Sobre Nós</span>
                        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8 text-white relative z-10">
                            Uma história de <br className="hidden md:block" />
                            <span className="text-gray-500">evolução.</span>
                        </h2>
                        <div className="text-gray-300 leading-relaxed font-light space-y-6 text-lg relative z-10">
                            <p>
                                Fundada em 1985, nossa empresa nasceu no coração do setor têxtil com o compromisso de produzir tecidos de altíssima qualidade. Ao longo de quase quatro décadas, nos tornamos referência no mercado, atingindo uma produção mensal de 110 mil quilos de tecidos, sempre guiados pela inovação e excelência.
                            </p>
                            <p>
                                Agora, em 2025, iniciamos um novo capítulo de nossa história ao lançar a Azua, nossa marca própria de roupas masculinas.
                            </p>
                            <p className="border-l-2 border-azua-gold pl-6 italic text-white/80 font-normal">
                                "Azua é o reflexo de nossa evolução, unindo décadas de experiência no setor têxtil a um propósito claro: oferecer peças funcionais e minimalistas que acompanhem o ritmo de um estilo de vida moderno."
                            </p>
                        </div>
                    </div>

                    {/* Right: Image (Full Height Cover) */}
                    <div className="relative min-h-[500px] md:min-h-0 h-full">
                        <img
                            src={aboutImg}
                            alt="Edifício Azua 1985 - Tradição Têxtil"
                            className="absolute inset-0 w-full h-full object-cover grayscale md:grayscale-0 hover:grayscale-0 transition-all duration-700"
                            loading="lazy"
                            width="800"
                            height="600"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <p className="text-white font-bold text-2xl mb-1">Tradição Têxtil</p>
                            <div className="h-1 w-12 bg-azua-gold"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: 3 Cards (Purpose, Vision, Why Azua) */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* Card 1: Purpose */}
                    <div className="bg-level-5/50 border border-white/5 p-10 rounded-3xl hover:bg-level-5 transition-all duration-300 group hover:-translate-y-2 text-center md:text-left">
                        <div className="w-12 h-12 bg-azua-gold/10 rounded-2xl flex items-center justify-center mb-8 text-azua-gold group-hover:scale-110 transition-transform mx-auto md:mx-0">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Nosso Propósito</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Nossa missão é oferecer roupas de alta qualidade a preços justos, com uma ampla variedade de tamanhos e um design focado na funcionalidade e na simplicidade. Queremos vestir nossos clientes com peças que entreguem mais do que estilo: utilidade e conforto para o dia a dia.
                        </p>
                    </div>

                    {/* Card 2: Vision */}
                    <div className="bg-level-5/50 border border-white/5 p-10 rounded-3xl hover:bg-level-5 transition-all duration-300 group hover:-translate-y-2 text-center md:text-left">
                        <div className="w-12 h-12 bg-azua-gold/10 rounded-2xl flex items-center justify-center mb-8 text-azua-gold group-hover:scale-110 transition-transform mx-auto md:mx-0">
                            <Lightbulb className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Nossa Visão</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Sonhamos com um futuro onde a moda seja prática, versátil e capaz de atender às necessidades do dia a dia. Queremos liderar o mercado de moda minimalista, sendo reconhecidos pela inovação, funcionalidade, qualidade e inclusão.
                        </p>
                    </div>

                    {/* Card 3: Why Azua */}
                    <div className="bg-gradient-to-br from-azua-gold/10 to-level-5/50 border border-azua-gold/20 p-10 rounded-3xl hover:border-azua-gold/40 transition-all duration-300 group relative overflow-hidden hover:-translate-y-2 text-center md:text-left">
                        <div className="absolute top-0 right-0 bg-azua-gold/10 w-32 h-32 rounded-bl-full -mr-10 -mt-10 blur-2xl"></div>

                        <div className="w-12 h-12 bg-azua-gold/20 rounded-2xl flex items-center justify-center mb-8 text-azua-gold group-hover:scale-110 transition-transform mx-auto md:mx-0">
                            <Star className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Por que Azua?</h3>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            Azua é mais do que uma marca de roupas: é a escolha perfeita para quem busca praticidade sem abrir mão do estilo. Cada peça reflete autenticidade e funcionalidade.
                        </p>
                        <p className="text-azua-gold font-bold uppercase tracking-wider text-xl mt-4">
                            Escolha Azua.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}
