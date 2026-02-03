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
                </div>

                {/* Static Contact Info for Google Ads Compliance */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-sm text-gray-400 text-center">
                    <div>
                        <span className="block text-gray-600 text-xs uppercase tracking-wider mb-1">Endereço</span>
                        <p>Rua Faustino Gomes 148, Centro<br />Farroupilha - RS</p>
                    </div>
                    <div>
                        <span className="block text-gray-600 text-xs uppercase tracking-wider mb-1">Contato</span>
                        <p className="flex flex-col gap-1">
                            <a href="mailto:contato@azua.com.br" className="hover:text-white transition-colors">contato@azua.com.br</a>
                            <a href="tel:+5554997074695" className="hover:text-white transition-colors">(54) 99707-4695</a>
                        </p>
                    </div>
                    <div>
                        <span className="block text-gray-600 text-xs uppercase tracking-wider mb-1">Horário</span>
                        <p>Segunda à Sexta<br />09:00 às 18:00</p>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-xs uppercase tracking-wider">
                    <p>Copyright © 2026 Malhas e Confeccoes Clajofar LTDA - CNPJ: 90.241.753/0001-81. Todos os direitos reservados</p>
                </div>
            </div>
        </footer>
    )
}
