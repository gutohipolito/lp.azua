import { X, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactModal({ isOpen, onClose }) {
    if (!isOpen) return null

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-[#0f0f0f] border border-white/10 p-8 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
                    >
                        <X size={20} />
                    </button>

                    <h2 className="text-2xl font-bold text-white mb-8 text-center uppercase tracking-wider">
                        Entre em Contato
                    </h2>

                    <div className="space-y-8">
                        {/* Contact Info */}
                        <div className="space-y-4">

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-azua-gold/10 rounded-lg shrink-0">
                                    <Phone className="w-5 h-5 text-azua-gold" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Telefone / WhatsApp</h3>
                                    <a href="tel:+5554997074695" className="text-white hover:text-azua-gold transition-colors block">
                                        (54) 99707-4695
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-azua-gold/10 rounded-lg shrink-0">
                                    <Mail className="w-5 h-5 text-azua-gold" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">E-mail</h3>
                                    <a href="mailto:contato@azua.com.br" className="text-white hover:text-azua-gold transition-colors block">
                                        contato@azua.com.br
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-azua-gold/10 rounded-lg shrink-0">
                                    <MapPin className="w-5 h-5 text-azua-gold" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Endereço</h3>
                                    <p className="text-white leading-relaxed">
                                        Rua Faustino Gomes 148, Centro<br />
                                        Farroupilha - RS
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-azua-gold/10 rounded-lg shrink-0">
                                    <Clock className="w-5 h-5 text-azua-gold" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Horário de Funcionamento</h3>
                                    <p className="text-white leading-relaxed">
                                        Segunda à Sexta-Feira<br />
                                        Das 09:00 às 18:00
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
