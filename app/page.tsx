'use client'

import { FormEvent, useState } from 'react'

const PHOTO_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5a78d7cd-b3da-41b8-8972-13557fb364a8-ffMBmRwRolJpfGTs4XS2kX6rTjkKXH.jpeg'

const details = [
  ['Profile', 'Michael Johnson'],
  ['Location', 'Africa'],
  ['Country', 'Nigeria'],
  ['Name', 'Michael Johnson'],
  ['Place of birth', 'Otobia Memorial Hospital, Accra'],
  ['Age', '26 years old (03/11/2000)'],
  ['Current location', 'Grande Kloof boutiques hotel, South Africa'],
  ['Arrest history', '3 Arrest'],
  ['Available balance', '$158,500.00'],
  ['Primary wallet', 'Coinbase'],
  ['Wallet account', '7 linked wallet'],
  ['Email account', '1700 email address'],
  ['Scam case', '28 scam case'],
  ['Available balance', '158,500.00'],
  ['Primary wallet', 'Coinbase'],
  ["Emails: *** *** *** ***"],
  ['Pin: ******'],
  ['Phone number', '+1234-225-4902'],
  ['Email address: iammichelemorroneemail@gmail.com', ]
]

function Socials() {
  return <nav className="socials" aria-label="Social links">
    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
    <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">gh</a>
    <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">𝕏</a>
  </nav>
}

function SearchPage({ onSearch }: { onSearch: (name: string) => void }) {
  const [name, setName] = useState('')
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(name)
  }
  return <main className="scan-shell search-shell">
    <section className="scan-page search-page" aria-label="Search">
      <div className="scan-stars" aria-hidden="true" />
      <div className="search-content">
        <p className="eyebrow">SECURE RECORDS DATABASE</p>
        <h1>Search Profile</h1>
        <p className="search-copy">Enter a full name to access scan results.</p>
        <form className="search-form" onSubmit={submit}>
          <label htmlFor="name">Name</label>
          <input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Michael Johnson" autoComplete="name" />
          <button type="submit">Search Records</button>
        </form>
        <p className="search-note">Searches are case-insensitive.</p>
      </div>
      <footer className="scan-footer"><p className="status">SYSTEM ONLINE // READY</p><Socials /></footer>
    </section>
  </main>
}

function ResultsPage({ onBack }: { onBack: () => void }) {
  const [scanned, setScanned] = useState(false)
  return <main className="scan-shell">
    <section className="scan-page" aria-label="Scan results">
      <div className="scan-stars" aria-hidden="true" />
      <button className="back-button" onClick={onBack}>← New search</button>
      <section className="profile-card" aria-label="Subject profile">
        <img className="profile-photo" src={PHOTO_URL} alt="Michael Johnson" />
        <div><p className="profile-label">SUBJECT PROFILE</p><h2>Michael Johnson</h2></div>
      </section>
      <header className="scan-header"><p className="eyebrow">BACKGROUND CHECK</p><h1>Scan Results</h1><p className="subject">Subject : Michael Johnson</p></header>
      <div className="rule" />
      <button className={`globe-button ${scanned ? 'is-scanned' : ''}`} onClick={() => setScanned((value) => !value)} aria-label="Toggle scan animation"><span className="globe" aria-hidden="true"><span /></span></button>
      <div className="output"><p className="output-label">C++ Output</p>{details.map(([label, value]) => <p className="code-line" key={label}><span>&lt;div class=&quot;line&quot;&gt;&gt; </span>{label}: {value}&lt;/div&gt;</p>)}</div>
      <footer className="scan-footer"><p className="status">{scanned ? 'SCAN COMPLETE // VERIFIED' : 'SCAN COMPLETE // ARCHIVED'}</p><Socials /></footer>
    </section>
  </main>
}

function normalizeName(value: string) {
  return value.toLowerCase().replace(/\s+/g, '')
}

export default function Page() {
  const [searchedName, setSearchedName] = useState<string | null>(null)
  const found = searchedName ? normalizeName(searchedName) === 'michaeljohnson' : false
  if (searchedName && !found) return <main className="scan-shell search-shell"><section className="scan-page search-page"><div className="scan-stars" aria-hidden="true" /><div className="not-found"><p className="eyebrow">SEARCH RESULTS</p><h1>Scan Not Found</h1><p>No profile matched <strong>{searchedName}</strong>.</p><button onClick={() => setSearchedName(null)}>Try another name</button></div></section></main>
  return searchedName ? <ResultsPage onBack={() => setSearchedName(null)} /> : <SearchPage onSearch={setSearchedName} />
}
