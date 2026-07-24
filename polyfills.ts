
/**
 * Polyfills essenciais para evitar "ReferenceError: process is not defined"
 * em ambientes de produção (Vercel/ESM) ao carregar bibliotecas Node-compatible.
 */
if (typeof window !== 'undefined') {
  (window as any).process = (window as any).process || {};
  (window as any).process.env = (window as any).process.env || {};
  (window as any).process.nextTick = (window as any).process.nextTick || ((cb: any) => setTimeout(cb, 0));
  
  // Define NODE_ENV se não existir
  if (!(window as any).process.env.NODE_ENV) {
    (window as any).process.env.NODE_ENV = 'production';
  }
}

export {};
