import { motion } from 'framer-motion'
import { ShoppingBag, Menu } from 'lucide-react'
import logoImg from '../assets/azua_logo_black.png'

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-0 left-0 w-full z-[100] py-4 flex justify-center items-center backdrop-blur-md bg-black/20 border-b border-white/5"
        >
            <img
                src="https://cdn.shopify.com/s/files/1/0892/6193/2854/files/Logo_Azua_branco.png"
                alt="AZUA"
                className="w-24 md:w-32 opacity-90 drop-shadow-md"
            />
        </motion.header>
    )
}
