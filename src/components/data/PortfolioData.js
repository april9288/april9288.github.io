export const portfoliosFromData = [
  {
    id: 1,
    title: 'Running Late',
    content: [
    "- You are running late for work. But it's dangerous to write an excuse email while driving. Use my app. Login. Click. That's it.",
    "- Improved UX by implementing Social Login with Firebase.",
    "- Deployed express server on Heroku.",
    "- Utilized Sendgrid API to send an email from the web app.",
    ],
    page: 'https://april9288.github.io/runninglate/',
    repo: 'https://github.com/april9288/runninglate',
    image: './static/runninglate.png',
    skills: ["React", "Express.js", "Firebase Auth", "Firebase DB", "Heroku", "Sendgrid api"],
    backend: "https://github.com/april9288/runninglate_api"
  },
  {
    id: 2,
    title: 'Grubhub-Mock',
    content: [
    "- Developed a front-end application mocking Grubhub's calendar scheduler using CSS grid.",
    "- Optimized with code-splitting and achieved a 100% score on Chrome Lighthouse.",
    "- Set up Nginx as a reverse-proxy server and deployed on Digital Ocean Ubuntu 18.04.",
    "- Performed unit testing with Jest & Enzyme and achieved a 99% code coverage.", 
    "- Automated the CI/CD process with CircleCI."
    ], 
    page: 'http://138.68.22.104/?id=10',
    repo: 'https://github.com/hrla29-group-targaryen/time-sponsored',
    image: './static/grubhub.png',
    skills: ["React", "Express.js", "Mongoose", "Nginx", "Digital Ocean", "Heroku", "Jest", "Enzyme", "CircleCI", "AWS S3",],
  },
];
