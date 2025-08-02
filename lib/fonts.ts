// 在 lib/fonts.ts 文件中
import { Quicksand, Playfair_Display } from 'next/font/google'

import { Abril_Fatface, Cormorant_Garamond } from 'next/font/google'
import { Dancing_Script } from 'next/font/google'

export const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing'
})
export const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-abril'
})

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-cormorant'
})

export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-quicksand'
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-playfair'
})
