const skillSvgLinks = {
  frontend: [
    { name: "React", Url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", Url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Gatsby", Url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gatsby/gatsby-original.svg"},
    { name: "Electron", Url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg"},
    { name: "Flutter", Url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "Tailwind", Url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
  ],
  backend: [
    { name: "Nest.js", Url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"},
    { name: "Bolt", Url: "https://a.slack-edge.com/58efd/img/api/bolt/bolt-logo.svg" }
  ],
  language: [
    { name: "HTML5", Url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", Url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", Url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", Url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Dart", Url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
    { name: "Python", Url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" }
  ],
  tool: [
    { name: "Figma", Url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  ]
};

export const skillSvgLinkList = [
  { name: "Language", data: skillSvgLinks.language },
  { name: "Frontend", data: skillSvgLinks.frontend },
  { name: "Backend", data: skillSvgLinks.backend },
  { name: "Tool", data: skillSvgLinks.tool }
];