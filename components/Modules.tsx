import Image from 'next/image'
import { academyModules } from '@/data/academy'
import { FadeUp } from './FadeUp'

export function Modules() {
  return (
    <section className="section-pad" style={{ background: '#FFFFFF' }}>
      <div className="section-container">
        <FadeUp style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.025em', color: '#0A0A0A', lineHeight: 1.12 }}>
            Mais de 14 módulos, cursos e ferramentas práticas no mesmo lugar
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, marginTop: 12, maxWidth: 640, margin: '12px auto 0', lineHeight: 1.6 }}>
            Cada conteúdo foi criado para resolver um ponto específico da sua operação comercial. Veja o que você acessa hoje:
          </p>
        </FadeUp>

        <FadeUp delay={80}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {academyModules.map((m, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 14,
                overflow: 'hidden',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '2/3', background: '#0A0A0A' }}>
                  <Image src={m.src} alt={m.title} fill sizes="(max-width: 600px) 50vw, 220px" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 6, flexGrow: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.35 }}>{m.title}</div>
                  <p style={{ fontSize: 13, color: '#525252', lineHeight: 1.55 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
