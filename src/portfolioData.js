export const navLinks = [
    { href: '#home', icon: 'fa-solid fa-house', label: 'Home' },
    { href: '#about_me', icon: 'fa-regular fa-user', label: 'About me' },
    { href: '#skills', icon: 'fa-regular fa-file-code', label: 'Skills and technologies' },
    { href: '#projects', icon: 'fa-solid fa-folder-open', label: 'Projects' },
    { href: '#contact', icon: 'fa-solid fa-envelope', label: 'Contact' },
];

export const socialLinks = [
    { href: 'mailto:developeralade001@gmail.com', icon: 'fa-solid fa-envelope', label: 'Email' },
    { href: 'https://github.com/Alade017', icon: 'fa-brands fa-github', label: 'GitHub', external: true },
    { href: 'https://www.linkedin.com/in/abdulmalik-ibrahim-668798397', icon: 'fa-brands fa-linkedin', label: 'LinkedIn', external: true },
    { href: '/img/Ibrahim_Abdulmalik_Frontend_Resume.pdf', icon: 'fa-regular fa-file', label: 'Resume', external: true },
    { href: 'https://wa.me/+2347013765182', icon: 'fa-brands fa-whatsapp', label: 'WhatsApp', external: true },
    { href: 'https://x.com/adeyemimalik207', icon: 'fa-brands fa-x-twitter', label: 'X (Twitter)', external: true },
];

export const skillGroups = [
    {
        title: 'Frontend development',
        blurb: 'Building fast, accessible interfaces with modern web standards.',
        featured: true,
        items: [
            { icon: 'fab fa-html5', label: 'HTML', summary: 'Semantic markup', rank: 'Expert', tone: 'html' },
            { icon: 'fab fa-css3-alt', label: 'CSS', summary: 'Modern styling', rank: 'Expert', tone: 'css' },
            { icon: 'fab fa-js', label: 'JavaScript', summary: 'Interactive logic', rank: 'Intermediate', tone: 'js' },
            { icon: 'fab fa-react', label: 'React.js', summary: 'Component-based UI', rank: 'Intermediate', tone: 'react' },
        ],
    },
    {
        title: 'Design & UX',
        blurb: 'Designing layouts that feel clear, consistent, and easy to use.',
        featured: false,
        items: [
            { icon: 'fas fa-mobile-alt', label: 'Responsive Design', summary: 'Mobile-first layouts', rank: 'Intermediate', tone: 'responsive' },
            { icon: 'fas fa-pen-ruler', label: 'UI/UX Design', summary: 'User-focused thinking', rank: 'Beginner', tone: 'ux' },
            { icon: 'fab fa-figma', label: 'Figma', summary: 'Wireframes & prototypes', rank: 'Beginner', tone: 'figma' },
        ],
    },
    {
        title: 'Workflow & deployment',
        blurb: 'Shipping polished work with version control and production hosting.',
        featured: false,
        items: [
            { icon: 'fas fa-code-branch', label: 'Git & GitHub', summary: 'Version control', rank: 'Intermediate', tone: 'git' },
            { icon: 'fas fa-cloud', label: 'Netlify/Vercel', summary: 'Production deployment', rank: 'Intermediate', tone: 'deploy' },
        ],
    },
];

export const aboutFacts = [
    'Responsive front-end experiences',
    'Clean, maintainable code',
    'Modern portfolio design systems',
    'User-focused product thinking',
];

export const projects = [
    {
        href: 'https://brooks-family-lawn-care.netlify.app/',
        image: '/img/project-img/Brooks-lawn-care.jpg',
        alt: 'a website for Brooks family lawn services',
        title: 'Brooks lawn service',
        tag: 'Marketing',
    },
    {
        href: 'https://alade017.github.io/linksync/',
        image: '/img/project-img/linksync.png',
        alt: 'a website for linking multiple account',
        title: 'Lyncsync homepage',
        tag: 'Product Homepage',
        className: '',
    },
    {
        href: 'https://alade2007.github.io/GlobeQuest/',
        image: '/img/project-img/globequest_project.png',
        alt: 'a travel website page picture',
        title: 'Globequest homepage',
        tag: 'Travels & Tours',
        className: '',
    },
    {
        href: 'https://alade017.github.io/renteasy/',
        image: '/img/project-img/renteasy_project.jpg',
        alt: 'a website for house renting packages',
        title: 'Renteasy',
        tag: 'E-commerce Site',
        className: '',
    },
    {
        href: 'https://basketballscorebanner.netlify.app/',
        image: '/img/project-img/Basketball-score-Counter.jpg',
        alt: 'a website for Basketball score counter board',
        title: 'Basketball Scorebooard',
        tag: 'Personal Growth',
        className: '',
    },
    {
        href: 'https://alade2007.github.io/bento_grid_challenge/',
        image: '/img/project-img/bento_grid_project.jpg',
        alt: 'a website for bento grid',
        title: 'Bento grid challenge',
        tag: 'Grid challenge layout',
        className: '',
    },
    {
        href: 'https://free-code-magazine.netlify.app/',
        image: '/img/project-img/magazine.jpg',
        alt: 'the blog magazine image',
        title: 'Magazine blog layout',
        tag: 'Content design',
        className: '',
    },
    {
        href: 'https://nelsonmadela-tributepage.netlify.app/',
        image: '/img/project-img/tribute_page.jpg',
        alt: 'a tribute page for nelson mandela image',
        title: 'Mandela tribute page',
        tag: 'Editorial design',
        className: '',
    },
    {
        href: 'https://chairlab.netlify.app/',
        image: '/img/project-img/design.jpg',
        alt: 'a website for chair lab',
        title: 'ChairLab storefront',
        tag: 'E-commerce UX',
        className: '',
    },
    {
        href: 'https://product-land-tech.netlify.app/',
        image: '/img/project-img/trombone_landing_page.jpg',
        alt: 'trombone landing page picture',
        title: 'Trombone product page',
        tag: 'Product marketing',
        className: '',
    },
    {
        href: 'https://alade017.github.io/password-generator/',
        image: '/img/project-img/Password-Generator.jpg',
        alt: 'password generator mini project picture',
        title: 'Password Generator',
        tag: 'Mini project',
        className: '',
    },
];
