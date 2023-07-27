import { places } from '../data/places'

export const getPlacesByDestination = (destination) => {
  const destinationObj = places.find(
    (place) => place.destination === destination
  )
  return destinationObj ? destinationObj.places : []
}

export const getPlaceByName = (name) => {
  const placeFound = places.find((place) =>
    place.places.find((p) => p.name === name)
  )
  return placeFound ? placeFound.places.find((p) => p.name === name) : null
}

export const getAllPlaces = () => places.map((place) => place.places).flat()

export const getRamdonDestinations = () => {
  const destination = places.filter((place) => place.places.length > 0)
  const randomDestination =
    destination[Math.floor(Math.random() * destination.length)]

  const randomPlace =
    randomDestination.places[
      Math.floor(Math.random() * randomDestination.places.length)
    ]

  return {
    destination: randomDestination.destination,
    place: randomPlace
  }
}
