import { useEffect, useState } from 'react';
import verbs from '../data/verbs.json';

export default function Browser() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(verbs);

  useEffect(() => {
    const q = query.toLowerCase();
    setFiltered(verbs.filter(v => v.fr.includes(q) || v.en.includes(q)));
  }, [query]);

  return (
    <div style={{ padding: '1rem' }}>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search verbs..."
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <ul>
        {filtered.map((v, i) => (
          <li key={i}><strong>{v.fr}</strong>: {v.en} (rank {v.rank})</li>
        ))}
      </ul>
    </div>
  );
}
