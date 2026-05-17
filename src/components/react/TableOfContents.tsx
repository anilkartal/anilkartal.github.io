import { useState, useEffect, useRef } from 'react';

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface Props {
  headings: Heading[];
}

export default function TableOfContents({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const filtered = headings.filter((h) => h.depth === 2 || h.depth === 3);

  useEffect(() => {
    if (filtered.length === 0) return;

    const ids = filtered.map((h) => h.slug);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  if (filtered.length === 0) return null;

  return (
    <nav aria-label="İçindekiler">
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--text-faint)',
          marginBottom: '0.875rem',
          lineHeight: 1,
        }}
      >
        İçindekiler
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {filtered.map((heading) => {
          const isActive = activeId === heading.slug;
          const isH3 = heading.depth === 3;

          return (
            <li key={heading.slug} style={{ paddingLeft: isH3 ? '0.875rem' : '0' }}>
              <a
                href={`#${heading.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.slug)?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  display: 'block',
                  fontSize: isH3 ? '12px' : '13px',
                  color: isActive ? 'var(--accent)' : 'var(--text-faint)',
                  paddingBlock: '0.3rem',
                  lineHeight: 1.4,
                  borderLeft: `2px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
                  paddingLeft: '0.75rem',
                  marginLeft: isH3 ? '0' : '-0.75rem',
                  transition: 'color 150ms ease, border-color 150ms ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-faint)';
                }}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
