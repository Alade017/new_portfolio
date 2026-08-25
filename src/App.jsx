import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#home', icon: 'fa-solid fa-house', label: 'Home' },
  { href: '#about_me', icon: 'fa-regular fa-user', label: 'About me' },
  { href: '#skills', icon: 'fa-regular fa-file-code', label: 'Skills and technologies' },
  { href: '#projects', icon: 'fa-solid fa-folder-open', label: 'Projects' },
  { href: '#contact', icon: 'fa-solid fa-envelope', label: 'Contact' },
];

const socialLinks = [
  { href: '#', icon: 'fa-solid fa-envelope', label: 'Email' },
  { href: 'https://github.com/', icon: 'fa-brands fa-github', label: 'GitHub', external: true },
  { href: 'https://linkedin.com/', icon: 'fa-brands fa-linkedin', label: 'LinkedIn', external: true },
  { href: '#', icon: 'fa-regular fa-file', label: 'Resume' },
  { href: 'https://wa.me/+2347013765182', icon: 'fa-brands fa-whatsapp', label: 'WhatsApp', external: true },
  { href: '#', icon: 'fa-brands fa-x-twitter', label: 'X (Twitter)' },
];

const skillGroups = [
  {
    title: 'Frontend development',
    items: [
      { icon: 'fab fa-html5', label: 'HTML', level: 'Semantic markup', tone: 'html' },
      { icon: 'fab fa-css3-alt', label: 'CSS', level: 'Modern styling', tone: 'css' },
      { icon: 'fab fa-js', label: 'JavaScript', level: 'Interactive logic', tone: 'js' },
      { icon: 'fab fa-react', label: 'React.js', level: 'Component-based UI', tone: 'react' },
    ],
  },
  {
    title: 'Design & UX',
    items: [
      { icon: 'fas fa-mobile-alt', label: 'Responsive Design', level: 'Mobile-first layouts', tone: 'responsive' },
      { icon: 'fas fa-pen-ruler', label: 'UI/UX Design Fundamentals', level: 'User-focused thinking', tone: 'ux' },
      { icon: 'fab fa-figma', label: 'Figma', level: 'Wireframes & prototypes', tone: 'figma' },
    ],
  },
  {
    title: 'Workflow & deployment',
    items: [
      { icon: 'fas fa-code-branch', label: 'Git & GitHub', level: 'Version control', tone: 'git' },
      { icon: 'fas fa-cloud', label: 'Netlify/Vercel', level: 'Production deployment', tone: 'deploy' },
    ],
  },
];

const aboutFacts = [
  'Responsive front-end experiences',
  'Clean, maintainable code',
  'Modern portfolio design systems',
  'User-focused product thinking',
];

const projects = [
  {
    href: 'https://chairlab.netlify.app/',
    image: './img/project-img/design.jpg',
    alt: 'a website for chair lab',
    title: 'ChairLab storefront',
    tag: 'E-commerce UX',
    className: 'featured-project',
  },
  {
    href: 'https://nelsonmadela-tributepage.netlify.app/',
    image: './img/project-img/tribute_page.jpg',
    alt: 'a tribute page for nelson mandela image',
    title: 'Mandela tribute page',
    tag: 'Editorial design',
    className:'',
  },
  {
    href: 'https://free-code-magazine.netlify.app/',
    image: './img/project-img/magazine.jpg',
    alt: 'the blog magazine image',
    title: 'Magazine blog layout',
    tag: 'Content design',
    className:'',
  },
  {
    href: 'https://dream-sweet.netlify.app/',
    image: './img/project-img/dream_ei.jpg',
    alt: 'a motivational landing page picture',
    title: 'Dreamwise landing page',
    tag: 'Brand storytelling',
    className:'',
  },
  {
    href: 'https://omnifood-mini-project.netlify.app/',
    image: './img/project-img/ominifood_mini_project.jpg',
    alt: 'omnifood mini project picture',
    title: 'Omnifood concept',
    tag: 'SaaS landing page',
    className:'',
  },
  {
    href: 'https://product-land-tech.netlify.app/',
    image: './img/project-img/trombone_landing_page.jpg',
    alt: 'trombone landing page picture',
    title: 'Trombone product page',
    tag: 'Product marketing',
    className:'',
  },
];

