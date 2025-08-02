'use client'

import { motion } from 'framer-motion'

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-betterme-gradient flex flex-col items-center justify-center px-6 text-center font-quicksand">
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 flex flex-col items-center justify-center px-6 text-center font-quicksand">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[5.5rem] md:text-[4rem] font-[var(--font-abril)] text-purple-900 mb-2 leading-tight tracking-wide"
        >
          Makeup isn’t a mask.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[2.25rem] md:text-[1.75rem] font-[var(--font-dancing)] text-pink-700 italic tracking-wide mb-6"
        >
          It’s how you{' '}
          <span className="underline decoration-wavy text-pink-600 text-[2.75rem] md:text-[2.25rem] font-bold">
            feel
          </span>{' '}
          today.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl font-[var(--font-cormorant)] text-pink-700 italic mb-6"
        >
          Bold or subtle. Confident or chill.
          BetterMe celebrates every version of you.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 text-sm text-purple-500/50 font-[var(--font-quicksand)]"
        >
          No login. No filters. Just you.
        </motion.p>
      </div>
    </div>
  )
}
