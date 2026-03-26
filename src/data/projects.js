/**
 * Active engineering work — order is fixed for the Projects section.
 * GitHub URL uses the public profile; point `github` per project when repos are split out.
 */
import { PERSON } from './site.js'

const GITHUB = PERSON.github

export const projectsSectionIntro =
  'Things I’m building now—APIs, auth, MongoDB, and React screens for staff and operators.'

export const projects = [
  {
    id: 'bwpost-shift-management',
    title: 'Shift planning & attendance (BWPOST)',
    status: 'In Development',
    hook: 'Used at BWPOST to plan shifts, log attendance, and run approvals—so managers and staff share one place for time and coverage.',
    features: [
      'Handles shift rules, roles, and sensitive actions behind checked inputs and rate limits.',
      'Tracks attendance and history; staff and managers see dashboards built for daily use.',
      'Logs important changes so support can see who changed what, when.',
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node', 'JWT', 'REST'],
    github: GITHUB,
  },
  {
    id: 'bwpost-trennkarte',
    title: 'Trennkarte records & approvals (BWPOST)',
    status: 'In Development',
    hook: 'Used to manage dietary-separation records for BWPOST—kitchen and admin stay aligned on what was filed and approved.',
    features: [
      'Moves each record through draft, review, and approval before it counts as final.',
      'Offers search and filtered lists so staff find the right card quickly.',
      'Stores earlier values on key fields when something is updated.',
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node', 'Mongoose', 'JWT'],
    github: GITHUB,
  },
  {
    id: 'job-portal-system',
    title: 'Job Portal System',
    status: 'In Development',
    hook: 'Used to post jobs, collect applications, and give candidates, recruiters, and admins each their own view of the process.',
    features: [
      'Tracks jobs and applications through clear states instead of scattered email.',
      'Résumés and uploads run in the background so the UI stays responsive.',
      'Keeps each role’s screens in sync with live data as people search and filter.',
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node', 'Redis', 'BullMQ', 'TanStack Query'],
    github: GITHUB,
  },
]
