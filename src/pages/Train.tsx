import { useEffect, useState } from 'react';
import dataRaw from '../data/verbs-full.json';
import { Link } from 'react-router-dom';

interface Conjugation {
  mood: string;
  tense_fr: string;
  tense_en: string;
  fr_example: string;
  en_example: string;
}

interface Verb {
  verb: string;
  definition: string;
  category: string;
  conjugations: Conjugation[];
}

const data = dataRaw as Verb[];

export default function Train() {
  const [tab, setTab] = useState<'alpha' | 'category'>('alpha');
  const [verbs] = useState<Verb[]>(data);

  const grouped: Record<string, Verb[]> = tab === 'alpha'
    ? groupByAlpha(verbs)
    : groupByCategory(verbs);

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={() => setTab('alpha')}>Alphabetically</button>
        <button onClick={() => setTab('category')}>By Category</button>
      </div>
      {Object.entries(grouped).map(([group, list]) => (
        <details key={group} open>
          <summary style={{ fontWeight: 'bold', marginTop: '1rem' }}>{group}</summary>
          <ul>
            {list.map((v, i) => (
              <li key={i}><Link to={`/train/${v.verb}`}>{v.verb}</Link></li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}

function groupByAlpha(verbs: Verb[]): Record<string, Verb[]> {
  return verbs.reduce((acc: Record<string, Verb[]>, v: Verb) => {
    const letter = v.verb[0].toUpperCase();
    acc[letter] = acc[letter] || [];
    acc[letter].push(v);
    return acc;
  }, {});
}

function groupByCategory(verbs: Verb[]): Record<string, Verb[]> {
  return verbs.reduce((acc: Record<string, Verb[]>, v: Verb) => {
    const cat = v.category;
    acc[cat] = acc[cat] || [];
    acc[cat].push(v);
    return acc;
  }, {});
}
