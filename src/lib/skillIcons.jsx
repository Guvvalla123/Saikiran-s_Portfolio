import {
  SiAxios,
  SiCloudinary,
  SiCss,
  SiEslint,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiPrettier,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedis,
  SiRedux,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

/** Pixel size passed to Simple Icons components (matches reserved slot). */
export const SKILL_SI_ICON_SIZE = 16

/**
 * Only skills with a clear Simple Icons brand mark.
 * Anything omitted renders as text-only (no decorative fallback).
 */
const SKILL_SI_ICONS = {
  'React.js': SiReact,
  'React Hooks': SiReact,
  'React Router': SiReactrouter,
  'Redux Toolkit': SiRedux,
  'TanStack Query': SiReactquery,
  'JavaScript (ES6+)': SiJavascript,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
  Mongoose: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  Redis: SiRedis,
  Cloudinary: SiCloudinary,
  Axios: SiAxios,
  ESLint: SiEslint,
  Prettier: SiPrettier,
  Vercel: SiVercel,
  Render: SiRender,
}

export function getSkillSiIcon(name) {
  return SKILL_SI_ICONS[name] ?? null
}
