const app = "I don't do much."

const bumpCounter = () => {
  let counter = 0
  let addBump = () => counter++
  let getBumps = () => (counter)
  return {addBump, getBumps}
}

const createAnimal = (animalType) => {
  return (deadlyDevice) => ({animalType, deadlyDevice})
}

const sharkCreator = createAnimal("Shark")

const sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
const sharkWithFrickinCannon = sharkCreator("Cannon")
