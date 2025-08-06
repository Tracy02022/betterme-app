'use client'

import './FloatingMakeup.css'

export default function FloatingMakeup() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <img
        src="/makeup/lipstick.png"
        alt="floating lipstick"
        className="floating-object"
        style={{
          top: '8vh',
          left: '55vw',
          width: '10vw',
        }}
      />
      <img
        src="/makeup/brush.png"
        alt="floating brush"
        className="floating-object"
        style={{
          top: '2vh',
          left: '30vw',
          width: '7vw',
        }}
      />
      <img
        src="/makeup/eyeshadow.png"
        alt="floating eyeshadow"
        className="floating-object"
        style={{
          top: '30vh',
          left: '35vw',
          width: '8vw',
        }}
      />
      <img
        src="/makeup/foundation.png"
        alt="floating foundation"
        className="floating-object"
        style={{
          top: '45vh',
          left: '40vw',
          width: '7vw',
        }}
      />
      <img
        src="/makeup/powder.png"
        alt="floating powder"
        className="floating-object"
        style={{
          top: '35vh',
          left: '50vw',
          width: '6vw',
        }}
      />
    </div>
  )
}
