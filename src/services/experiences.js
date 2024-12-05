import { getDestination } from './destinations'

export function getExperiences(id) {
  const destination = getDestination(id)
  return destination.experiences
}

export function getExperience(id, slug) {
  const destination = getDestination(id)
  return destination.experiences.find((experience) => experience.slug === slug)
}
