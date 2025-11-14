import React, {useEffect} from 'react';
import Head from '@docusaurus/Head';

// Redirect the site root to the docs About page.
// This ensures the first page users see is the docs About.
export default function HomeRedirect() {
  // Client-side redirect (works in SPA navigation)
  useEffect(() => {
    window.location.replace('/documentacion/about/');
  }, []);

  // SSR/static fallback: meta refresh + link
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/documentacion/about/" />
      </Head>
      <div style={{padding: '2rem', textAlign: 'center'}}>
        <p>Redirigiendo a la documentación…</p>
        <a href="/documentacion/about/">Ir a About</a>
      </div>
    </>
  );
}
