import './App.css';

const experiences = [
  {
    organization: 'Meta',
    role: 'Contract Software Engineer',
    summary:
      'I worked on making video encoding less computationally expensive. The project involved training models to predict how a frame should be partitioned, then bringing those predictions into the open-source SVT-AV1 encoder. Much of the work was in the gap between a promising model and a useful system: modifying encoder code, running benchmarks, and measuring whether efficiency gains stayed within an acceptable quality threshold.',
  },
  {
    organization: 'Voices for Children',
    role: 'Contract Software Engineer',
    summary:
      'I built a full-stack tool for a nonprofit that coordinates community partnerships and in-kind donations. I designed the administrative workflow in Figma and React, then connected it to an Express and PostgreSQL backend. The goal was deliberately practical: replace scattered inventory work with one clear place to record, find, and manage donations.',
  },
  {
    organization: 'Adobe',
    role: 'Technical Consultant',
    summary:
      'I explored whether learning-management features belonged inside Frame.io. Our team surveyed more than a thousand users, translated the responses into useful personas, and analyzed the results with Python. I used that research to shape interface concepts that showed how the idea could fit into the existing product rather than sit beside it as a disconnected feature.',
  },
  {
    organization: 'National Youth Leadership Training',
    role: 'Course President',
    summary:
      'Before much of my technical work, I led the day-to-day operation of a ten-day wilderness leadership course for Scouts. I coordinated staff training throughout the year, delegated the preparation behind each activity, and learned how much good execution depends on making responsibilities unambiguous.',
  },
];

const tracks = [
  ['Tame Impala × Rock type beat', 'https://www.youtube.com/watch?v=4Hc9MmYWnGE'],
  ['Lil Uzi Vert × Pink Tape type beat', 'https://www.youtube.com/watch?v=u28WqoJ2VV0'],
  ['The 1975 × Synth Pop type beat', 'https://www.youtube.com/watch?v=3pGbcPlqzls'],
  ['Duster × Alt Indie type beat', 'https://www.youtube.com/watch?v=ghw0XxIIwwM'],
];

function Arrow() {
  return <span aria-hidden="true">&#8599;</span>;
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Kinton Duong, home">Kinton Duong</a>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#music">Music</a>
        </nav>
      </header>

      <main id="top">
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">Software engineer &amp; music producer</p>
          <h1 id="intro-title">I like difficult systems,<br />explained plainly.</h1>
          <div className="intro-copy">
            <p>I’m Kinton, a computer science graduate from UC Berkeley. My work has moved between machine learning, product engineering, research, and tools for social impact.</p>
            <p>This site is a record of the work that shaped how I think—and the music I make when I’m away from a screen.</p>
          </div>
          <address className="contact-line" aria-label="Contact Kinton">
            <a href="mailto:kintond15@berkeley.edu">Email</a>
            <a href="https://www.linkedin.com/in/kinton-duong-027b4b165/">LinkedIn</a>
            <a href="https://github.com/kintond15">GitHub</a>
            <a href="https://drive.google.com/file/d/1nAG6MmCQWsH3nu1tmCvQaC9jQADk6Bvq/view?usp=sharing">Résumé</a>
          </address>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading"><p>01</p><h2 id="experience-title">Experience</h2></div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience" key={experience.organization}>
                <div className="experience-title"><h3>{experience.organization}</h3><p>{experience.role}</p></div>
                <p className="experience-summary">{experience.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section music" id="music" aria-labelledby="music-title">
          <div className="section-heading"><p>02</p><h2 id="music-title">Music</h2></div>
          <div className="music-body">
            <div className="music-note">
              <p>I started producing at fifteen, mostly by following whatever I wanted to hear next. That has taken me through rap, indie, R&amp;B, synth pop, and a lot of unfinished experiments in FL Studio.</p>
              <p>The tracks below are older snapshots of that process. I keep them here because taste changes, but the instinct to make things does not.</p>
              <div className="music-profiles">
                <a href="https://youtube.com/@kintonbeats?si=GiACPRyHFDpq1wXB">YouTube <Arrow /></a>
                <a href="https://open.spotify.com/user/kintondisbawz?si=xYSjT2SXS2eBJtl2N1C29Q&amp;nd=1&amp;dlsi=b29bab2883ee469e">Spotify <Arrow /></a>
              </div>
            </div>
            <ol className="track-list">
              {tracks.map(([title, href], index) => (
                <li key={href}><a href={href}><span className="track-number">{String(index + 1).padStart(2, '0')}</span><span>{title}</span><Arrow /></a></li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer><p>Kinton Duong</p><a href="mailto:kintond15@berkeley.edu">kintond15@berkeley.edu</a></footer>
    </div>
  );
}

export default App;
