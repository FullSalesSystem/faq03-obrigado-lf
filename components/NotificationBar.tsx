export function NotificationBar() {
  return (
    <div style={{
      position: 'relative',
      zIndex: 2,
      background: '#E01515',
      color: '#FFFFFF',
      padding: '14px 20px',
      textAlign: 'center',
      fontSize: 'clamp(13px, 1.6vw, 16px)',
      fontWeight: 800,
      letterSpacing: '0.01em',
      lineHeight: 1.4,
      textTransform: 'uppercase',
    }}>
      Sua aplicação foi recebida. Nosso time entrará em contato em breve para agendar sua reunião de diagnóstico.
    </div>
  )
}
