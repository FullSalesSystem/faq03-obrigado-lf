'use client'

import { useState, useEffect } from 'react'
import { CHECKOUT_ANUAL_URL } from '@/lib/config'
import { IconArrow } from './Icons'

const DARK_HERO_PX = 560

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > DARK_HERO_PX)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.08)',
      backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(10,10,10,0.6)',
      backdropFilter: 'blur(14px)',
      transition: 'all 0.35s',
    }}>
      <div className="section-container" style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src="/logo-fss-branco.webp" alt="Full Sales System" style={{ height: 36, width: 'auto', display: 'block', filter: scrolled ? 'brightness(0)' : 'none' }} />
        <a
          href={CHECKOUT_ANUAL_URL}
          className="btn-primary"
          style={{ fontSize: 13, padding: '9px 20px' }}
        >
          Garantir Acesso <IconArrow />
        </a>
      </div>
    </nav>
  )
}
