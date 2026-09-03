import { hotels, budget, rules, messages, days } from './data/trip';
import './App.css';

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">THAILAND 2026</p>
          <h1>Thailand Trip Planner</h1>
          <p>Itinerary, hotels, budget, transport notes and ready-to-send messages.</p>
        </div>
        <div className="safe">PRIVATE DOCUMENTS REMOVED</div>
      </header>

      <section className="grid stats">
        <article><span>Total budget</span><strong>{budget.total}</strong></article>
        <article><span>Hotels</span><strong>{budget.hotels}</strong></article>
        <article><span>Remaining</span><strong>{budget.remaining}</strong></article>
        <article><span>Travel days</span><strong>{days.length}</strong></article>
      </section>

      <section className="panel">
        <h2>Hotels</h2>
        <div className="cards">{hotels.map((h) => <article className="card" key={`${h.dates}-${h.name}`}><b>{h.name}</b><span>{h.dates} · {h.area}</span><span>{h.cost}</span><small>{h.note}</small></article>)}</div>
      </section>

      <section className="panel">
        <h2>Daily plan</h2>
        <div className="days">{days.map((d) => <article className="day" key={d.date}><div><b>{d.date}</b><span>{d.area}</span></div><h3>{d.summary}</h3><p>{d.transport}</p><p>{d.food}</p><small>{d.risk}</small></article>)}</div>
      </section>

      <section className="grid two">
        <article className="panel"><h2>Budget split</h2><ul>{budget.split.map(([name,cost,note]) => <li key={name}><b>{name}</b><span>{cost}</span><small>{note}</small></li>)}</ul><h3>Protect</h3><p>{budget.protect.join(' · ')}</p></article>
        <article className="panel"><h2>Rules</h2><ul>{rules.map(r => <li key={r}>{r}</li>)}</ul></article>
      </section>

      <section className="panel"><h2>Ready messages</h2><div className="messages">{messages.map(m => <article className="card" key={m.title}><b>{m.title}</b><p>{m.text}</p></article>)}</div></section>

      <footer>For security, passport numbers, visa/e-Visa identifiers and transaction references are intentionally not stored or displayed in this public project.</footer>
    </main>
  );
}
