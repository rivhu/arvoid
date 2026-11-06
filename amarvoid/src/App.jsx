import { useState } from 'react'

// Change this to your real address. The contact form opens the visitor's email app addressed to it.
const EMAIL = 'hello@amarvoid.com'

const work = [
  ['Film and series', 'Original stories, developed with writers and directors and taken from script to release.'],
  ['Music', 'Artist projects, soundtracks and releases, produced and distributed under one roof.'],
  ['Live events', 'Shows, festivals and launches designed around the people in the room.'],
  ['Digital content', 'Short video, creator collaborations and interactive formats made for the feed.'],
]

const principles = [
  ['The audience decides', 'We start from what people want to watch, hear and share, then build the project around it.'],
  ['Craft before volume', 'We take on fewer projects and finish each one properly.'],
  ['Made to travel', 'Every project is built to work across screens, stages and platforms.'],
]

export default function App() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    const subject = encodeURIComponent('Project enquiry from ' + f.name)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <header className="nav dark">
        <div className="wrap nav-in">
          <a href="#top" className="brand">Amarvoid</a>
          <nav aria-label="Main">
            <a href="#work" className="hide-s">What we make</a>
            <a href="#approach" className="hide-s">Approach</a>
            <a href="#contact" className="btn gold">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="dark hero">
          <div className="wrap hero-in">
            <div>
              <h1>Entertainment comes first.</h1>
              <p className="lead">
                Amarvoid develops, produces and releases stories, music and live experiences that people want to share.
              </p>
              <div className="cta">
                <a href="#work" className="btn gold">See what we make</a>
                <a href="#contact" className="btn ghost">Work with us</a>
              </div>
            </div>
            <div className="void" aria-hidden="true" />
          </div>
        </section>

        <section id="work" className="sec">
          <div className="wrap">
            <h2>What we make</h2>
            <ul className="rows">
              {work.map(([t, d]) => (
                <li key={t}><h3>{t}</h3><p>{d}</p></li>
              ))}
            </ul>
          </div>
        </section>

        <section id="approach" className="sec alt">
          <div className="wrap">
            <h2>Why entertainment first</h2>
            <div className="cols">
              {principles.map(([t, d]) => (
                <div key={t}><h3>{t}</h3><p>{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="sec dark">
          <div className="wrap contact">
            <div>
              <h2>Tell us about your project</h2>
              <p className="lead">Share a few lines about what you are making or planning. We reply to every message.</p>
            </div>
            <form onSubmit={submit}>
              <label>Your name<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
              <label>Email<input required type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
              <label>Message<textarea required rows="5" value={f.message} onChange={set('message')} /></label>
              <button className="btn gold" type="submit">Send message</button>
              {sent && <p role="status" className="note">Your email app should open with the message ready to send.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="dark foot">
        <div className="wrap">© {new Date().getFullYear()} Amarvoid. All rights reserved.</div>
      </footer>
    </>
  )
}
