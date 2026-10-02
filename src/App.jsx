import { useEffect, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { aboutFacts, navLinks, projects, skillGroups, socialLinks } from './portfolioData';

/**
 * @param {number} milliseconds
 * @returns {import('react').CSSProperties & { '--reveal-delay': string }}
 */
function getRevealDelayStyle(milliseconds) {
  return { '--reveal-delay': `${milliseconds}ms` };
}

function App() {
  const projectCount = projects.length;
  const [displayedProjectCount, setDisplayedProjectCount] = useState(0);

  useEffect(() => {
    const duration = 900;
    const startTime = performance.now();
    let animationFrame;

    const updateProjectCount = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayedProjectCount(Math.floor(easedProgress * projectCount));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateProjectCount);
      }
    };

    animationFrame = requestAnimationFrame(updateProjectCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [projectCount]);

  useEffect(() => {
    const revealTargets = document.querySelectorAll('[data-scroll-reveal]');

    if (!('IntersectionObserver' in window)) {
      revealTargets.forEach((target) => target.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <aside className="side-bar">
        <div>
          <figure className="info-header">
            <img src="/img/my_picture.png" alt="picture of the developer" className="info-img" />
            <div className="info-text">
              <span>Ibrahim Abdulmalik</span>
              <p>Frontend Developer</p>
            </div>
          </figure>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map(({ href, icon, label }) => (
              <li key={href}>
                <a href={href} className="icons">
                  <i className={icon}></i>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="contact-footer">
          {socialLinks.map(({ href, icon, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              aria-label={label}
            >
              <i className={icon}></i>
            </a>
          ))}
        </div>
      </aside>

      <main className="main-bar">
        <section id="home" className="hero-section">
          <div className="hero-copy" data-scroll-reveal>
            <span className="eyebrow">Frontend Developer • Open to opportunities</span>
            <h1>Ibrahim Abdulmalik</h1>
            <h2>Building responsive web experiences with React, JavaScript, and user-first design.</h2>
            <p className="header-text">
              I create clean, fast, and conversion-focused interfaces for businesses, startups, and digital products.
              <br />
              My work blends frontend development, UI clarity, and practical product thinking to deliver experiences that look sharp and perform well.
            </p>

            <div className="hero-badges" aria-label="Core frontend skills">
              <span>React</span>
              <span>JavaScript</span>
              <span>Responsive UI</span>
              <span>Accessibility</span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="button-link primary">
                View projects
              </a>
              <a href="#contact" className="button-link secondary">
                Hire me
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>2+</strong>
                <span>Years building</span>
              </div>
              <div>
                <strong>{displayedProjectCount >= 12 ? '12+' : displayedProjectCount}</strong>
                <span>Projects shipped</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Detail-focused</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" data-scroll-reveal data-reveal-delay="120ms">
            <div className="visual-card card-main">
              <img
                src="https://plus.unsplash.com/premium_photo-1661331911412-330f2e99cf53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YSUyMGhhbmQlMjBjb2Rpbmd8ZW58MHx8MHx8fDA%3D"
                alt="A hand coding on a laptop"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className="visual-card card-floating">
              <span>UI/UX</span>
              <strong>Front-end design</strong>
            </div>
          </div>
        </section>

        <section id="about_me" className="about-section">
          <div className="section-header" data-scroll-reveal>
            <span className="eyebrow">About me</span>
            <h2>Thoughtful design meets practical execution</h2>
          </div>

          <div className="about-layout">
            <div className="about-visual" data-scroll-reveal>
              <img
                src="/img/my_picture.png"
                alt="Ibrahim Abdulmalik picture"
                className="about-me-img"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="about-copy" data-scroll-reveal data-reveal-delay="100ms">
              <p className="img-desc">
                I am a front-end developer focused on creating responsive, accessible, and visually polished web experiences. I work with HTML, CSS, JavaScript, and React to turn ideas into clean interfaces that feel intuitive and perform well across devices.
              </p>
              <p className="img-desc">
                I enjoy the full product cycle—from layout and styling to interaction and refinement—while keeping user experience, performance, and maintainability at the center. I am actively growing my skills and looking for opportunities to contribute to meaningful digital products.
              </p>

              <div className="about-facts">
                {aboutFacts.map((fact, index) => (
                  <div
                    className="fact-pill"
                    key={fact}
                    data-scroll-reveal
                    style={getRevealDelayStyle(index * 60)}
                  >
                    {fact}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section reveal-on-scroll">
          <div className="section-heading" data-scroll-reveal>
            <span className="eyebrow">Skills &amp; technologies</span>
            <h2>A focused stack for building polished, production-ready interfaces</h2>
            <p className="skills-lede">
              I work across frontend implementation, responsive design, and deployment to create reliable digital experiences that are clear, useful, and user-friendly.
            </p>
          </div>

          <div className="skills-board">
            {skillGroups.map(({ title, blurb, items, featured }, index) => (
              <article
                className={`skill-track ${featured ? 'is-featured' : ''}`}
                key={title}
                data-scroll-reveal
                style={getRevealDelayStyle(index * 80)}
              >
                <header className="skill-track-head">
                  <span className="skill-track-index">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{blurb}</p>
                  </div>
                </header>
                <div className={`skills-list ${featured ? 'is-bento' : 'is-row'}`}>
                  {items.map(({ icon, label, summary, rank, tone }, itemIndex) => (
                    <div
                      className={`skill-card ${tone}`}
                      key={label}
                      data-scroll-reveal
                      style={getRevealDelayStyle(itemIndex * 55)}
                    >
                      <div className="skill-card-top">
                        <div className="skill-icon-wrap">
                          <i className={icon}></i>
                        </div>
                        <span className={`skill-level ${rank.toLowerCase()}`}>{rank}</span>
                      </div>
                      <div className="skill-copy">
                        <span className="span-text">{label}</span>
                        <small>{summary}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="project-section">
          <div className="section-header" data-scroll-reveal>
            <span className="eyebrow">Selected work</span>
            <h2>Projects built with clarity and purpose</h2>
          </div>

          <div className="project-grid">
            {projects.map(({ href, image, alt, title, tag }, index) => (
              <div
                key={title}
                className="project-card"
                data-scroll-reveal
                style={getRevealDelayStyle(index * 55)}
              >
                <figure className="project-img">
                  <a href={href} target="_blank" rel="noreferrer" aria-label={`View ${title}`}>
                    <img src={image} alt={alt} loading="lazy" decoding="async" />
                  </a>
                  <figcaption className="link-desc">
                    <span>{tag}</span>
                    <strong>{title}</strong>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-panel" data-scroll-reveal>
            <div>
              <span className="eyebrow">Let’s work together</span>
              <h2>Need a website that looks sharp and works smoothly?</h2>
            </div>
            <p>
              Connect with me on social media or send a message. I’m open to new roles, freelance work, and group collaborations.
            </p>

            <div className="footer-contact">
              {socialLinks.map(({ href, icon, label, external }) => (
                <a
                  key={`${label}-footer`}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  aria-label={label}
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer data-scroll-reveal>
          <span>
            &copy; 2026 Ibrahim Abdulmalik Adeyemi portfolio website | Call me:{' '}
            <a href="callto:07013765182">+234 7013765182</a>
          </span>
        </footer>
      </main>
      <SpeedInsights />
    </div>
  );
}

export default App;
