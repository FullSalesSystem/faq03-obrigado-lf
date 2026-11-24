// Página do desqualificado do FAQ-03 (Playbook).
// Com ?motivo= (form novo, contrato 24/11/2026): só o link do Playbook e, no
// nicho-analise, o formulário extra (components/DesqPlaybook.tsx).
// Sem ?motivo=: teste A/B da oferta de hoje (A = Full Sales Academy, B = Master
// Sales Script); desenho em components/PaginaOferta.tsx, conteúdo em lib/ofertas.ts.
import { Destino } from '@/components/DesqPlaybook'

export default function Home() {
  return <Destino />
}
