/* ===========================================================================
   THIS IS AN "ISLAND" — the interactive-component pattern for this site.

   Everything else on the site is static HTML with zero JavaScript. A file like
   this one is React, and it only ships its JS to the browser on the pages where
   it's actually used. That's the whole point of the stack we picked.

   TO ADD A NEW INTERACTIVE COMPONENT:
     1. Create a file here, e.g. src/components/islands/CursorBlob.tsx
     2. In any .astro page, import it and add a `client:` directive:
          import CursorBlob from '../components/islands/CursorBlob';
          <CursorBlob client:visible />
     3. Pick the directive by when it should wake up:
          client:load    → immediately (nav, theme toggles)
          client:visible → when scrolled into view (most things — cheapest)
          client:idle    → when the browser is free (low priority)
   =========================================================================== */

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = document.documentElement.dataset.theme as Theme | undefined;
    setTheme(
      stored ??
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    );
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* private browsing — fine, it just won't persist */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      aria-pressed={theme === 'dark'}
    >
      <span aria-hidden="true">{theme === 'dark' ? '◐' : '◑'}</span>
    </button>
  );
}
