'use client'

import { useState } from 'react'

const moods = [
  'Sweet & Energetic',
  'Cool Elegance',
  'Fresh Japanese',
  'French Lazy Chic',
  'Professional & Polished',
]

export default function MoodSelector({
  onSelectMood,
}: {
  onSelectMood: (mood: string) => void
}) {
  const [selected, setSelected] = useState<string | null>(null)

  const handleClick = (mood: string) => {
    setSelected(mood)
    onSelectMood(mood)
  }

  return (
    <div className="mb-6">
      <label className="block text-lg font-medium mb-2">
        Choose your vibe today:
      </label>
      <div className="flex flex-wrap gap-2">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => handleClick(mood)}
            className={`px-4 py-2 rounded-full transition border text-sm font-medium
              ${
                selected === mood
                  ? 'bg-purple text-white border-purple-dark'
                  : 'bg-white text-purple-dark border-purple'
              }`}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  )
}
