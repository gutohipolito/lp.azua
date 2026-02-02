import { MapPin, HeartHandshake } from 'lucide-react'

export default function BlockManifesto() {
    return (
        <section className="py-24 px-6 bg-level-5 text-white relative">
            <div className="container mx-auto max-w-4xl">

                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Sobre AZUA */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                            <MapPin className="w-6 h-6 text-azua-gold" />
                            <h3 className="text-xl font-bold uppercase tracking-wider text-white">Sobre Azua</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg font-light text-justify">
                            A Marca nasceu no coração do setor têxtil, na cidade de <strong className="text-white font-normal">Farroupilha no Rio Grande do Sul</strong>. Azua é o reflexo de nossa evolução, unindo décadas de experiência no setor têxtil a um propósito claro: oferecer peças funcionais e minimalistas que acompanhem o ritmo de um estilo de vida moderno. Mais do que roupas, criamos soluções que unem praticidade, conforto e elegância atemporal.
                        </p>
                    </div>

                    {/* Nosso Compromisso */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                            <HeartHandshake className="w-6 h-6 text-azua-gold" />
                            <h3 className="text-xl font-bold uppercase tracking-wider text-white">Nosso Compromisso</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg font-light text-justify">
                            Azua é mais do que uma marca de roupas: é a escolha perfeita para quem busca praticidade sem abrir mão do estilo. Cada peça reflete autenticidade, funcionalidade e o compromisso de atender às demandas do dia a dia com elegância e conforto.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}
