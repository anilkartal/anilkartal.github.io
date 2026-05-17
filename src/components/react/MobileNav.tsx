import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X, Menu } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
}

interface Props {
  links: NavLink[];
  currentPath: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function MobileNav({ links, currentPath }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  function isActive(href: string) {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  }

  const overlayVariants = {
    initial: reduced ? { opacity: 0 } : { x: '100%' },
    animate: reduced ? { opacity: 1 } : { x: '0%' },
    exit: reduced ? { opacity: 0 } : { x: '100%' },
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Menüyü aç"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-overlay"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '2rem',
          height: '2rem',
          background: 'none',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--text-muted)',
          cursor: 'pointer',
          flexShrink: 0,
          transition: 'color 150ms ease, border-color 150ms ease',
        }}
      >
        <Menu size={16} strokeWidth={1.5} />
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-nav-overlay"
              role="dialog"
              aria-modal="true"
              aria-label="Navigasyon menüsü"
              variants={overlayVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.32, ease }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 9999,
                backgroundColor: 'var(--bg)',
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem',
              }}
            >
              {/* Üst bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '4rem',
                  marginBottom: '2rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--text-faint)',
                  }}
                >
                  Menü
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Menüyü kapat"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2rem',
                    height: '2rem',
                    background: 'none',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                  }}
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Nav linkleri */}
              <nav aria-label="Mobil navigasyon">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    initial={reduced ? { opacity: 1 } : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.28,
                      ease,
                      delay: reduced ? 0 : 0.08 + i * 0.06,
                    }}
                    style={{
                      display: 'block',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      color: isActive(link.href) ? 'var(--accent)' : 'var(--text)',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid var(--border)',
                      transition: 'color 150ms ease',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
