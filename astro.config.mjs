import { defineConfig } from 'astro/config';

// VITALLIA — funil de 12 telas
// Site estático (sem servidor): a Vercel builda e serve os arquivos direto,
// sem precisar do adaptador @astrojs/vercel.
export default defineConfig({
  site: 'https://vitallia.vercel.app',
  output: 'static',
  redirects: {
    '/': '/1',
  },
  prefetch: {
    // Prefetch automático de todo link no viewport: como cada tela tem
    // exatamente um próximo passo, isso já cobre a navegação inteira do funil.
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
