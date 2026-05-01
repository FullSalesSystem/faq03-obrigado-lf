export type PressItem = { outlet: string; title: string; quote: string }
export type PressLogo = { name: string; src: string; bg: string; scale: number }

export const pressItems: PressItem[] = [
  {
    outlet: 'Estadão',
    title: 'Full Sales System: três mentes empreendedoras que transformaram desafios em estratégias',
    quote: 'Nos últimos anos, ajudamos os nossos clientes a girar mais de 500 milhões de faturamento em vendas. Mas quando olhamos para esses números enxergamos algo ainda maior: não foi só o aumento nas vendas, mas eles se tornaram protagonistas da própria empresa.',
  },
  {
    outlet: 'Valor Econômico',
    title: 'Full Sales System aponta o caminho para crescer em 2026 com estratégias mais inteligentes',
    quote: 'Empresas que adotam estruturas de vendas inteligentes e estratégias orgânicas robustas tendem a prosperar em cenários de incerteza, criando vantagem competitiva mesmo com menor investimento direto em mídia.',
  },
  {
    outlet: 'Pequenas Empresas & Grandes Negócios',
    title: 'Yuri Barbosa, Vinícius de Sá e Matheus Garcia trilharam caminhos distintos, mas marcados pelo mesmo ponto de virada',
    quote: 'Os sócios desenvolveram uma metodologia própria, capaz de integrar processos comerciais eficientes, automação estratégica e construção de autoridade digital. O objetivo não era apenas aumentar vendas, mas criar um modelo de crescimento consistente.',
  },
]

export const pressLogos: PressLogo[] = [
  { name: 'Valor Econômico',                       src: '/press-valor.png',   bg: '#FFFFFF', scale: 1.2 },
  { name: 'Pequenas Empresas & Grandes Negócios',  src: '/press-pegn.png',    bg: '#D35400', scale: 2.3 },
  { name: 'Band',                                  src: '/press-band.png',    bg: '#1A1A1A', scale: 1.0 },
  { name: 'Estadão',                               src: '/press-estadao.png', bg: '#FFFFFF', scale: 2.0 },
  { name: 'Terra',                                 src: '/press-terra.png',   bg: '#FFFFFF', scale: 1.0 },
]
