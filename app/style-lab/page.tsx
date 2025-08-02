'use client'

import { useEffect, useState } from 'react'
import ImageUploader from '@/components/ImageUploader'
import MoodSelector from '@/components/MoodSelector'
import MakeupResultCard from '@/components/MakeupResultCard'

const affirmations = [
  'You are glowing in your own way ✨',
  "Makeup is not a mask—it's a form of art 🎨",
  'Every style is a version of you 🌈',
  'You’re beautiful, strong, and unstoppable 💖',
]

export default function StyleLabPage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [dailyQuote, setDailyQuote] = useState<string>('')

  useEffect(() => {
    const random = Math.floor(Math.random() * affirmations.length)
    setDailyQuote(affirmations[random])
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white text-purple-dark font-quicksand">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <span>🎨</span> <span>Style Lab: Transform Me</span>
        </h1>

        {dailyQuote && (
          <div className="bg-white/70 shadow-md rounded-xl px-6 py-4 mb-10 text-center text-lg italic text-purple-dark border border-purple/20">
            💬 {dailyQuote}
          </div>
        )}

        <div className="bg-white/80 rounded-2xl shadow-xl p-8 grid gap-10 md:grid-cols-2 border border-purple/10">
          {/* LEFT: Upload & Mood */}
          <div>
            <ImageUploader onImageUpload={setImageUrl} />
            <MoodSelector onSelectMood={setSelectedMood} />
          </div>

          {/* RIGHT: Result */}
          <div>
            {selectedMood ? (
              <MakeupResultCard mood={selectedMood} imageUrl={imageUrl} />
            ) : (
              <p className="text-center text-gray-400 italic mt-10">
                Please choose your mood to see suggestions 💡
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
