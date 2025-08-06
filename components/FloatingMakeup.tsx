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
          top: '8vh',      // 相对 viewport height
          left: '55vw',    // 相对 viewport width，确保在文字背后偏右位置
          width: '10vw',   // 宽度响应式
        }}
      />
    </div>
  )
}
