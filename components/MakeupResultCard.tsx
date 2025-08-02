'use client'

type Props = {
  mood: string
  imageUrl?: string | null
}

const recommendations: Record<
  string,
  { style: string; products: string[] }
> = {
  'Sweet & Energetic': {
    style: 'Orange blush + soft matte eyes + lightweight base',
    products: ['3CE Mood Recipe #117', 'Rom&nd Juicy Lasting Tint 06'],
  },
  'Cool Elegance': {
    style: 'Sharp brows + earth-toned eyeshadow + bold red lips',
    products: ['MAC Ruby Woo', 'NARS Skin Deep Eye Palette'],
  },
  'Fresh Japanese': {
    style: 'Soft pink blush + shimmer shadow + gradient lips',
    products: ['Canmake Blush 05', 'Integrate Lip Tint #PK'],
  },
  'French Lazy Chic': {
    style: 'Milk coffee tones + blurred lips + nose highlighter',
    products: ['YSL Shine Lipstick 44', 'Dior Backstage Glow'],
  },
  'Professional & Polished': {
    style: 'Matte base + sharp eyeliner + MLBB lips',
    products: ['Clio Sharp Eyeliner', 'Bobbi Brown Luxe Lip 12'],
  },
}

export default function MakeupResultCard({ mood, imageUrl }: Props) {
  const data = recommendations[mood]

  return (
    <div className="p-6 mt-6 bg-white rounded-2xl shadow-lg border border-purple/10">
      <h2 className="text-xl font-bold mb-4 text-purple-dark">
        🎯 Suggested Look: <span className="italic">{mood}</span>
      </h2>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Uploaded"
          className="w-40 h-40 object-cover rounded-xl mb-4"
        />
      )}
      <p className="text-lg mb-2">✨ Style Notes: {data.style}</p>
      <p className="text-lg mb-1">💄 Recommended Products:</p>
      <ul className="list-disc pl-6 mt-1 text-purple-dark/90">
        {data.products.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
