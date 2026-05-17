import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface Props {
  text: string;
}

export default function CopyButton({ text }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API kullanılamıyorsa sessizce geç
    }
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? 'Kopyalandı' : 'Kopyala'}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '1.75rem',
        height: '1.75rem',
        background: 'var(--bg-elevated)',
        border: `1px solid ${copied ? 'var(--accent)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-md)',
        color: copied ? 'var(--accent)' : 'var(--text-faint)',
        cursor: 'pointer',
        transition: 'color 150ms ease, border-color 150ms ease',
        flexShrink: 0,
      }}
    >
      {copied ? <Check size={13} strokeWidth={2} /> : <Copy size={13} strokeWidth={1.5} />}
    </button>
  );
}
