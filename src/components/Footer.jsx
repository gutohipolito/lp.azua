import { useState } from 'react'
import { Instagram, Facebook, Twitter } from 'lucide-react'
import ContactModal from './ContactModal'

export default function Footer() {
    const [isContactOpen, setIsContactOpen] = useState(false)

    return (
        <footer className="bg-azua-card pt-16 pb-8 border-t border-white/5 text-white">
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0892/6193/2854/files/Logo_Azua_branco.png"
                        alt="Azua Logo"
                        className="w-24 mb-6"
                    />
                    <p className="max-w-2xl text-lg font-medium bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                        A essência da sofisticação e a força da inovação. <br className="hidden md:block" />
                        Bem-vindo à nova era da moda minimalista. Um movimento que une design, tecnologia e qualidade.
                    </p>
                </div>

                {/* Legal & Links */}
                <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-400 font-medium">
                    <a href="https://azua.com.br/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-azua-gold transition-colors">Política de Privacidade</a>
                    <a href="https://azua.com.br/policies/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-azua-gold transition-colors">Termos de Uso</a>
                    <a href="https://azua.com.br/pages/sobre-a-zua" target="_blank" rel="noopener noreferrer" className="hover:text-azua-gold transition-colors">Sobre Nós</a>
                    <a href="https://azua.com.br/policies/legal-notice" target="_blank" rel="noopener noreferrer" className="hover:text-azua-gold transition-colors">Aviso Legal</a>
                    <button onClick={() => setIsContactOpen(true)} className="hover:text-azua-gold transition-colors">Contato</button>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-xs uppercase tracking-wider">
                    <p>Copyright © 2026 Malhas e Confeccoes Clajofar LTDA - CNPJ: 90.241.753/0001-81. Todos os direitos reservados</p>
                </div>
            </div>
        </footer>
    )
}
