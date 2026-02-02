import Header from './components/Header'
import Hero from './components/Hero'

import BlockSolution from './components/sales/BlockSolution'
import BlockBenefits from './components/sales/BlockBenefits'
import BlockProof from './components/sales/BlockProof'
import BlockAbout from './components/sales/BlockAbout'
import BlockManifesto from './components/sales/BlockManifesto'
import BlockSecurity from './components/sales/BlockSecurity'
import BlockTransition from './components/sales/BlockTransition'
import BlockCTA from './components/sales/BlockCTA'
import Footer from './components/Footer' // Keeping Footer as is, assuming it's generic enough

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-azua-gold selection:text-black">
      {/* 
         Structure:
         1. Hero (O Básico Reinventado)
         2. Por Que O Erro Acontece (BlockProblem) - keeping flow for now
         ...
      */}

      <Header />
      <Hero />


      <BlockSolution />
      <BlockBenefits />
      <BlockProof />
      <BlockSecurity />
      <BlockTransition />
      <BlockCTA />

      <BlockAbout />
      <BlockManifesto />

      <Footer />
    </div>
  )
}
export default App
