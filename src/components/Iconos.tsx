type P = { className?: string }

export const Huella = ({ className = 'size-5' }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <ellipse cx="6" cy="10" rx="2.2" ry="2.8" />
    <ellipse cx="10" cy="6" rx="2.2" ry="2.8" />
    <ellipse cx="14.5" cy="6" rx="2.2" ry="2.8" />
    <ellipse cx="18.4" cy="10" rx="2.2" ry="2.8" />
    <path d="M12 11.5c-3 0-6 3.6-6 6.2 0 1.8 1.5 2.6 3 2.3 1.2-.2 2-.8 3-.8s1.8.6 3 .8c1.5.3 3-.5 3-2.3 0-2.6-3-6.2-6-6.2z" />
  </svg>
)

export const Chat = ({ className = 'size-5' }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5.1A8 8 0 1 1 21 12z" />
  </svg>
)

export const Flecha = ({ className = 'size-6' }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
)
