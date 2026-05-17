const WORDS_PER_MINUTE = 200;

export function readingTime(text: string): string {
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);
  return `${minutes} dk okuma`;
}
