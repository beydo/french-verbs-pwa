import { useEffect, useState } from 'react';
import data from '../data/verbs-full.json';
import { Link } from 'react-router-dom';

export default function Train() {
  const [tab, setTab] = useState<'alpha' | 'category'>('alpha');
  const [verbs, setVerbs] = useState(data);

  const grouped = tab === 'alpha'
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

function groupByAlpha(verbs) {
  return verbs.reduce((acc, v) => {
    const letter = v.verb[0].toUpperCase();
    acc[letter] = acc[letter] || [];
    acc[letter].push(v);
    return acc;
  }, {});
}

function groupByCategory(verbs) {
  return verbs.reduce((acc, v) => {
    const cat = v.category;
    acc[cat] = acc[cat] || [];
    acc[cat].push(v);
    return acc;
  }, {});
}
