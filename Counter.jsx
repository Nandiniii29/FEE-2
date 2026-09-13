import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const handleDecrease = () => setCount((prev) => prev - 1)
  const handleIncrease = () => setCount((prev) => prev + 1)

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #ede9fe 100%)',
        padding: '24px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: 'min(90vw, 620px)',
          background: 'rgba(255, 255, 255, 0.7)',
          border: '1px solid rgba(139, 92, 246, 0.18)',
          borderRadius: '28px',
          boxShadow: '0 25px 60px rgba(91, 33, 182, 0.18)',
          backdropFilter: 'blur(10px)',
          padding: '36px 28px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          <button
            type="button"
            onClick={handleDecrease}
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '22px',
              border: 'none',
              background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
              color: '#fff',
              fontSize: '2.5rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 16px 28px rgba(139, 92, 246, 0.3)',
            }}
          >
            −
          </button>

          <div
            style={{
              flex: '1',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #ffffff 0%, #f3e8ff 100%)',
              borderRadius: '28px',
              border: '1px solid rgba(139, 92, 246, 0.15)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.8)',
            }}
          >
            <span
              style={{
                fontSize: '1rem',
                fontWeight: '700',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#6d28d9',
                marginBottom: '12px',
              }}
            >
              Counter
            </span>
            <div
              style={{
                fontSize: 'clamp(4rem, 12vw, 8rem)',
                lineHeight: 1,
                fontWeight: '800',
                color: '#1f2937',
              }}
            >
              {count}
            </div>
          </div>

          <button
            type="button"
            onClick={handleIncrease}
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '22px',
              border: 'none',
              background: 'linear-gradient(135deg, #ec4899, #f472b6)',
              color: '#fff',
              fontSize: '2.5rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 16px 28px rgba(236, 72, 153, 0.3)',
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
