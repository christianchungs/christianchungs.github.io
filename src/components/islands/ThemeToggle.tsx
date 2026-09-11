/* ===========================================================================
   THE LIGHT SWITCH — this site's theme toggle, and an "island".

   Everything else on the site is static HTML with zero JavaScript. This file is
   React, and it only ships its JS on pages that use it. It is mounted once, in
   BaseLayout, and floats bottom-right on every page.

   It must NOT live inside <Nav>: the nav has a backdrop-filter, which makes it
   a containing block for position:fixed children, and the switch would end up
   pinned inside the header instead of the viewport.

   All of its styling lives in src/styles/global.css under "THE LIGHT SWITCH",
   because scoped .astro styles do not reach a React island.
   =========================================================================== */

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  // null until mounted, so the server render and the first client render agree.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = document.documentElement.dataset.theme as Theme | undefined;
    setTheme(
      stored ??
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    );
  }, []);

  // Follow the OS if the visitor has never chosen for themselves.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      try {
        if (localStorage.getItem('theme')) return;
      } catch {
        /* storage blocked — fall through and follow the OS */
      }
      setTheme(mq.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
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
      className="lightswitch"
      data-mode={theme ?? 'light'}
      aria-pressed={theme === 'dark'}
      aria-label={theme === 'dark' ? 'Turn the lights on' : 'Turn the lights off'}
    >
      <span className="ls-plate" aria-hidden="true">
        <span className="ls-screw ls-screw-t" />
        <span className="ls-well">
          <span className="ls-lever" />
        </span>
        <span className="ls-screw ls-screw-b" />
      </span>
    </button>
  );
}
