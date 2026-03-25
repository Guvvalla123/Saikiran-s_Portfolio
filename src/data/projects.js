/**
 * Project case studies — derived from resume PROJECT EXPERIENCE.
 * Problem / solution / impact framed for hiring managers.
 */

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'platform', label: 'Platform' },
  /** Intentionally empty for empty-state UX (no projects carry this category). */
  { id: 'consumer', label: 'Consumer' },
]

export const projects = [
  {
    id: 'shift-management',
    title: 'Shift management system',
    tagline: 'Workforce operations — Admin, Manager, Employee',
    stack: 'MERN · RBAC · Recharts · REST · Audit logging',
    categories: ['enterprise'],
    problem:
      'Operations teams needed controlled onboarding, hierarchical access, and reliable shift and attendance workflows without security gaps or opaque changes.',
    solution:
      'Built a role-based workforce product: invite-only registration, shift scheduling, attendance and timesheets, leave/shift-change approvals, audit logs, and Recharts dashboards. Calendar views with external sync; hardened REST layer with validation, rate limiting, and middleware controls; CSV exports for reporting.',
    impact:
      'Clear accountability via audit trails; structured approvals reduced ad hoc comms; indexed MongoDB patterns support reporting as data grows.',
    links: { github: null, live: null },
  },
  {
    id: 'job-portal',
    title: 'Job portal application',
    tagline: 'Candidates · Recruiters · Admins',
    stack: 'MERN · JWT/RBAC · BullMQ · Cloudinary · React Query',
    categories: ['platform', 'enterprise'],
    problem:
      'A multi-sided hiring flow needed secure roles, application state machines, document handling, and reliable notifications without blocking the API.',
    solution:
      'Designed REST APIs for jobs, applications, and workflows; JWT/RBAC across dashboards; resume uploads via Cloudinary; async notifications with Redis/BullMQ; React front end with React Query, search/filter, and status-driven application tracking. Validation, errors, and API security applied end-to-end.',
    impact:
      'Separated concerns for three personas; background jobs keep UX responsive; document pipeline supports compliance-style review.',
    links: { github: null, live: null },
  },
  {
    id: 'cad-pipeline',
    title: 'CAD & reporting automation',
    tagline: 'Engineering tooling (prior role)',
    stack: 'C# · AutoCAD API · Inventor · JavaScript · EPPlus',
    categories: ['enterprise'],
    problem: 'Engineering teams lost time on repetitive drafting and manual Excel reporting.',
    solution:
      'Desktop automation with AutoCAD APIs; 3D visualization utilities with Inventor and JavaScript; EPPlus for structured Excel outputs.',
    impact: 'Measurable reduction in manual cycles on recurring documentation tasks.',
    links: { github: null, live: null },
  },
]
