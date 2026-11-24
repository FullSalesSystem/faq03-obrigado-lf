'use client'
// Desqualificado do Playbook com ?motivo= (contrato dos funis, 24/11/2026, "Exceção do Playbook").
// Qualquer motivo: só o link para baixar o Playbook, sem texto de motivo e sem oferta.
// motivo=nicho-analise: o link e, abaixo, a linha curta + o formulário extra, que posta
// no playbook-api (/playbook/api/lead-analise). O servidor relê cargo/faturamento/nicho
// do que ele mesmo guardou pelo ?sid=; daqui só sobem as 4 respostas.
// Sem ?motivo= (link antigo, acesso direto) a página segue com a oferta A/B de hoje.
// O pixel de desqualificado continua no layout, igual para todos.

import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { AbOfertaProvider } from './AbOferta'
import { PaginaOferta } from './PaginaOferta'

const PLAYBOOK_PDF = '/oferta/playbook-estruturacao-comercial-3.0.pdf'
const ANALISE_API = 'https://fullsalessystem.com/playbook/api/lead-analise'

const PARA_QUEM = [['b2b', 'B2B'], ['b2c', 'B2C'], ['b2g', 'B2G'], ['b2b2c', 'B2B2C']]
const CANAIS = [['loja-fisica', 'Loja física'], ['ecommerce', 'E-commerce'], ['representantes', 'Representantes ou distribuidores'], ['vendedores-internos', 'Vendedores internos'], ['marketplace', 'Marketplace']]
const TIME = [['0', '0'], ['1-3', '1 a 3'], ['4-10', '4 a 10'], ['10+', 'Mais de 10']]

export function Destino() {
  const [q, setQ] = useState<{ motivo: string; sid: string } | null>(null)
  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    setQ({ motivo: p.get('motivo') || '', sid: p.get('sid') || '' })
  }, [])
  if (!q) return <div style={{ minHeight: '100vh', background: '#060A1E' }} aria-busy="true" />
  if (!q.motivo) return <AbOfertaProvider origem="faq03"><PaginaOferta /></AbOfertaProvider>
  return <DesqPlaybook analise={q.motivo === 'nicho-analise' && Boolean(q.sid)} sid={q.sid} />
}

function Grupo({ legenda, children }: { legenda: string; children: ReactNode }) {
  return <fieldset className="dp-grupo"><legend>{legenda}</legend><div className="dp-opcoes">{children}</div></fieldset>
}

function FormAnalise({ sid }: { sid: string }) {
  const [estado, setEstado] = useState<'livre' | 'enviando' | 'ok' | 'erro'>('livre')

  async function enviar(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const fd = new FormData(ev.currentTarget)
    setEstado('enviando')
    try {
      // text/plain = requisição simples (sem preflight de CORS).
      const r = await fetch(ANALISE_API, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify({
          sid,
          modelo_negocio: String(fd.get('modelo_negocio') || '').trim(),
          para_quem: fd.getAll('para_quem'),
          canais: fd.getAll('canais'),
          time_comercial: String(fd.get('time_comercial') || ''),
        }),
      })
      setEstado(r.ok ? 'ok' : 'erro')
    } catch {
      setEstado('erro')
    }
  }

  if (estado === 'ok') {
    return <p className="dp-recebido" role="status">Recebido. A nossa gestão comercial vai ler o que você escreveu. Se o seu caso encaixar, a gente te chama no WhatsApp.</p>
  }

  return (
    <form className="dp-form" onSubmit={enviar}>
      <p className="dp-linha">Queremos entender o seu negócio. Conta como ele funciona.</p>
      <label className="dp-grupo">
        <span className="dp-legenda">Como funciona o seu negócio?</span>
        <textarea name="modelo_negocio" required minLength={3} maxLength={2000} rows={5} />
      </label>
      <Grupo legenda="Para quem você vende?">
        {PARA_QUEM.map(([v, l]) => <label key={v} className="dp-op"><input type="checkbox" name="para_quem" value={v} /> {l}</label>)}
      </Grupo>
      <Grupo legenda="Por onde você vende?">
        {CANAIS.map(([v, l]) => <label key={v} className="dp-op"><input type="checkbox" name="canais" value={v} /> {l}</label>)}
      </Grupo>
      <Grupo legenda="Quantas pessoas tem no time comercial?">
        {TIME.map(([v, l]) => <label key={v} className="dp-op"><input type="radio" name="time_comercial" value={v} /> {l}</label>)}
      </Grupo>
      {estado === 'erro' && <p className="dp-erro" role="alert">Não deu para enviar agora. Tenta de novo em instantes.</p>}
      <button type="submit" className="dp-btn" disabled={estado === 'enviando'}>{estado === 'enviando' ? 'Enviando...' : 'Enviar para análise'}</button>
    </form>
  )
}

function DesqPlaybook({ analise, sid }: { analise: boolean; sid: string }) {
  return (
    <main className="dp">
      <style>{CSS}</style>
      <div className="dp-wrap">
        <img src="/oferta/logo-branco.webp" alt="Full Sales" className="dp-logo" />
        <a className="dp-btn" href={PLAYBOOK_PDF} download="Playbook-de-Estruturacao-Comercial-3.0.pdf">Baixar o Playbook</a>
        {analise && <FormAnalise sid={sid} />}
      </div>
    </main>
  )
}

const CSS = `
.dp{min-height:100vh;background:#0b0e1a;color:#fff;font-family:var(--font-inter),Inter,system-ui,sans-serif;padding:40px 16px 64px}
.dp *{box-sizing:border-box}
.dp-wrap{max-width:560px;margin:0 auto;display:flex;flex-direction:column;gap:28px}
.dp .dp-logo{align-self:center;height:32px;width:auto;max-width:100%;object-fit:contain;display:block}
.dp-btn{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:14px 24px;border-radius:999px;border:0;background:#FE063B;color:#fff;font:inherit;font-size:16px;font-weight:800;text-decoration:none;cursor:pointer;width:100%}
.dp-btn:hover{background:#c90030}
.dp-btn:focus-visible{outline:3px solid #fff;outline-offset:3px}
.dp-btn:disabled{opacity:.6;cursor:wait}
.dp-form{display:flex;flex-direction:column;gap:20px;border-top:1px solid rgba(255,255,255,.12);padding-top:28px}
.dp-linha{font-size:18px;font-weight:700;line-height:1.4;margin:0}
.dp-grupo{border:0;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}
.dp-grupo legend,.dp-legenda{color:#fff;font-size:15px;font-weight:700;margin-bottom:10px;padding:0}
.dp-grupo textarea{width:100%;font:inherit;font-size:16px;color:#0d1626;background:#fff;border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:12px;resize:vertical}
.dp-opcoes{display:flex;flex-wrap:wrap;gap:8px}
.dp-op{color:#fff;display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:10px 14px;border:1px solid rgba(255,255,255,.2);border-radius:999px;font-size:15px;cursor:pointer}
.dp-op input{accent-color:#FE063B;width:18px;height:18px}
.dp-erro{color:#fecaca;font-size:14px;margin:0}
.dp-recebido{font-size:17px;line-height:1.5;margin:0;border-top:1px solid rgba(255,255,255,.12);padding-top:28px}
`
