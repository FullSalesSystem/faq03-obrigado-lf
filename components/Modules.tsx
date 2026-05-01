import Image from 'next/image'
import { academyModules } from '@/data/academy'
import { FadeUp } from './FadeUp'

export function Modules() {
  return (
    <section className="section-pad" style={{ background: '#0A0A0A' }}>
      <div className="section-container">
        <FadeUp style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.025em', color: '#FFFFFF', lineHeight: 1.12 }}>
            Mais de 14 módulos, cursos e ferramentas práticas no mesmo lugar
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, marginTop: 12, maxWidth: 640, margin: '12px auto 0', lineHeight: 1.6 }}>
            Cada conteúdo foi criado para resolver um ponto específico da sua operação comercial. Veja o que você acessa hoje:
          </p>
        </FadeUp>

        <FadeUp delay={80}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))', gap: 16 }}>
            {academyModules.map((m, i) => (
              <div key={i} style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '2/3', borderRadius: 12, overflow: 'hidden', background: '#0A0A0A' }}>
                  <Image src={m.src} alt={m.title} fill sizes="(max-width: 600px) 50vw, 165px" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '12px 2px 0', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.35 }}>{m.title}</div>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
