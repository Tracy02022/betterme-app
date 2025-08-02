'use client'

import FloatingMakeup from '@/components/FloatingMakeup'
import { motion } from 'framer-motion'

export default function WelcomePage() {
  return (
     <div className="relative min-h-screen" style={{ backgroundImage: 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)' }}>
      <FloatingMakeup />
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[5rem] md:text-[4rem] font-[var(--font-abril)] text-[#472d5b] mb-2 leading-tight tracking-wide"
        >
          Makeup isn’t a <span className="italic text-[#5e2e83]">mask.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[2rem] md:text-[1.5rem] font-[var(--font-dancing)] text-[#5e2e83] italic tracking-wide mb-4"
        >
          It’s how you{' '}
          <span className="underline decoration-wavy text-[#843b97] text-[2.4rem] md:text-[2rem] font-bold">
            feel
          </span>{' '}
          today.
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl font-[var(--font-cormorant)] text-[#4b2c5e] italic mb-4 max-w-xl"
        >
          Bold or subtle. Confident or chill. <br />
          BetterMe celebrates every version of you.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 text-sm text-[#5c3e66]/70 font-[var(--font-quicksand)]"
        >
          No login. No filters. Just you.
        </motion.p>

     </div>
    </div>
  )
}
