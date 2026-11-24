import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Obrigado | Full Sales System',
  description:
    'Você deu o primeiro passo. Conheça a Full Sales System, a consultoria que já estruturou mais de 550 operações comerciais no Brasil, Portugal e EUA.',
  keywords: [
    'estrutura comercial',
    'sistema de vendas',
    'escalar negócio',
    'full sales system',
    'vinícius de sá',
  ],
  openGraph: {
    title: 'Obrigado | Full Sales System',
    description:
      'Você deu o primeiro passo. Conheça a Full Sales System, a consultoria que já estruturou mais de 550 operações comerciais.',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
  },
}

const PIXEL_TOPO = "/* Meta Pixel no topo (24/11/2026): PageView sai antes do GTM. O stub deixa passar so o 1o PageView; o do GTM (template __cvt_5RM3Q, trackSingle) cai no filtro. Nao trocar window.fbq depois do fbevents. */!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){var a=arguments;if((a[0]==='track'&&a[1]==='PageView')||(a[0]==='trackSingle'&&a[2]==='PageView')){if(n._pv)return;n._pv=1}n.callMethod?n.callMethod.apply(n,a):n.queue.push(a)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','288404690470754');fbq('track','PageView');"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* 1o script da página: código-base do Meta Pixel + PageView único (ver comentário no script) */}
        <script dangerouslySetInnerHTML={{ __html: PIXEL_TOPO }} />
      </head>
      <body>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          /* código-base + init + PageView: PIXEL_TOPO, no <head> */
          /* eventID = ?sid= (submission_id do form do playbook): o playbook-api
             manda os mesmos eventos pela Conversions API e a Meta deduplica. */
          var sid = '';
          try { sid = new URLSearchParams(location.search).get('sid') || ''; } catch (e) {}
          function px(nome) { sid ? fbq('trackCustom', nome, {}, { eventID: sid }) : fbq('trackCustom', nome); }
          px('Pageview-lead-desqualificado-geral');
          px('Lead_desqualificado_FAQ_03');
        `}</Script>
        {/* sem <noscript><img> do pixel: o React faz preload dessa imagem e ela virava um PageView extra */}
        {/* End Meta Pixel Code */}

        {children}
      </body>
    </html>
  )
}
