export type PortfolioMode = 'classic' | '3d';

const STORAGE_KEY = 'portfolio-mode';
const EVENT_KEY = 'portfolio:mode-change';

export function getMode(): PortfolioMode | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEY) as PortfolioMode | null;
}

export function setMode(mode: PortfolioMode) {
  localStorage.setItem(STORAGE_KEY, mode);
  document.documentElement.setAttribute('data-mode', mode);
  window.dispatchEvent(new CustomEvent(EVENT_KEY, { detail: mode }));
}

export function subscribeToMode(cb: (mode: PortfolioMode) => void) {
  const handler = (e: Event) => cb((e as CustomEvent<PortfolioMode>).detail);
  window.addEventListener(EVENT_KEY, handler);
  return () => window.removeEventListener(EVENT_KEY, handler);
}
