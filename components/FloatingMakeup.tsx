'use client'

const items = [
  { src: '/makeup/lipstick.png', style: 'top-[10%] left-[5%] w-24' },
  { src: '/makeup/brush.png', style: 'bottom-[15%] right-[10%] w-24' },
  { src: '/makeup/foundation.png', style: 'top-[40%] left-[60%] w-24' },
  { src: '/makeup/eyeshadow.png', style: 'top-[70%] right-[15%] w-24' },
]

export default function FloatingMakeup() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {items.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt={`item-${index}`}
          className={`floating-object absolute z-10 opacity-100 animate-float-${index % 2 === 0 ? 'up' : 'down'} drop-shadow-xl ${item.style}`}
        />
      ))}
    </div>
  )
}
