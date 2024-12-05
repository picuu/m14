import destinationsData from '@/assets/data.json'

export function getDestinations() {
  return destinationsData.destinations
}

export function getDestination(id) {
  return getDestinations().find((destination) => destination.id === id)
}
