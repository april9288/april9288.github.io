export const portfoliosFromData = [
  {
    id: 1,
    category: "# Open Source",
    title: 'CSS Grid Game',
    content: [
    "- It's a React app that helps users learn CSS Flexbox syntax with playing game",
    "- Contributed to open source work, and currently marked as #1 contributor.",
    "- Totally refactored legacy codebase with React.js and CSS Flexbox.",
    "- Deployed on Github Pages"
    ],
    page: 'https://april9288.github.io/CssGridGame/',
    repo: 'https://github.com/april9288/CssGridGame/',
    image: './static/gridgame.png',
    skills: ["React", "CSS Flexbox", "Github Pages"]
  },
  {
    id: 2,
    category: '# Group Work',
    title: 'Nordstrom System Design',
    content: [
    "- Inherited front-end legacy codebase and scaled up on AWS EC2 instances",
    "- Populated 10M fake product data with Node.js Streams and seeded on Postgresql",
    "- Performance benchmarked: MongoDB vs Postgresql, and chose Postgresql based on stress-test data",
    "- Optimized Nginx on Ubuntu with the least connection algorithm",
    "- Implemented DB replica set to handle 4500 RPS within 0.1 % of error", 
    ], 
    repo: 'https://github.com/april9288/nav',
    image: './static/nordstrom.png',
    skills: ["Postgresql", "Streaming Replica", "Nginx", "AWS EC2", "Loader.io", "Node.js Streams"],
  },
  {
    id: 3,
    category: '# Group Work',
    title: 'Grubhub Clone',
    content: [
    "- Developed a front-end application mocking Grubhub's calendar scheduler using CSS grid.",
    "- Optimized with code-splitting and achieved a 100% score on Chrome Lighthouse.",
    "- Set up Nginx as a reverse-proxy server and deployed on Digital Ocean Ubuntu 18.04.",
    "- Performed unit testing with Jest & Enzyme and achieved a 99% code coverage.", 
    "- Automated the CI/CD process with CircleCI."
    ], 
    page: 'http://138.68.22.104/?id=10',
    repo: 'https://github.com/hrla29-group-targaryen/time-sponsored-optimized',
    image: './static/grubhub.png',
    skills: ["React", "Express.js", "Mongoose", "Nginx", "Digital Ocean", "Heroku", "Jest", "Enzyme", "CircleCI", "AWS S3",],
  },
  {
    id: 4,
    category: '# Medium Blog',
    title: 'How I got a 100% Lighthouse score with my React app',
    content: [
    "- Published a Medium article about web performance optimization.",
    "- Run a performance audit against Grubhub Clone, and achieved a 100% score on the audit.",
    "- Compressed bundle.js with Gzip, Brotli.",
    "- Compressed image files with webp format.",
    "- Analyzed bundle.js with webpack-bundle-analyzer, and removed unnecessary packages.",
    "- Optimized React app with code-splitting.",
    "- Implemented preconnect to perform DNS lookups ahead of time."
    ], 
    page: 'https://medium.com/@april9288/how-i-got-a-100-lighthouse-score-with-my-react-app-2b676ef62113',
    image: 'https://images.unsplash.com/photo-1482178116735-0d7fc4305875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80',
    skills: ["Chrome Lighthouse", "React"],
  },
];