function App() {
  const projectCount = projects.length;
  const [displayedProjectCount, setDisplayedProjectCount] = useState(0);

  useEffect(() => {
    const duration = 900;
    const startTime = performance.now();
    /**
     * @type {number}
     */
    let animationFrame;

    const updateProjectCount = (/** @type {number} */ currentTime) => {
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

  return (
    <div className="container">
      <aside className="side-bar">
        <div>
          <figure className="info-header">
            <img src="./img/my_picture.png" alt="picture of the developer" className="info-img" />
            <div className="info-text">
              <span>Ibrahim Abdulmalik</span>
              <p>Web designer</p>
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
          <div className="hero-copy">
            <span className="eyebrow">Available for freelance &amp; product work</span>
            <h1>Hi, i am Ibrahim Abdulmalik</h1>
            <h2>Website developer • Website designer • Graphics designer</h2>
            <p className="header-text">
              Building ideas into experience, one line of code at a time.
              <br />
              Clean code. Clean vision.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button-link primary">
                View projects
              </a>
              <a href="#contact" className="button-link secondary">
                Let’s talk
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>2+</strong>
                <span>Years building</span>
              </div>
              <div>
                <strong>{displayedProjectCount >= 12 ? '12+' : displayedProjectCount}</strong>
                <span>Projects available</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Detail-focused</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card card-main">
              <img src="https://i.pinimg.com/736x/a7/00/9c/a7009ce495034c5e15571e8b0fdcf742.jpg" alt="Ibrahim Abdulmalik portrait" />
            </div>
            <div className="visual-card card-floating">
              <span>UI/UX</span>
              <strong>Front-end design</strong>
            </div>
          </div>
        </section>

        <section id="about_me" className="about-section">
          <div className="section-header">
            <span className="eyebrow">About me</span>
            <h2>Thoughtful design meets practical execution</h2>
          </div>

          <div className="about-layout">
            <div className="about-visual">
              <img
                src="./img/my_picture.png"
                alt="Ibrahim Abdulmalik picture"
                className="about-me-img"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="about-copy">
                <p className="img-desc">
                  Ibrahim Abdulmalik is a passionate front-end web developer and designer who enjoys turning ideas into modern, interactive digital experiences. He specializes in HTML, CSS, JavaScript and lot more, creating responsive websites that work smoothly across devices and feel polished to use. He is focused on building clean, efficient, and user-friendly interfaces, while also paying attention to accessibility, performance, and visual quality.
                </p>
                <p className="img-desc">
                  He enjoys the full creative process of web development from layout design and interface styling to adding functionality and refining the user experience. He is constantly learning, exploring new ideas, and improving his skills through real projects. His goal is to keep growing as a developer and build meaningful digital experiences that make an impact.
                </p>

              <div className="about-facts">
                {aboutFacts.map((fact) => (
                  <div className="fact-pill" key={fact}>{fact}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section reveal-on-scroll">
          <div className="section-heading">
            <span className="eyebrow">Skills &amp; technologies</span>
            <h2>Modern tools for polished digital experiences</h2>
          </div>

          {skillGroups.map(({ title, items }) => (
            <div className="skill-group" key={title}>
              <h3>{title}</h3>
              <div className="skills-list">
                {items.map(({ icon, label, level, tone }) => (
                  <div className={`skill-card ${tone}`} key={label}>
                    <div className="skill-icon-wrap">
                      <i className={icon}></i>
                    </div>
                    <div className="skill-copy">
                      <span className="span-text">{label}</span>
                      <small>{level}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="projects" className="project-section">
          <div className="section-header">
            <span className="eyebrow">Selected work</span>
            <h2>Projects built with clarity and purpose</h2>
          </div>

          <div className="project-grid">
            {projects.map(({ href, image, alt, title, tag, className }) => (
              <div key={title} className={`project-card ${className}`}>
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
          <div className="contact-panel">
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

        <footer>
          <span>
            &copy; 2026 updated Ibrahim Abdulmalik Adeyemi portfolio website | Call me:{' '}
            <a href="callto:07013765182">+234 7013765182</a>
          </span>
        </footer>
      </main>
    </div>
  );
}

export default App;
