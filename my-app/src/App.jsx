import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import profilePhoto from './assets/me2.jpg';
import './App.css';

const experiences = [
  {
    organization: 'Rippling',
    summary:
      'I designed product-specific permissions for collaborators to help onboard their companies onto Rippling. I also improved our agent-CLI orchestration layer for agentic onboarding.',
  },
  {
    organization: 'AWS',
    summary:
      'I built an internal code review analyzer that enforces linting rules to help prevent production code bugs, with default support for Rust and Go.',
  },
  {
    organization: 'Meta',
    summary:
      'I helped develop ML infrastructure for video encoding, training block-partitioning prediction models and integrating their outputs into SVT-AV1 to reduce compute while preserving quality.',
  },
  {
    organization: 'UNICEF',
    summary:
      "I helped build an Azure Function that uses an LLM to recommend relevant courses in UNICEF's Learning Passport, a free learning platform for students worldwide.",
  },
];

const tracks = [
  ['Deftones x Alt Rock Type Beat', 'https://www.youtube.com/watch?v=vpTOQ9-j9IA'],
  ['Lil Uzi Vert × Pink Tape Type Beat', 'https://www.youtube.com/watch?v=u28WqoJ2VV0'],
  ['Tame Impala x Indietronica Type Beat', 'https://www.youtube.com/watch?v=4Hc9MmYWnGE'],
  ['Beach House x Dreampop Type Beat', 'https://www.youtube.com/watch?v=wanEdWQAyXg'],
];

function Arrow() {
  return <span aria-hidden="true">&#8599;</span>;
}

function SiteFooter() {
  return (
    <footer>
      <p>Kinton Duong</p>
      <a href="mailto:kintond15@berkeley.edu">kintond15@berkeley.edu</a>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="site-shell home-shell">
      <main>
        <section className="intro" aria-labelledby="intro-title">
          <div className="intro-identity">
            <div className="identity-lockup">
              <img src={profilePhoto} alt="Kinton Duong" />
              <h1 id="intro-title">Kinton Duong</h1>
            </div>
          </div>
          <div className="intro-copy">
            <p>I'm an undergraduate student at UC Berkeley studying Computer and Data Science. My main interests lie between product engineering and agentic AI systems. Previously, I've built products for Rippling, developer tooling for AWS, and ML infra for Meta.</p>
            <p>I also love to make music, through playing instruments or producing beats on my laptop. I also love to lift, cook, and explore new places!</p>
          </div>
        </section>

        <div className="home-directory">
          <nav className="page-index" aria-label="Explore the site">
            <p>Read</p>
            <div>
              <Link to="/experience"><span>Work Experience</span><span aria-hidden="true">&#8594;</span></Link>
              <Link to="/music"><span>Music</span><span aria-hidden="true">&#8594;</span></Link>
            </div>
          </nav>

          <address className="contact-block" aria-label="Contact Kinton">
            <p>Contact</p>
            <div>
              <a className="icon-link" href="mailto:kintond15@berkeley.edu" aria-label="Email" title="Email">
                <FiMail aria-hidden="true" />
              </a>
              <a className="icon-link" href="https://www.linkedin.com/in/kinton-duong-027b4b165/" aria-label="LinkedIn" title="LinkedIn">
                <FiLinkedin aria-hidden="true" />
              </a>
              <a className="icon-link" href="https://github.com/kintond15" aria-label="GitHub" title="GitHub">
                <FiGithub aria-hidden="true" />
              </a>
              <a className="resume-link" href="https://drive.google.com/file/d/1T34mBeZ_38di1eL4_ovMRbnhctBsrRNZ/view?usp=drive_link">Resume</a>
            </div>
          </address>
        </div>
      </main>
    </div>
  );
}

function ExperiencePage() {
  return (
    <div className="site-shell">
      <nav className="page-nav" aria-label="Back to homepage">
        <Link to="/"><span aria-hidden="true">&#8592;</span> Back</Link>
      </nav>
      <main className="page-main experience-main">
        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience" key={experience.organization}>
              <div className="experience-title">
                <h2>{experience.organization}</h2>
              </div>
              <p className="experience-summary">{experience.summary}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function MusicPage() {
  return (
    <div className="site-shell">
      <nav className="page-nav" aria-label="Back to homepage">
        <Link to="/"><span aria-hidden="true">&#8592;</span> Back</Link>
      </nav>
      <main className="page-main">
        <div className="music-body">
          <div className="music-note">
            <p>I sometimes produce music, primarily by making beats/instrumentals on FL Studio. I started off making rap beats but have since explored R&amp;B, indie, and different subgenres. Feel free to take a listen!</p>
            <div className="music-profiles">
              <a href="https://youtube.com/@kintonbeats?si=GiACPRyHFDpq1wXB" aria-label="YouTube" title="YouTube">
                <FaYoutube aria-hidden="true" />
              </a>
              <a href="https://open.spotify.com/user/kintondisbawz?si=xYSjT2SXS2eBJtl2N1C29Q&amp;nd=1&amp;dlsi=b29bab2883ee469e" aria-label="Spotify" title="Spotify">
                <FaSpotify aria-hidden="true" />
              </a>
            </div>
          </div>
          <ol className="track-list">
            {tracks.map(([title, href], index) => (
              <li key={href}>
                <a href={href}>
                  <span className="track-number">{String(index + 1).padStart(2, '0')}</span>
                  <span>{title}</span>
                  <Arrow />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/music" element={<MusicPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
