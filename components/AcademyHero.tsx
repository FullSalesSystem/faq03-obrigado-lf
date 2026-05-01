import { CHECKOUT_ANUAL_URL } from '@/lib/config'
import { FadeUp } from './FadeUp'
import { IconArrow } from './Icons'
import { NotificationBar } from './NotificationBar'

export function AcademyHero() {
  return (
    <section style={{ paddingTop: 64, paddingBottom: 96, position: 'relative', overflow: 'hidden', backgroundImage: 'url(/background-fss.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <NotificationBar />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,10,30,0.72)', pointerEvents: 'none' }} />

      <div className="section-container" style={{ position: 'relative', maxWidth: 860, textAlign: 'center', paddingTop: 72 }}>
        <FadeUp>
          <p style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.65,
            maxWidth: 680,
            margin: '0 auto 16px',
          }}>
            Enquanto isso, use esse tempo a seu favor...
          </p>

          <h1 style={{
            fontSize: 'clamp(22px, 3.4vw, 40px)',
            fontWeight: 900,
            lineHeight: 1.14,
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
            marginBottom: 20,
          }}>
            o Full Sales Academy reúne tudo que você precisa para{' '}
            <span style={{ color: '#E01515' }}>dominar vendas e estruturar uma operação comercial</span>
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.65,
            maxWidth: 680,
            margin: '0 auto 52px',
          }}>
            Scripts, playbooks, ferramentas de gestão, cursos de liderança e muito mais — o mesmo conteúdo que já estruturou o comercial de mais de{' '}
            <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>600 empresas</span>, agora acessível para você aplicar hoje.
          </p>

          {/* Pricing card — somente anual */}
          <div style={{ maxWidth: 360, margin: '0 auto 32px' }}>
            <div style={{
              background: 'linear-gradient(145deg, rgba(224,21,21,0.18) 0%, rgba(30,82,232,0.12) 100%)',
              border: '1px solid rgba(224,21,21,0.45)',
              borderRadius: 18,
              padding: '32px 24px 24px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
                background: '#E01515', color: '#fff', fontSize: 11, fontWeight: 800,
                padding: '4px 16px', borderRadius: 100, letterSpacing: '0.06em',
                whiteSpace: 'nowrap', textTransform: 'uppercase',
              }}>
                Melhor valor
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Acesso Anual</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, justifyContent: 'center', marginBottom: 4 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: '#fff', alignSelf: 'flex-start', marginTop: 8 }}>R$</span>
                <span style={{ fontSize: 'clamp(42px, 7vw, 54px)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>597</span>
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 24 }}>à vista · equivale a R$49,75/mês</div>
              <a href={CHECKOUT_ANUAL_URL} className="btn-primary" style={{ width: '100%', fontSize: 14, padding: '13px 16px', display: 'flex', justifyContent: 'center', boxSizing: 'border-box' as const }}>
                Garantir Acesso Anual <IconArrow />
              </a>
            </div>
          </div>

          {/* micro trust */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', alignItems: 'center', color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="rgba(224,21,21,0.2)" /><path d="M4 7.2L6.1 9.2L10 5" stroke="#E01515" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span>Acesso imediato</span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="rgba(224,21,21,0.2)" /><path d="M4 7.2L6.1 9.2L10 5" stroke="#E01515" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span>+600 empresas estruturadas</span>
            </div>
          </div>
        </FadeUp>
      </div>

      <style>{`@media(max-width:540px){#academy-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
