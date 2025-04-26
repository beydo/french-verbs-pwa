import { useParams, Link } from 'react-router-dom';
import verbs from '../data/verbs-full.json';

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

export default function VerbDetails() {
  const { verb } = useParams<{ verb: string }>();
  const safeVerb = verb || '';
  const index = verbs.findIndex(v => v.verb === safeVerb);
  const current = verbs[index];
  const prev = verbs[index - 1];
  const next = verbs[index + 1];

  if (!current) return <div style={{ padding: '2rem' }}>Verb not found</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{current.verb}</h2>
      <p><i>{current.definition}</i></p>
      <table border="1" cellPadding="6" style={{ marginTop: '1rem', width: '100%' }}>
        <thead>
          <tr>
            <th>Mood</th>
            <th>Tense (FR / EN)</th>
            <th>French Example</th>
            <th>English Meaning</th>
          </tr>
        </thead>
        <tbody>
          {current.conjugations.map((row, i) => (
            <tr key={i}>
              <td>{row.mood}</td>
              <td>{row.tense_fr} / {row.tense_en}</td>
              <td>{row.fr_example}</td>
              <td>{row.en_example}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '1rem' }}>
        {prev && <Link to={`/train/${prev.verb}`} style={{ marginRight: '1rem' }}>← {prev.verb}</Link>}
        {next && <Link to={`/train/${next.verb}`}>Next → {next.verb}</Link>}
      </div>
    </div>
  );
}
