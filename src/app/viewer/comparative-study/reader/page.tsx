import fs from 'fs';
import path from 'path';
import A4CritiqueReaderClient from './A4CritiqueReaderClient';

export default async function A4CritiqueReaderPage() {
  const filePath = path.join(process.cwd(), 'src/content/comparisons/problems-vs-bills.md');
  const rawContent = fs.readFileSync(filePath, 'utf8');

  // Extract frontmatter if present
  const frontmatterMatch = rawContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const markdownBody = frontmatterMatch ? frontmatterMatch[2] : rawContent;

  return <A4CritiqueReaderClient content={markdownBody} />;
}
