import Image from 'next/image'
import { flixFeatures } from '@/data/flix'
import { FadeUp } from './FadeUp'

export function Flix() {
  return (
    <section className="section-pad" style={{ background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 20%, rgba(224,21,21,0.14) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(30,82,232,0.12) 0%, transparent 55%)', pointerEvents: 'none' }} />

      <div className="section-container" style={{ position: 'relative' }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: 40, maxWidth: 720, margin: '0 auto 40px' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#E01515', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 14 }}>
            Full Sales Flix
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.025em', color: '#FFFFFF', lineHeight: 1.14 }}>
            Além dos cursos, você ainda acessa o{' '}
            <span style={{ color: '#E01515' }}>Full Sales Flix</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.65, marginTop: 14 }}>
            Uma biblioteca completa com playbooks, estudos de caso, guias práticos e workshops com especialistas. Conteúdo novo sendo adicionado regularmente.
          </p>
        </FadeUp>

        <FadeUp delay={80}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {flixFeatures.map((f, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 14,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '2/3', background: '#0A0A0A' }}>
                  <Image src={f.src} alt={f.title} fill sizes="(max-width: 600px) 50vw, 280px" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 6, flexGrow: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.35 }}>{f.title}</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.55 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
