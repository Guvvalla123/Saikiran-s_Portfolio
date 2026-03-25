import { projects as allProjects } from '../data/projects.js'

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

function filterByCategory(filter) {
  if (filter === 'all') return allProjects
  return allProjects.filter((p) => p.categories.includes(filter))
}

/**
 * Simulates a network fetch so the UI can show loading / error / empty like production.
 * @param {string} filter
 */
export async function simulateProjectFetch(filter) {
  const latency = 380 + Math.floor(Math.random() * 420)
  await delay(latency)

  if (Math.random() < 0.08) {
    throw new Error('Couldn’t load projects. Check your connection and retry.')
  }

  return filterByCategory(filter)
}
