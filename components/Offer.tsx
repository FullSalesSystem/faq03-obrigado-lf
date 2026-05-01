import { CHECKOUT_ANUAL_URL } from '@/lib/config'
import { offerIncludes } from '@/data/offer'
import { FadeUp } from './FadeUp'
import { IconArrow } from './Icons'

export function Offer() {
  return (
    <section className="section-pad" style={{ position: 'relative', overflow: 'hidden', backgroundImage: 'url(/background-fss.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,10,30,0.78)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 20%, rgba(224,21,21,0.14) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(30,82,232,0.12) 0%, transparent 55%)', pointerEvents: 'none' }} />

      <div className="section-container" style={{ position: 'relative', maxWidth: 960 }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.2vw, 36px)', fontWeight: 800, letterSpacing: '-0.025em', color: '#FFFFFF', lineHeight: 1.12 }}>
            Garanta seu acesso ao{' '}
            <span style={{ color: '#E01515' }}>Full Sales Academy</span>{' '}
            agora
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.65, marginTop: 14, maxWidth: 580, margin: '14px auto 0' }}>
            Tudo que você precisa para estruturar, evoluir e dominar o processo comercial — em um único lugar, por um único preço.
          </p>
        </FadeUp>

        <FadeUp delay={80}>
          <div style={{
            background: 'linear-gradient(145deg, rgba(224,21,21,0.14) 0%, rgba(30,82,232,0.10) 100%)',
            border: '1px solid rgba(224,21,21,0.35)',
            borderRadius: 20,
            padding: 'clamp(28px, 4vw, 44px)',
            position: 'relative',
            backdropFilter: 'blur(8px)',
          }}>
            <div style={{
              position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
              background: '#E01515', color: '#fff', fontSize: 11, fontWeight: 800,
              padding: '4px 16px', borderRadius: 100, letterSpacing: '0.06em',
              whiteSpace: 'nowrap', textTransform: 'uppercase',
            }}>
              Oferta especial
            </div>

            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>
                Acesso Anual
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 6 }}>
                De <span style={{ textDecoration: 'line-through' }}>R$1.164</span> por apenas
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, justifyContent: 'center', marginBottom: 6 }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: '#fff', alignSelf: 'flex-start', marginTop: 10 }}>R$</span>
                <span style={{ fontSize: 'clamp(54px, 9vw, 76px)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>597</span>
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                à vista — equivale a R$49,75/mês
              </div>
            </div>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '4px 0 24px' }} />

            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
                O que está incluso:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {offerIncludes.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <circle cx="10" cy="10" r="10" fill="rgba(224,21,21,0.18)" />
                      <path d="M6 10.5L8.8 13L14 7" stroke="#E01515" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.82)', lineHeight: 1.55 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <a href={CHECKOUT_ANUAL_URL} className="btn-primary" style={{ width: '100%', fontSize: 15, padding: '16px 20px', display: 'flex', justifyContent: 'center', boxSizing: 'border-box' as const }}>
              Garantir Acesso Anual — R$597 <IconArrow />
            </a>

            <p style={{ textAlign: 'center', marginTop: 14, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
              Pagamento seguro. Acesso imediato. Cancele quando quiser.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
