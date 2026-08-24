import fs from 'fs';
import path from 'path';
import ComparativeStudyClient from './ComparativeStudyClient';

export default async function ComparativeStudyPage() {
  const contentDir = path.join(process.cwd(), 'src/content/comparisons');
  
  const files = [
    'problems-vs-bills.md',
    'cap-525.md',
    'a-qs-professionals-bill.md',
    'architects-bill.md',
    'qs-bill.md',
    'engineers-act.md'
  ];

  const comparisonsData = files.map(filename => {
    const filePath = path.join(contentDir, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Parse frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    let meta: any = { id: '', title: '', sidebarTitle: '', description: '' };
    let markdownBody = content;

    if (frontmatterMatch) {
      const fmString = frontmatterMatch[1];
      markdownBody = frontmatterMatch[2];
      
      fmString.split('\n').forEach(line => {
        if (!line.trim()) return;
        
        const [key, ...values] = line.split(':');
        if (key && values.length) {
          const valStr = values.join(':').trim().replace(/^"/, '').replace(/"$/, '');
          // convert numeric values if possible
          const valNum = Number(valStr);
          meta[key.trim()] = !isNaN(valNum) && valStr !== '' ? valNum : valStr;
        }
      });
    }

    // Map flat structure back to structured object
    return {
      id: meta.id || filename.replace('.md', ''),
      sidebarTitle: meta.sidebarTitle || filename,
      title: meta.title,
      description: meta.description,
      scores: {
        historical: {
          safety: meta.scoreHistSafety || 0,
          autonomy: meta.scoreHistAutonomy || 0,
          deterrence: meta.scoreHistDeterrence || 0,
          modernization: meta.scoreHistModernization || 0
        },
        draft: {
          safety: meta.scoreDraftSafety || 0,
          autonomy: meta.scoreDraftAutonomy || 0,
          deterrence: meta.scoreDraftDeterrence || 0,
          modernization: meta.scoreDraftModernization || 0
        }
      },
      penalties: {
        historical: meta.penaltyHist || 0,
        draft: meta.penaltyDraft || 0
      },
      boardComposition: {
        historical: [
          { name: 'Architects', seats: meta.boardHistArch || 0, fill: '#3b82f6' }, // blue-500
          { name: 'Quantity Surveyors', seats: meta.boardHistQS || 0, fill: '#ef4444' }, // red-500
          { name: 'Engineers', seats: meta.boardHistEng || 0, fill: '#f59e0b' }, // amber-500
          { name: 'State Appointees', seats: meta.boardHistState || 0, fill: '#64748b' } // slate-500
        ],
        draft: [
          { name: 'Architects', seats: meta.boardDraftArch || 0, fill: '#3b82f6' },
          { name: 'Quantity Surveyors', seats: meta.boardDraftQS || 0, fill: '#ef4444' },
          { name: 'Engineers', seats: meta.boardDraftEng || 0, fill: '#f59e0b' },
          { name: 'State Appointees', seats: meta.boardDraftState || 0, fill: '#64748b' }
        ]
      },
      content: markdownBody
    };
  });

  return (
    <ComparativeStudyClient comparisons={comparisonsData} />
  );
}
