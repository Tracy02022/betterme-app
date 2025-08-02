'use client'

import { useRef } from 'react'

export default function ImageUploader({
  onImageUpload,
}: {
  onImageUpload: (url: string) => void
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (reader.result) {
          onImageUpload(reader.result.toString())
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="mb-6">
      <label className="block text-lg font-medium mb-2">
        Upload your selfie:
      </label>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-purple file:text-white
                   hover:file:bg-purple-dark transition"
      />
    </div>
  )
}
